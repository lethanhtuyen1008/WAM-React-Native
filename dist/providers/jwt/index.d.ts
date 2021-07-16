import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BaseAuthProvider } from '../../core';
import { UpdatePasswordResponse } from '../../core/types';
import { JwtAuthConfig, JwtAuthEndpoints, JwtRenewTokenRequest, JwtRenewTokenResponse, JwtSendResetPasswordEmailRequest, JwtSendResetPasswordEmailResponse, JwtSendVerificationEmailRequest, JwtSendVerificationEmailResponse, JwtSignInRequest, JwtSignInResponse, JwtSignUpRequest, JwtSignUpResponse, JwtUpdatePasswordRequest, JwtVerifyAccountRequest, JwtVerifyAccountResponse } from './types';
export declare abstract class JwtAuthProvider extends BaseAuthProvider<JwtAuthConfig> {
    axiosClient: AxiosInstance;
    renewalTask?: Promise<JwtRenewTokenResponse | null | undefined> | null;
    get endpoints(): JwtAuthEndpoints;
    get accessTokenKey(): string;
    get refreshTokenKey(): string;
    constructor(config: JwtAuthConfig);
    signUp(request: JwtSignUpRequest): Promise<JwtSignUpResponse>;
    signIn(request: JwtSignInRequest): Promise<JwtSignInResponse>;
    signOut(): any;
    isSignedIn(): boolean;
    sendResetPasswordEmail(request: JwtSendResetPasswordEmailRequest): Promise<JwtSendResetPasswordEmailResponse>;
    updatePassword(request: JwtUpdatePasswordRequest): Promise<UpdatePasswordResponse>;
    renewToken(request: JwtRenewTokenRequest): Promise<JwtRenewTokenResponse>;
    verifyAccount(request: JwtVerifyAccountRequest): Promise<JwtVerifyAccountResponse>;
    sendVerificationEmail(request: JwtSendVerificationEmailRequest): Promise<JwtSendVerificationEmailResponse>;
    initializeAxiosClient(axiosClient: AxiosInstance): void;
    onRequestFulfilled(requestConfig: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig>;
    onRequestRejected(error: any): any;
    onResponseFulfilled(response: AxiosResponse<{
        data: any;
    }>): any | Promise<any>;
    onResponseRejected(error: any): Promise<any>;
}
