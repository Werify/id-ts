import 'whatwg-fetch'
import { type SpyInstance, describe, test, vi, beforeEach, expect } from 'vitest'
import { requestOTP } from '..'
import { config } from '../../../config'
import type { ILoginResponse } from '../interface/ILogin'

config.baseURL = 'https://id.werify.net'

let reqSpy = vi.spyOn(window, 'fetch') as SpyInstance<any>

describe('Request an OTP service', () => {
    beforeEach(() => {
        reqSpy = vi.spyOn(window, 'fetch')
    })

    test('Req OTP', async () => {
        const res = await requestOTP('mamad@mamad.com')
        expect(reqSpy).toHaveBeenCalledOnce()
        expect(res.results).toMatchObject({} as ILoginResponse)
    })
})