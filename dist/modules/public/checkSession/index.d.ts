/**
    * @description Get login session (both QR and modal)
    * @argument hash
    * @argument id
    * @example api/session-check/modal or qr/{hash}/{id}
    * @returns token and user data
    * @default /api/v1/session-check/modal/{hash}/{id}
    */
export declare const checkSession: (endpoint: string) => Promise<any>;
