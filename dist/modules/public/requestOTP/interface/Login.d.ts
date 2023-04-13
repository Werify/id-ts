import { IGlobalRes } from "../../../interface/Global";
export interface ILoginResponse extends IGlobalRes {
    type: string;
    hash: string;
    otp: string;
    id: string;
    created_at: string;
}
