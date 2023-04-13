//#region Public Routes
import { config } from "./modules/config"
import { login } from "./modules/public/login"
import { loginOTP } from "./modules/public/loginOTP"
import { getQRSession } from "./modules/public/getQRSession"
import { checkSession } from "./modules/public/checkSession"

//#endregion

//#region Private Routes
import { getUserProfile } from "./modules/private/getUserProfile"
import { getUserNumbers } from "./modules/private/getUserNumbers"
import { getFinancialInfo } from "./modules/private/getFinancialInfo"
import { updateUserProfile } from "./modules/private/updateUserProfile"
import { addMobileNumber } from "./modules/private/addMobileNumber"
import { updateFinancialInfo } from "./modules/private/updateFinancialInfo"
import { getNewModalSession } from "./modules/private/getNewModalSession"
import { claimModalSession } from "./modules/private/claimModalSession"
import { claimQRSession } from "./modules/private/claimQRSession"
import { checkUsername } from "./modules/private/checkUsername"
//#endregion
export const werify = () => {
  return {
    config,
    login,
    loginOTP,
    getQRSession,
    checkSession,
    getUserProfile,
    getUserNumbers,
    getFinancialInfo,
    updateUserProfile,
    addMobileNumber,
    updateFinancialInfo,
    getNewModalSession,
    claimModalSession,
    claimQRSession,
    checkUsername
  }
}