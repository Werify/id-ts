import { config } from "../../config"
import { IVerifyOTPResponse } from "./interfaces/VerifyOTP"
/**
* @description Login user with OTP
* @param id: string
* @param hash: string
* @param otp: string
* @returns Access Token and User Data
* @default /api/v1/otp
*/
export const loginOTP = async (payload: any, endpoint?: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/otp'), { method: 'post', body: payload })
        .then(async response => {
            if (response.ok) {
                return await response.json() as IVerifyOTPResponse
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}