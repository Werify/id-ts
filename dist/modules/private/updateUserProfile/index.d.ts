/**
* @description PUT Update UserProfile
* @param any: send fields ou want to change
* @argument token
* @returns updated user data
* @default /api/v1/user/profile
*/
export declare const updateUserProfile: (accessToken: string, endpoint: string) => Promise<any>;
