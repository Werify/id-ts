import { ILoginResponse } from './interface/Login';
/**
    * @description request user login otp
    * @param identifier: string
    * @returns a session
    * @default /api/v1/login
    */
export declare const requestOTP: (identifier: any, endpoint?: string) => Promise<ILoginResponse>;
