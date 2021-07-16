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
} from './types';

export interface AuthProvider {
  signUp(request: SignUpRequest): Promise<SignUpResponse>;
  signIn(request: SignInRequest): Promise<SignInResponse>;
  signOut(request: SignOutRequest): Promise<SignOutResponse>;
  isSignedIn(): boolean;
  sendResetPasswordEmail(request: SendResetPasswordEmailRequest): Promise<SendResetPasswordEmailResponse>;
  updatePassword(request: UpdatePasswordRequest): Promise<UpdatePasswordResponse>;
  renewToken(request: RenewTokenRequest): Promise<RenewTokenResponse>;
  verifyAccount(request: VerifyAccountRequest): Promise<VerifyAccountResponse>;
  sendVerificationEmail(request: SendVerificationEmailRequest): Promise<SendVerificationEmailResponse>;
}

export abstract class BaseAuthProvider<T extends AuthConfig> implements AuthProvider {
  config: T;

  constructor(config: T) {
    this.config = config;
  }

  abstract signUp(request: SignUpRequest): Promise<SignUpResponse>;
  abstract signIn(request: SignInRequest): Promise<SignInResponse>;
  abstract signOut(request: SignOutRequest): Promise<SignOutResponse>;
  abstract isSignedIn(): boolean;
  abstract sendResetPasswordEmail(request: SendResetPasswordEmailRequest): Promise<SendResetPasswordEmailResponse>;
  abstract updatePassword(request: UpdatePasswordRequest): Promise<UpdatePasswordResponse>;
  abstract renewToken(request: RenewTokenRequest): Promise<RenewTokenResponse>;
  abstract verifyAccount(request: VerifyAccountRequest): Promise<VerifyAccountResponse>;
  abstract sendVerificationEmail(request: SendVerificationEmailRequest): Promise<SendVerificationEmailResponse>;
}
