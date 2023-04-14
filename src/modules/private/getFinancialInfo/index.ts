import { config } from "../../config";
import { IGetFinancialInfoResponse } from "./interface/IFinancialInfo";

/**
  * @description Get User Financial Information
  * @argument token
  * @returns User Financial Information
  * @default /api/v1/user/financial-information
  */
export const getFinancialInfo = async (accessToken: string, endpoint: string) => {
  return fetch(config.baseURL + (endpoint ? endpoint : '/api/v1/user/financial-information'),
    { headers: { 'authorization': accessToken } })
    .then(async response => {
      if (response.ok) {
        return await response.json() as IGetFinancialInfoResponse
      } else {
        const errorMessage = await response.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
}