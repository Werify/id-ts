/**
* @description Post Add mobile Number
* @param mobile_number: send mobile number
* @argument token
* @returns mobile number list
* @default /api/user/mobile-numbers
*/
export declare const addMobileNumber: (accessToken: string, mobile_number: string, endpoint: string) => Promise<any>;
