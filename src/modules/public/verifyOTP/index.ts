import { config } from "../../config"
import { requestHeader } from "../../config/requestHeader"
import { IVerifyOTPPayload, IVerifyOTPResponse } from "./interfaces/IVerifyOTP"
/**
* @description Login user with OTP
* @param id: string
* @param hash: string
* @param otp: string
* @returns Access Token and User Data
* @default /api/v1/otp
*/
export const verifyOTP = async (payload: IVerifyOTPPayload, endpoint?: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/verify-otp'), { headers: requestHeader, method: 'post', body: JSON.stringify(payload) })
        .then(async response => {
            if (response.ok) {
                return await response.json() as IVerifyOTPResponse
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}