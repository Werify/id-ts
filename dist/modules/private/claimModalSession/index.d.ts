/**
   * @description Get Claim Modal Session
   * @example api/modal/{hash}/{id}
   * @argument token
   * @returns returns new session for modal and user
   * @default /api/modal/{hash}/{id}
   */
export declare const claimModalSession: (accessToken: string, endpoint: string) => Promise<any>;
