let n = {
  baseURL: ""
};
const s = {
  Accept: "Application/json",
  "Content-Type": "Application/json"
}, o = async (r, t) => await fetch(
  n.baseURL + (t || "/api/v1/request-otp"),
  { headers: s, method: "post", body: JSON.stringify({ identifier: r }) }
).then(async (e) => {
  if (e.ok)
    return await e.json();
  {
    const a = await e.text();
    return Promise.reject(new Error(a));
  }
}), i = async (r, t) => fetch(n.baseURL + (t || "/api/v1/verify-otp"), { headers: s, method: "post", body: JSON.stringify(r) }).then(async (e) => {
  if (e.ok)
    return await e.json();
  {
    const a = await e.text();
    return Promise.reject(new Error(a));
  }
}), c = async (r) => fetch(n.baseURL + (r || "/api/v1/qr")).then(async (t) => {
  if (t.ok)
    return await t.json();
  {
    const e = await t.text();
    return Promise.reject(new Error(e));
  }
}), h = async (r) => fetch(n.baseURL + r).then(async (t) => {
  if (t.ok)
    return await t.json();
  {
    const e = await t.text();
    return Promise.reject(new Error(e));
  }
}), u = async (r, t) => fetch(
  n.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), f = async (r, t) => fetch(
  n.baseURL + (t || "/api/v1/user/profile/mobile-numbers"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), y = async (r, t) => fetch(
  n.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), b = async (r, t) => fetch(
  n.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: r }, method: "put" }
).then((e) => e.json()).then((e) => e), l = async (r, t, e) => fetch(
  n.baseURL + (e || "/api/v1/user/mobile-numbers"),
  { headers: { authorization: r }, method: "post", body: t }
).then((a) => a.json()).then((a) => a), m = async (r, t) => fetch(
  n.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: r }, method: "put" }
).then((e) => e.json()).then((e) => e), j = async (r, t) => fetch(
  n.baseURL + (t || "/api/v1/user/modal"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), U = async (r, t) => fetch(
  n.baseURL + t,
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), d = async (r, t) => fetch(
  n.baseURL + t,
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), R = async (r, t) => fetch(
  n.baseURL + (t || "/api/v1/user/check-username"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), w = () => ({
  config: n,
  requestOTP: o,
  verifyOTP: i,
  getQRSession: c,
  checkSession: h,
  getUserProfile: u,
  getUserNumbers: f,
  getFinancialInfo: y,
  updateUserProfile: b,
  addMobileNumber: l,
  updateFinancialInfo: m,
  getNewModalSession: j,
  claimModalSession: U,
  claimQRSession: d,
  checkUsername: R
});
export {
  w as werify
};
