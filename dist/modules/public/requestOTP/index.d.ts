/**
    * @description request user login otp
    * @param identifier: string such as email
    * @example {email:"email_here"}
    * @returns a session
    * @default /api/v1/login
    */
export declare const requestOTP: (identifier: string, endpoint?: string) => Promise<unknown>;
