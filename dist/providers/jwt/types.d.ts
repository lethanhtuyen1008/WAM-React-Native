import { AuthConfig, RenewTokenRequest, RenewTokenResponse, SendVerificationEmailRequest, SendVerificationEmailResponse, SendResetPasswordEmailRequest, SendResetPasswordEmailResponse, SignInRequest, SignInResponse, SignOutRequest, SignOutResponse, SignUpRequest, SignUpResponse, UpdatePasswordRequest, UpdatePasswordResponse, VerifyAccountRequest, VerifyAccountResponse } from '../../core/types';
export declare type JwtAuthEndpoints = {
    signUp: string;
    signIn: string;
    renewToken: string;
    accountVerification: string;
    sendVerificationEmail: string;
    sendResetPasswordEmail: string;
    updatePassword: string;
};
export declare type JwtAuthConfig = AuthConfig & {
    accessTokenKey?: string;
    refreshTokenKey?: string;
    endpoints: JwtAuthEndpoints;
};
export declare type JwtSignInRequest = SignInRequest & {
    email: string;
    password: string;
};
export declare type JwtSignInResponse = SignInResponse & {
    token?: string;
    refreshToken?: string;
    id?: string;
    email?: string;
    userStatus?: string;
    message?: string;
};
export declare type JwtSignUpRequest = SignUpRequest & {
    email: string;
    password: string;
};
export declare type JwtSignUpResponse = SignUpResponse & {
    id: string;
    email: string;
};
export declare type JwtSignOutRequest = SignOutRequest;
export declare type JwtSignOutResponse = SignOutResponse;
export declare type JwtSendResetPasswordEmailRequest = SendResetPasswordEmailRequest & {
    email: string;
};
export declare type JwtSendResetPasswordEmailResponse = SendResetPasswordEmailResponse;
export declare type JwtUpdatePasswordRequest = UpdatePasswordRequest & {
    id: string;
    code: string;
    password: string;
};
export declare type JwtUpdatePasswordResponse = UpdatePasswordResponse;
export declare type JwtRenewTokenRequest = RenewTokenRequest & {
    refreshToken: string;
};
export declare type JwtRenewTokenResponse = RenewTokenResponse & {
    token: string;
    refreshToken: string;
};
export declare type JwtVerifyAccountRequest = VerifyAccountRequest & {
    id: string;
    code: string;
};
export declare type JwtVerifyAccountResponse = VerifyAccountResponse & {
    token: string;
    refreshToken: string;
};
export declare type JwtSendVerificationEmailRequest = SendVerificationEmailRequest & {
    uid: string;
};
export declare type JwtSendVerificationEmailResponse = SendVerificationEmailResponse;
