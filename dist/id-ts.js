let r = {
  baseURL: ""
};
const o = {
  Accept: "Application/json",
  "Content-Type": "Application/json"
}, h = async (n, t) => new Promise((e, a) => {
  fetch(
    r.baseURL + (t || "/api/v1/request-otp"),
    { headers: o, method: "post", body: JSON.stringify({ identifier: n }) }
  ).then((s) => s.json()).then((s) => {
    e(s);
  }).catch((s) => {
    console.log(s, "ERR"), a(s);
  });
}), c = async (n, t) => fetch(r.baseURL + (t || "/api/v1/otp"), { method: "post", body: n }).then((e) => e.json()).then((e) => e), u = async (n) => fetch(r.baseURL + (n || "/api/v1/qr")).then((t) => t.json()).then((t) => t), i = async (n) => fetch(r.baseURL + n).then((t) => t.json()).then((t) => t), f = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), b = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile/mobile-numbers"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), l = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), y = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), m = async (n, t, e) => fetch(
  r.baseURL + (e || "/api/v1/user/mobile-numbers"),
  { headers: { authorization: n }, method: "post", body: t }
).then((a) => a.json()).then((a) => a), p = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: n }, method: "put" }
).then((e) => e.json()).then((e) => e), R = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/modal"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), U = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), d = async (n, t) => fetch(
  r.baseURL + t,
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), j = async (n, t) => fetch(
  r.baseURL + (t || "/api/v1/user/check-username"),
  { headers: { authorization: n } }
).then((e) => e.json()).then((e) => e), L = () => ({
  config: r,
  requestOTP: h,
  loginOTP: c,
  getQRSession: u,
  checkSession: i,
  getUserProfile: f,
  getUserNumbers: b,
  getFinancialInfo: l,
  updateUserProfile: y,
  addMobileNumber: m,
  updateFinancialInfo: p,
  getNewModalSession: R,
  claimModalSession: U,
  claimQRSession: d,
  checkUsername: j
});
export {
  L as werify
};
