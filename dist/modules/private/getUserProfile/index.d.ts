import { IGetUserResponse } from "./interface/IUserProfile";
/**
   * @description Get User Profile Data
   * @argument token
   * @returns user data
   * @default /api/v1/user/profile
   */
export declare const getUserProfile: (accessToken: string, endpoint: string) => Promise<IGetUserResponse>;
