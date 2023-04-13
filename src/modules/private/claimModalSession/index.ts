import { config } from "../../config";
/**
   * @description Get Claim Modal Session
   * @example api/modal/{hash}/{id}
   * @argument token
   * @returns returns new session for modal and user
   * @default /api/modal/{hash}/{id}
   */
export const claimModalSession = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + endpoint,
        { headers: { 'authorization': accessToken } })
        .then(response => response.json())
        .then(json => { return json })
}