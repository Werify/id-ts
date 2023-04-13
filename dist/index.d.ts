export declare const werify: () => {
    config: import("./modules/config/interface/Config").IConfig;
    requestOTP: (identifier: string, endpoint?: string | undefined) => Promise<unknown>;
    loginOTP: (payload: any, endpoint?: string | undefined) => Promise<any>;
    getQRSession: (endpoint: string) => Promise<any>;
    checkSession: (endpoint: string) => Promise<any>;
    getUserProfile: (accessToken: string, endpoint: string) => Promise<any>;
    getUserNumbers: (accessToken: string, endpoint: string) => Promise<any>;
    getFinancialInfo: (accessToken: string, endpoint: string) => Promise<any>;
    updateUserProfile: (accessToken: string, endpoint: string) => Promise<any>;
    addMobileNumber: (accessToken: string, mobile_number: string, endpoint: string) => Promise<any>;
    updateFinancialInfo: (accessToken: string, endpoint: string) => Promise<any>;
    getNewModalSession: (accessToken: string, endpoint: string) => Promise<any>;
    claimModalSession: (accessToken: string, endpoint: string) => Promise<any>;
    claimQRSession: (accessToken: string, endpoint: string) => Promise<any>;
    checkUsername: (accessToken: string, endpoint: string) => Promise<any>;
};
