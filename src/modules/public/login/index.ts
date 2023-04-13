import { config } from '../../config/index'
/**
    * @description request user login otp
    * @param identifier: string
    * @returns a session 
    * @default /api/login
    */
export const login = async (identifier: any, endpoint?: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/login'),
        { method: 'post', body: identifier })
        .then(response => response.json())
        .then(json => { return json })
}