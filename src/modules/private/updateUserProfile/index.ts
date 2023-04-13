import { config } from "../../config"
/**
* @description PUT Update UserProfile
* @param any: send fields ou want to change
* @argument token
* @returns updated user data
* @default /api/user/profile
*/
export const updateUserProfile = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/profile'),
        { headers: { 'authorization': accessToken }, method: 'put' })
        .then(response => response.json())
        .then(json => { return json })
}