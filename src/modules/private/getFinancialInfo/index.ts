import { config } from "../../config";

/**
  * @description Get User Financial Information
  * @argument token
  * @returns User Financial Information
  * @default /api/user/financial-information
  */
export const getFinancialInfo = async (accessToken: string, endpoint: string) => {
    return fetch(config.baseURL + (endpoint ? endpoint : '/api/user/financial-information'),
        { headers: { 'authorization': accessToken } })
        .then(response => response.json())
        .then(json => { return json })
}