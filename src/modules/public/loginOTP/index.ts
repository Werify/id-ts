import { config } from "../../config"
/**
* @description Login user with OTP
* @param id: string
* @param hash: string
* @param otp: string
* @returns Access Token and User Data
* @default /api/otp
*/
export const loginOTP = async (payload: any, endpoint?: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/otp'), { method: 'post', body: payload })
        .then(response => response.json())
        .then(json => { return json })
}