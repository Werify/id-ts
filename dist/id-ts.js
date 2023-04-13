let r = {
  baseURL: ""
};
const a = async (n, t) => fetch(
  r.baseURL + (t || "/api/login"),
  { method: "post", body: n }
).then((e) => e.json()).then((e) => e), o = async (n, t) => fetch(r.baseURL + (t || "/api/otp"), { method: "post", body: n }).then((e) => e.json()).then((e) => e), h = async (n) => fetch(r.baseURL + (n || "/api/qr")).then((t) => t.json()).then((t) => t), c = async (n) => fetch(r.baseURL + n).then((t) => t.json()).then((t) => t), u = async (n, t) => fetch(
  r.baseURL + (t || "/api/user/profile"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), i = async (n, t) => fetch(
  r.baseURL + (t || "/api/user/profile/mobile-numbers"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), f = async (n, t) => fetch(
  r.baseURL + (t || "/api/user/financial-information"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), b = async (n, t) => fetch(
  r.baseURL + (t || "/api/user/profile"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), l = async (n, t, e) => fetch(
  r.baseURL + (e || "/api/user/mobile-numbers"),
  { headers: { authorization: n }, method: "post", body: t }
).then((s) => s.json()).then((s) => s), U = async (n, t) => fetch(
  r.baseURL + (t || "/api/user/financial-information"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), m = async (n, t) => fetch(
  r.baseURL + (t || "/api/user/modal"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), y = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), R = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), L = async (n, t) => fetch(
  r.baseURL + (t || "/api/user/check-username"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), d = () => ({
  config: r,
  login: a,
  loginOTP: o,
  getQRSession: h,
  checkSession: c,
  getUserProfile: u,
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
