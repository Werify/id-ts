import { config } from "../../config"

/**
* @description Get a new QR session
* @returns a QR session 
* @default /api/qr
*/
export const getQRSession = async (endpoint: string,) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/qr'))
        .then(response => response.json())
        .then(json => { return json })
}