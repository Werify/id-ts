import { config } from "../../config"
/**
   * @description Get User Profile Data
   * @argument token
   * @returns user data
   * @default /api/v1/user/profile
   */
export const getUserProfile = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/user/profile'),
        { headers: { 'authorization': accessToken } })
        .then(response => response.json())
        .then(json => { return json })
}