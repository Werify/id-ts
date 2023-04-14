import 'whatwg-fetch'
import { type SpyInstance, describe, test, vi, beforeEach, expect } from 'vitest'
import { verifyOTP } from '..'
import { config } from '../../../config'
import type { IVerifyOTPPayload, IVerifyOTPResponse } from '../interfaces/IVerifyOTP'

config.baseURL = 'https://id.werify.net'

let reqSpy = vi.spyOn(window, 'fetch') as SpyInstance<any>
const verifyOTPPayload: IVerifyOTPPayload = {
    type: "otp",
    hash: "81da1173-cefb-456e-96f3-f07f5962dee9",
    otp: "755873",
    id: "348b0d9a-9fcd-4a9d-92d1-de40d7d413ec"
}


describe('Verify OTP service', () => {
    beforeEach(() => {
        reqSpy = vi.spyOn(window, 'fetch')
    })

    test.skip('Verify OTP Req', async () => {
        const res = await verifyOTP(verifyOTPPayload)
        console.log(res);

        // expect(reqSpy).toHaveBeenCalledOnce()
    })
    test.skip('Verify OTP Res', async () => {
        const res = await verifyOTP(verifyOTPPayload)
        expect(reqSpy).toHaveBeenCalledOnce()
        expect(res).toMatchObject({} as IVerifyOTPResponse)
    })
})