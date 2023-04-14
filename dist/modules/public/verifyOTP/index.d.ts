import { IVerifyOTPPayload, IVerifyOTPResponse } from "./interfaces/IVerifyOTP";
/**
* @description Login user with OTP
* @param id: string
* @param hash: string
* @param otp: string
* @returns Access Token and User Data
* @default /api/v1/otp
*/
export declare const verifyOTP: (payload: IVerifyOTPPayload, endpoint?: string) => Promise<IVerifyOTPResponse>;
