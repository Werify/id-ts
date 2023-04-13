import { config } from "../../config"
/**
  * @description PUT Update Financial Info
  * @param any: Send Fields tou want to change
  * @argument token
  * @returns User Financial Information
  * @default /api/v1/user/financial-information
  */
export const updateFinancialInfo = async (accessToken: string, endpoint: string) => {
  return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/user/financial-information'),
    { headers: { 'authorization': accessToken }, method: 'put' })
    .then(response => response.json())
    .then(json => { return json })
}