import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BaseAuthProvider } from '../../core';
import { cookieProvider } from '../../core/cookieProvider';
import { UpdatePasswordResponse } from '../../core/types';
import { getDeviceInfo } from '../../helpers/deviceInfo';
import { util } from '../../helpers/utils';
import {
  JwtAuthConfig,
  JwtAuthEndpoints,
  JwtRenewTokenRequest,
  JwtRenewTokenResponse,
  JwtSendResetPasswordEmailRequest,
  JwtSendResetPasswordEmailResponse,
  JwtSendVerificationEmailRequest,
  JwtSendVerificationEmailResponse,
  JwtSignInRequest,
  JwtSignInResponse,
  JwtSignUpRequest,
  JwtSignUpResponse,
  JwtUpdatePasswordRequest,
  JwtVerifyAccountRequest,
  JwtVerifyAccountResponse,
} from './types';

export abstract class JwtAuthProvider extends BaseAuthProvider<JwtAuthConfig> {
  axiosClient: AxiosInstance;
  renewalTask?: Promise<JwtRenewTokenResponse | null | undefined> | null;

  get endpoints(): JwtAuthEndpoints {
    return this.config.endpoints;
  }

  get accessTokenKey(): string {
    return this.config.accessTokenKey || 'ac';
  }

  get refreshTokenKey(): string {
    return this.config.refreshTokenKey || 'rt';
  }

  constructor(config: JwtAuthConfig) {
    super(config);

    this.axiosClient = axios.create({
      timeout: 60 * 1000,
      headers: {
        'Content-Type': 'application/json',
        Pragma: 'no-cache',
      },
    });
    this.initializeAxiosClient(this.axiosClient);
  }

  signUp(request: JwtSignUpRequest): Promise<JwtSignUpResponse> {
    return this.axiosClient.post<any, JwtSignUpResponse>(this.endpoints.signUp, request);
  }

  async signIn(request: JwtSignInRequest): Promise<JwtSignInResponse> {
    const response = await this.axiosClient.post<any, JwtSignInResponse>(this.endpoints.signIn, request);

    if (response.token) {
      cookieProvider.set(this.accessTokenKey, response.token);
      cookieProvider.set(this.refreshTokenKey, response.refreshToken);
      return response;
    }

    throw new Error(response.message || 'Unknown Error');
  }

  signOut(): any {
    cookieProvider.remove(this.accessTokenKey, this.refreshTokenKey);
  }

  isSignedIn(): boolean {
    return cookieProvider.has(this.accessTokenKey);
  }

  sendResetPasswordEmail(request: JwtSendResetPasswordEmailRequest): Promise<JwtSendResetPasswordEmailResponse> {
    const { email } = request;
    return this.axiosClient.post<any, JwtSendResetPasswordEmailResponse>(this.endpoints.sendResetPasswordEmail, {
      email,
    });
  }

  updatePassword(request: JwtUpdatePasswordRequest): Promise<UpdatePasswordResponse> {
    const { id, code, password } = request;
    const endpoint = util.formatString(this.endpoints.updatePassword, { id });
    return this.axiosClient.patch<any, UpdatePasswordResponse>(endpoint, {
      code,
      password,
    });
  }

  renewToken(request: JwtRenewTokenRequest): Promise<JwtRenewTokenResponse> {
    return this.axiosClient.post<any, JwtRenewTokenResponse>(this.endpoints.renewToken, request);
  }

  async verifyAccount(request: JwtVerifyAccountRequest): Promise<JwtVerifyAccountResponse> {
    const { id, code } = request;
    const formattedEndpoint = util.formatString(this.endpoints.accountVerification, { id });
    const response = await this.axiosClient.patch<any, JwtVerifyAccountResponse>(formattedEndpoint, {
      code,
    });
    if (response) {
      const { token, refreshToken } = response;
      token && cookieProvider.set(this.accessTokenKey, token);
      refreshToken && cookieProvider.set(this.refreshTokenKey, refreshToken);
    }

    return response;
  }

  sendVerificationEmail(request: JwtSendVerificationEmailRequest): Promise<JwtSendVerificationEmailResponse> {
    return this.axiosClient.post<any, JwtSendVerificationEmailResponse>(this.endpoints.sendVerificationEmail, request);
  }

  initializeAxiosClient(axiosClient: AxiosInstance): void {
    axiosClient.interceptors.request.use(this.onRequestFulfilled.bind(this), this.onRequestRejected.bind(this));
    axiosClient.interceptors.response.use(this.onResponseFulfilled.bind(this), this.onResponseRejected.bind(this));
  }

  onRequestFulfilled(requestConfig: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> {
    requestConfig.headers.deviceInfo = getDeviceInfo();
    const accessToken = cookieProvider.get(this.accessTokenKey);

    if (accessToken && requestConfig.url !== this.endpoints.renewToken) {
      requestConfig.headers.Authorization = accessToken;
    }

    return requestConfig;
  }

  onRequestRejected(error: any): any {
    return Promise.reject(error);
  }

  onResponseFulfilled(response: AxiosResponse<{ data: any }>): any | Promise<any> {
    return response.data.data;
  }

  async onResponseRejected(error: any): Promise<any> {
    const response = error.response;
    const currentRefreshToken = cookieProvider.get(this.refreshTokenKey);
    const errorCode = response?.status || error.status;

    if (currentRefreshToken && errorCode === 401) {
      if (!this.renewalTask) {
        this.renewalTask = this.renewToken({ refreshToken: currentRefreshToken })
          .catch(() => this.signOut())
          .finally(() => (this.renewalTask = null));
      }

      const { token, refreshToken } = (await this.renewalTask) || {};

      if (token && refreshToken) {
        cookieProvider.set(this.accessTokenKey, token);
        cookieProvider.set(this.refreshTokenKey, refreshToken);
        const originalRequest = error.config;
        return this.axiosClient(originalRequest);
      }
    }

    if (this.isSignedIn()) {
      this.signOut();
    }

    return Promise.reject(error);
  }
}
