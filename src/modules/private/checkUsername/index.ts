import { config } from "../../config";
/**
  * @description Post Check Usernames
  * @example api/qr/{hash}/{id}
  * @argument token
  * @returns User Financial Information
  * @default /api/v1/user/check-username
  */
export const checkUsername = async (accessToken: string, endpoint: string) => {
  return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/user/check-username'),
    { headers: { 'authorization': accessToken } })
    .then(response => response.json())
    .then(json => { return json })
}