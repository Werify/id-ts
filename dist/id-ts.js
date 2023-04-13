let r = {
  baseURL: ""
};
const a = {
  Accept: "Application/json",
  "Content-Type": "Application/json"
}, o = async (n, t) => await fetch(
  r.baseURL + (t || "/api/v1/request-otp"),
  { headers: a, method: "post", body: JSON.stringify({ identifier: n }) }
).then(async (e) => {
  if (e.ok)
    return await e.json();
  {
    const s = await e.text();
    return Promise.reject(new Error(s));
  }
}), h = async (n, t) => fetch(r.baseURL + (t || "/api/v1/otp"), { method: "post", body: n }).then((e) => e.json()).then((e) => e), c = async (n) => fetch(r.baseURL + (n || "/api/v1/qr")).then((t) => t.json()).then((t) => t), i = async (n) => fetch(r.baseURL + n).then((t) => t.json()).then((t) => t), u = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), f = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile/mobile-numbers"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), b = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), l = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), y = async (n, t, e) => fetch(
  r.baseURL + (e || "/api/v1/user/mobile-numbers"),
  { headers: { authorization: n }, method: "post", body: t }
).then((s) => s.json()).then((s) => s), m = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), U = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/modal"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), j = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), p = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), R = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/check-username"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), d = () => ({
  config: r,
  requestOTP: o,
  loginOTP: h,
  getQRSession: c,
  checkSession: i,
  getUserProfile: u,
  getUserNumbers: f,
  getFinancialInfo: b,
  updateUserProfile: l,
  addMobileNumber: y,
  updateFinancialInfo: m,
  getNewModalSession: U,
  claimModalSession: j,
  claimQRSession: p,
  checkUsername: R
});
export {
  d as werify
};
