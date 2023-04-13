import { config } from '../../config/index'
/**
    * @description request user login otp
    * @param identifier: string
    * @returns a session 
    * @default /api/v1/login
    */
export const login = async (identifier: any, endpoint?: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/login'),
        { method: 'post', body: identifier })
        .then(response => response.json())
        .then(json => { return json })
}