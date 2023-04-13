/**
  * @description PUT Update Financial Info
  * @param any: Send Fields tou want to change
  * @argument token
  * @returns User Financial Information
  * @default /api/user/financial-information
  */
export declare const updateFinancialInfo: (accessToken: string, endpoint: string) => Promise<any>;
