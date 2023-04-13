import { config } from "../../config";
/**
    * @description Get User Mobile numbers
    * @argument token
    * @returns user Numbers
    * @default /api/user/profile/mobile-numbers
    */
export const getUserNumbers = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/profile/mobile-numbers'),
        { headers: { 'authorization': accessToken } })
        .then(response => response.json())
        .then(json => { return json })
}