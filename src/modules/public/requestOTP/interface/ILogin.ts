import { IGlobalRes } from "../../../interface/Global";


interface ILoginRes {
    type: string
    hash: string
    otp: string
    id: string
    created_at: string
}
export interface ILoginResponse extends IGlobalRes {
    results: ILoginRes
}