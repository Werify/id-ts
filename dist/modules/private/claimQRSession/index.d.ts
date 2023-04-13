/**
  * @description Get Claim QR session
  * @example api/qr/{hash}/{id}
  * @argument token
  * @returns User Financial Information
  * @default /api/v1/qr/{hash}/{id}
  */
export declare const claimQRSession: (accessToken: string, endpoint: string) => Promise<any>;
