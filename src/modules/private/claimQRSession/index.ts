import { config } from "../../config";
/**
  * @description Get Claim QR session
  * @example api/qr/{hash}/{id}
  * @argument token
  * @returns User Financial Information
  * @default /api/v1/qr/{hash}/{id}
  */
export const claimQRSession = async (accessToken: string, endpoint: string) => {
  return fetch(config.baseURL + endpoint,
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}