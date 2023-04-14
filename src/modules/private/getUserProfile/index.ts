import { config } from "../../config"
import { IGetUserResponse } from "./interface/IUserProfile"
/**
   * @description Get User Profile Data
   * @argument token
   * @returns user data
   * @default /api/v1/user/profile
   */
export const getUserProfile = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/user/profile'),
        { headers: { 'authorization': accessToken } })
        .then(async response => {
            if (response.ok) {
                return await response.json() as IGetUserResponse
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}