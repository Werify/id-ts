import { config } from "../../config"

/**
* @description Get a new QR session
* @returns a QR session 
* @default /api/v1/qr
*/
export const getQRSession = async (endpoint: string,) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/qr'))
        .then(response => response.json())
        .then(json => { return json })
}