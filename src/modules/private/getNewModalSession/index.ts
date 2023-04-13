import { config } from "../../config"
/**
 * @description Get New Modal Session
 * @argument token
 * @example api/user/modal
 * @returns New Session from modal and user
 * @default /api/v1/user/modal
 */
export const getNewModalSession = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/user/modal'),
        { headers: { 'authorization': accessToken } })
        .then(response => response.json())
        .then(json => { return json })
}