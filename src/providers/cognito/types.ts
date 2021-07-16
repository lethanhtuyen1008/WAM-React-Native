import {
  AuthConfig,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
  SignOutRequest,
  SignOutResponse,
  SendResetPasswordEmailRequest,
  SendResetPasswordEmailResponse,
  RenewTokenRequest,
  RenewTokenResponse,
  SendVerificationEmailRequest,
  SendVerificationEmailResponse,
  VerifyAccountRequest,
  VerifyAccountResponse,
} from '../../core/types';

export type CognitoAuthConfig = AuthConfig;

export type CognitoSignInRequest = SignInRequest;

export type CognitoSignInResponse = SignInResponse;

export type CognitoSignUpRequest = SignUpRequest;

export type CognitoSignUpResponse = SignUpResponse;

export type CognitoSignOutRequest = SignOutRequest;

export type CognitoSignOutResponse = SignOutResponse;

export type CognitoResetPasswordRequest = SendResetPasswordEmailRequest;

export type CognitoResetPasswordResponse = SendResetPasswordEmailResponse;

export type CognitoRenewTokenRequest = RenewTokenRequest;

export type CognitoRenewTokenResponse = RenewTokenResponse;

export type CognitoVerifyAccountRequest = VerifyAccountRequest;

export type CognitoVerifyAccountResponse = VerifyAccountResponse;

export type CognitoSendVerificationEmailRequest = SendVerificationEmailRequest;

export type CognitoSendVerificationEmailResponse = SendVerificationEmailResponse;
