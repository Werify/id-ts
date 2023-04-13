import { config } from "../../config"
/**
* @description Post Add mobile Number
* @param mobile_number: send mobile number
* @argument token
* @returns mobile number list
* @default /api/user/mobile-numbers
*/
export const addMobileNumber = async (accessToken: string, mobile_number: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/mobile-numbers'),
        { headers: { 'authorization': accessToken }, method: 'post', body: mobile_number })
        .then(response => response.json())
        .then(json => { return json })
}