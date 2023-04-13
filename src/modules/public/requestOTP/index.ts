import { config } from '../../config/index'
import { ILoginResponse } from './interface/Login'
/**
    * @description request user login otp
    * @param identifier: string
    * @returns a session 
    * @default /api/v1/login
    */
export const requestOTP = async (identifier: any, endpoint?: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/request-otp'),
        { method: 'post', body: identifier })
        .then(response => response.json())
        .then(json => { return json as ILoginResponse })
}