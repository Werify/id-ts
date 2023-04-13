let r = {
  baseURL: ""
};
const i = async (a, o) => fetch(
  r.baseURL + (a || "/api/login"),
  { method: "post", body: o }
).then((s) => s.json()).then((s) => s), c = async (a, o) => fetch(r.baseURL + (o || "/api/otp"), { method: "post", body: a }).then((s) => s.json()).then((s) => s), L = () => ({
  config: r,
  login: i,
  loginOTP: c,
  getQRSession: async (t) => fetch(r.baseURL + (t || "/api/qr")).then((n) => n.json()).then((n) => n),
  checkSession: async (t) => fetch(r.baseURL + t).then((n) => n.json()).then((n) => n),
  getUserProfile: async (t, n) => fetch(
    r.baseURL + (n || "/api/user/profile"),
    { headers: { authorization: t } }
  ).then((e) => e.json()).then((e) => e),
  getUserNumbers: async (t, n) => fetch(
    r.baseURL + (n || "/api/user/profile/mobile-numbers"),
    { headers: { authorization: t } }
  ).then((e) => e.json()).then((e) => e),
  getFinancialInfo: async (t, n) => fetch(
    r.baseURL + (n || "/api/user/financial-information"),
    { headers: { authorization: t } }
  ).then((e) => e.json()).then((e) => e),
  updateUserProfile: async (t, n) => fetch(
    r.baseURL + (n || "/api/user/profile"),
    { headers: { authorization: t }, method: "put" }
  ).then((e) => e.json()).then((e) => e),
  addMobileNumber: async (t, n, e) => fetch(
    r.baseURL + (e || "/api/user/mobile-numbers"),
    { headers: { authorization: t }, method: "post", body: n }
  ).then((h) => h.json()).then((h) => h),
  updateFinancialInfo: async (t, n) => fetch(
    r.baseURL + (n || "/api/user/financial-information"),
    { headers: { authorization: t }, method: "put" }
  ).then((e) => e.json()).then((e) => e),
  getNewModalSession: async (t, n) => fetch(
    r.baseURL + (n || "/api/user/modal"),
    { headers: { authorization: t } }
  ).then((e) => e.json()).then((e) => e),
  claimModalSession: async (t, n) => fetch(
    r.baseURL + n,
    { headers: { authorization: t } }
  ).then((e) => e.json()).then((e) => e),
  claimQRSession: async (t, n) => fetch(
    r.baseURL + n,
    { headers: { authorization: t } }
  ).then((e) => e.json()).then((e) => e),
  checkUsername: async (t, n) => fetch(
    r.baseURL + (n || "/api/user/check-username"),
    { headers: { authorization: t } }
  ).then((e) => e.json()).then((e) => e)
});
export {
  L as werify
};
