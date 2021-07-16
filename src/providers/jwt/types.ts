import {
  AuthConfig,
  RenewTokenRequest,
  RenewTokenResponse,
  SendVerificationEmailRequest,
  SendVerificationEmailResponse,
  SendResetPasswordEmailRequest,
  SendResetPasswordEmailResponse,
  SignInRequest,
  SignInResponse,
  SignOutRequest,
  SignOutResponse,
  SignUpRequest,
  SignUpResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  VerifyAccountRequest,
  VerifyAccountResponse,
} from '../../core/types';

export type JwtAuthEndpoints = {
  signUp: string;
  signIn: string;
  renewToken: string;
  accountVerification: string;
  sendVerificationEmail: string;
  sendResetPasswordEmail: string;
  updatePassword: string;
};

export type JwtAuthConfig = AuthConfig & {
  accessTokenKey?: string;
  refreshTokenKey?: string;
  endpoints: JwtAuthEndpoints;
};

export type JwtSignInRequest = SignInRequest & {
  email: string;
  password: string;
};

export type JwtSignInResponse = SignInResponse & {
  token?: string;
  refreshToken?: string;
  id?: string;
  email?: string;
  userStatus?: string;
  message?: string;
};

export type JwtSignUpRequest = SignUpRequest & {
  email: string;
  password: string;
};

export type JwtSignUpResponse = SignUpResponse & {
  id: string;
  email: string;
};

export type JwtSignOutRequest = SignOutRequest;

export type JwtSignOutResponse = SignOutResponse;

export type JwtSendResetPasswordEmailRequest = SendResetPasswordEmailRequest & {
  email: string;
};

export type JwtSendResetPasswordEmailResponse = SendResetPasswordEmailResponse;

export type JwtUpdatePasswordRequest = UpdatePasswordRequest & {
  id: string;
  code: string;
  password: string;
};

export type JwtUpdatePasswordResponse = UpdatePasswordResponse;

export type JwtRenewTokenRequest = RenewTokenRequest & {
  refreshToken: string;
};

export type JwtRenewTokenResponse = RenewTokenResponse & {
  token: string;
  refreshToken: string;
};

export type JwtVerifyAccountRequest = VerifyAccountRequest & {
  id: string;
  code: string;
};

export type JwtVerifyAccountResponse = VerifyAccountResponse & {
  token: string;
  refreshToken: string;
};

export type JwtSendVerificationEmailRequest = SendVerificationEmailRequest & {
  uid: string;
};

export type JwtSendVerificationEmailResponse = SendVerificationEmailResponse;
