/**
   * @description Get User Profile Data
   * @argument token
   * @returns user data
   * @default /api/user/profile
   */
export declare const getUserProfile: (accessToken: string, endpoint: string) => Promise<any>;
