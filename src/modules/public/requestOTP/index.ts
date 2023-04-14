import { requestHeader } from '../../config/requestHeader'
import { config } from '../../config/index'
import type { ILoginResponse } from './interface/ILogin'
/**
    * @description request user login otp
    * @param identifier: string such as email
    * @example {email:"email_here"}
    * @returns a session 
    * @default /api/v1/login
    */
export const requestOTP = async (identifier: string, endpoint?: string) => {
    return await fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/request-otp'),
        { headers: requestHeader, method: 'post', body: JSON.stringify({ identifier: identifier }) })
        .then(async response => {
            if (response.ok) {
                return await response.json() as ILoginResponse
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}