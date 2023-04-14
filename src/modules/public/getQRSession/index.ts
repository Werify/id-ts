import { config } from "../../config"

/**
* @description Get a new QR session
* @returns a QR session 
* @default /api/v1/qr
*/
export const getQRSession = async (endpoint: string,) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/qr'))
        .then(async response => {
            if (response.ok) {
                return await response.json()
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}