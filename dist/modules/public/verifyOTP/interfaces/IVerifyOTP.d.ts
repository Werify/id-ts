import { IGlobalRes } from "../../../interface/Global";
export interface IVerifyOTPResponse extends IGlobalRes {
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    mobile: string;
    phone_numbers: [];
    language: string;
    timezone: null;
    currency: string;
    last_connection: null;
    private: null;
    avatar: null;
    access_token: string;
    token_type: string;
}
export interface IVerifyOTPPayload {
    type: string;
    hash: string;
    otp: string;
    id: string;
}
