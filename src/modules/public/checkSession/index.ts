import { config } from "../../config"
/**
    * @description Get login session (both QR and modal)
    * @argument hash
    * @argument id
    * @example api/session-check/modal or qr/{hash}/{id}
    * @returns token and user data
    * @default /api/session-check/modal/{hash}/{id}
    */
export const checkSession = async (endpoint: string,) => {
    return fetch(config.baseURL + endpoint)
        .then(response => response.json())
        .then(json => { return json })
}