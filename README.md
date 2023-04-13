# Werify Typescript
## Simple and lightweight auth service by **Werify**


![Werify](https://avatars.githubusercontent.com/u/125675596?s=200&v=4)



**** First of all set your **baseURL** using `config` Object ****

```javascript
import { werify } from '@werify/id-ts';

// Create the package instance
const authService = werify()

// Now you have access to everything :)
authService.config.baseURL = 'your_baseURL_here'
```

**If you want to use the default endpoints feel free to leave the `endpoint` parameter in each function**

**Recommended Stack :**
1. **Vite**
2. **Vue** or **react**


## Dependencies
- No dependencies needed

## Installation
```bash
npm install @werify/id-ts
```
```bash
yarn add @werify/id-ts
```

## Usage
1. You can import and use all of your required functions
2. all functions return a promise for ease of use


```javascript
import { werify } from '@werify/id-ts';

// Create the package instance
const authService = werify()

// Use Functions
authService.login('/endpoint', payload).then().catch()
```

## Public Routes ( Doesn't need any credintials or authorization )

----------


Function | method | params | default endpoint
---- | ---- | ---- | --- |
login| POST | identifier | /api/v1/v1/login
loginOTP| POST | id, hash, otp | /api/v1/v1/otp
getQRSession| GET | _ | /api/v1/v1/qr
checkSession| GET | _ | /api/v1/v1/session-check/model/{hash}/{id}


#### request user login otp 
POST `/api/v1/v1/login` requires `identifier` & returns session.

#### login user with otp
POST `/api/v1/v1/otp` requires `id`,`hash`,`otp` & returns token for user with some info.

#### get new qr session
GET `api/qr/` return qr code session.

#### check login session ( both qr and modal )
GET `api/session-check/modal/{hash}/{id}` returns token for user with some info.



## Private Routes ( Needs token in request header )
----------
Function | method | params | default endpoint
---- | ---- | ---- | --- |
getUserProfile| GET | _ | /api/v1/v1/user/profile
getUserNumbers| GET | _ | /api/v1/v1/user/profile/mobile-numbers
getFinancialInfo| GET | _ | /api/v1/v1/user/financial-information
updateUserProfile| PUT | form data | /api/v1/v1/user/profile
addMobileNumber| POST | mobile_number | /api/v1/v1/user/mobile-numbers
updateFinancialInfo| PUT | form data | /api/v1/v1/user/financial-information/
getNewModalSession| GET | _ | /api/v1/v1/user/modal
claimModalSession| GET | _ | /api/v1/v1/modal/{hash}/{id}
claimQRSession| GET | _ | /api/v1/v1/qr/{hash}/{id}
checkUsername| POST | _ | /api/v1/v1/check-username

#### user profile
GET `api/user/profile/`.

#### user mobile numbers
GET `api/user/profile/mobile-numbers`.

#### user financial informations
GET `api/user/financial-information/`.

#### update user profile
PUT `api/user/profile/` send fields you want to change.

#### add new mobile number
POST `api/user/mobile-numbers/` send `mobile_number` field.

#### update financial information
PUT `api/user/mobile-numbers/` send fields you want to change.

#### get new modal session
GET `api/user/modal` returns new session for modal and user.

#### claim modal session
GET `api/modal/{hash}/{id}` returns new session for modal and user.

#### claim qr session
GET `api/qr/{hash}/{id}` returns new session for modal and user.

----------