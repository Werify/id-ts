let r = {
  baseURL: ""
};
const a = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/request-otp"),
  { method: "post", body: n }
).then((e) => e.json()).then((e) => e), o = async (n, t) => fetch(r.baseURL + (t || "/api/v1/otp"), { method: "post", body: n }).then((e) => e.json()).then((e) => e), h = async (n) => fetch(r.baseURL + (n || "/api/v1/qr")).then((t) => t.json()).then((t) => t), u = async (n) => fetch(r.baseURL + n).then((t) => t.json()).then((t) => t), c = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), i = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile/mobile-numbers"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), f = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), b = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), l = async (n, t, e) => fetch(
  r.baseURL + (e || "/api/v1/user/mobile-numbers"),
  { headers: { authorization: n }, method: "post", body: t }
).then((s) => s.json()).then((s) => s), U = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), m = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/modal"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), y = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), R = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), L = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/check-username"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), d = () => ({
  config: r,
  requestOTP: a,
  loginOTP: o,
  getQRSession: h,
  checkSession: u,
  getUserProfile: c,
  getUserNumbers: i,
  getFinancialInfo: f,
  updateUserProfile: b,
  addMobileNumber: l,
  updateFinancialInfo: U,
  getNewModalSession: m,
  claimModalSession: y,
  claimQRSession: R,
  checkUsername: L
});
export {
  d as werify
};
