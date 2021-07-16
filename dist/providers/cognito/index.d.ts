import { BaseAuthProvider } from '../../core';
import { UpdatePasswordRequest, UpdatePasswordResponse } from '../../core/types';
import { CognitoAuthConfig, CognitoRenewTokenRequest, CognitoRenewTokenResponse, CognitoSendVerificationEmailRequest, CognitoSendVerificationEmailResponse, CognitoResetPasswordRequest, CognitoResetPasswordResponse, CognitoSignInRequest, CognitoSignInResponse, CognitoSignOutRequest, CognitoSignOutResponse, CognitoSignUpRequest, CognitoSignUpResponse, CognitoVerifyAccountRequest, CognitoVerifyAccountResponse } from './types';
export declare class CognitoAuthProvider extends BaseAuthProvider<CognitoAuthConfig> {
    signUp(request: CognitoSignUpRequest): Promise<CognitoSignUpResponse>;
    signIn(request: CognitoSignInRequest): Promise<CognitoSignInResponse>;
    signOut(request: CognitoSignOutRequest): Promise<CognitoSignOutResponse>;
    isSignedIn(): boolean;
    sendResetPasswordEmail(request: CognitoResetPasswordRequest): Promise<CognitoResetPasswordResponse>;
    updatePassword(request: UpdatePasswordRequest): Promise<UpdatePasswordResponse>;
    renewToken(request: CognitoRenewTokenRequest): Promise<CognitoRenewTokenResponse>;
    verifyAccount(request: CognitoVerifyAccountRequest): Promise<CognitoVerifyAccountResponse>;
    sendVerificationEmail(request: CognitoSendVerificationEmailRequest): Promise<CognitoSendVerificationEmailResponse>;
}
