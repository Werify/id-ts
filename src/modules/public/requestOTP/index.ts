import { requestHeader } from '../../config/RequestHeader'
import { config } from '../../config/index'
import { ILoginResponse } from './interface/Login'
/**
    * @description request user login otp
    * @param identifier: string such as email
    * @example {email:"email_here"}
    * @returns a session 
    * @default /api/v1/login
    */
export const requestOTP = async (identifier: string, endpoint?: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/request-otp'),
        { headers: requestHeader, method: 'post', body: JSON.stringify({ identifier: identifier }) })
        .then(response => response.json())
        .then(json => { return json as ILoginResponse })
}