import { IGlobalRes } from "../../../interface/Global";
interface IUserRes {
    id: number;
    name: string;
    identifier: string;
    username: null;
    email_verified_at: string;
    created_at: null;
    updated_at: null;
    profile: {
        first_name: string;
        middle_name: string;
        last_name: string;
        mobile_number: string;
        avatar: string;
        cover: string;
        is_private: boolean;
        language: null;
        currency: null;
        timezone: null;
        calendar: null;
        shortcuts: null;
        layout: null;
        latitude: null;
        longitude: null;
        last_online: null;
        updated_at: null;
    };
    profile_badges: [];
    profile_numbers: [];
    profile_education: [];
    financial_information: null;
    profile_metas: [];
}
export interface IGetUserResponse extends IGlobalRes {
    results: IUserRes;
}
export {};
