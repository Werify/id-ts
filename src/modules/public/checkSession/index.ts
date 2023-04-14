import { config } from "../../config"
/**
* @description Get login session (both QR and modal)
* @argument hash
* @argument id
* @example api/session-check/modal or qr/{hash}/{id}
* @returns token and user data
* @default /api/v1/session-check/modal/{hash}/{id}
*/
export const checkSession = async (endpoint: string,) => {
    return fetch(config.baseURL + endpoint)
        .then(async response => {
            if (response.ok) {
                return await response.json()
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}