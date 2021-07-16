import { BaseAuthProvider } from '../../core';
import { UpdatePasswordRequest, UpdatePasswordResponse } from '../../core/types';
import {
  CognitoAuthConfig,
  CognitoRenewTokenRequest,
  CognitoRenewTokenResponse,
  CognitoSendVerificationEmailRequest,
  CognitoSendVerificationEmailResponse,
  CognitoResetPasswordRequest,
  CognitoResetPasswordResponse,
  CognitoSignInRequest,
  CognitoSignInResponse,
  CognitoSignOutRequest,
  CognitoSignOutResponse,
  CognitoSignUpRequest,
  CognitoSignUpResponse,
  CognitoVerifyAccountRequest,
  CognitoVerifyAccountResponse,
} from './types';

export class CognitoAuthProvider extends BaseAuthProvider<CognitoAuthConfig> {
  signUp(request: CognitoSignUpRequest): Promise<CognitoSignUpResponse> {
    return Promise.resolve(request);
  }

  signIn(request: CognitoSignInRequest): Promise<CognitoSignInResponse> {
    return Promise.resolve(request);
  }

  signOut(request: CognitoSignOutRequest): Promise<CognitoSignOutResponse> {
    return Promise.resolve(request);
  }

  isSignedIn(): boolean {
    return false;
  }

  sendResetPasswordEmail(request: CognitoResetPasswordRequest): Promise<CognitoResetPasswordResponse> {
    return Promise.resolve(request);
  }

  updatePassword(request: UpdatePasswordRequest): Promise<UpdatePasswordResponse> {
    return Promise.resolve(request);
  }

  renewToken(request: CognitoRenewTokenRequest): Promise<CognitoRenewTokenResponse> {
    return Promise.resolve(request);
  }

  verifyAccount(request: CognitoVerifyAccountRequest): Promise<CognitoVerifyAccountResponse> {
    return Promise.resolve(request);
  }

  sendVerificationEmail(request: CognitoSendVerificationEmailRequest): Promise<CognitoSendVerificationEmailResponse> {
    return Promise.resolve(request);
  }
}
