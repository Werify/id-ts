let a = {
  baseURL: ""
};
const s = {
  Accept: "Application/json",
  "Content-Type": "Application/json"
}, o = async (r, t) => await fetch(
  a.baseURL + (t || "/api/v1/request-otp"),
  { headers: s, method: "post", body: JSON.stringify({ identifier: r }) }
).then(async (e) => {
  if (e.ok)
    return await e.json();
  {
    const n = await e.text();
    return Promise.reject(new Error(n));
  }
}), i = async (r, t) => fetch(a.baseURL + (t || "/api/v1/verify-otp"), { headers: s, method: "post", body: JSON.stringify(r) }).then(async (e) => {
  if (e.ok)
    return await e.json();
  {
    const n = await e.text();
    return Promise.reject(new Error(n));
  }
}), c = async (r) => fetch(a.baseURL + (r || "/api/v1/qr")).then(async (t) => {
  if (t.ok)
    return await t.json();
  {
    const e = await t.text();
    return Promise.reject(new Error(e));
  }
}), h = async (r) => fetch(a.baseURL + r).then(async (t) => {
  if (t.ok)
    return await t.json();
  {
    const e = await t.text();
    return Promise.reject(new Error(e));
  }
}), u = async (r, t) => fetch(
  a.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: r } }
).then(async (e) => {
  if (e.ok)
    return await e.json();
  {
    const n = await e.text();
    return Promise.reject(new Error(n));
  }
}), f = async (r, t) => fetch(
  a.baseURL + (t || "/api/v1/user/profile/mobile-numbers"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), y = async (r, t) => fetch(
  a.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: r } }
).then(async (e) => {
  if (e.ok)
    return await e.json();
  {
    const n = await e.text();
    return Promise.reject(new Error(n));
  }
}), l = async (r, t) => fetch(
  a.baseURL + (t || "/api/v1/user/profile"),
  { headers: { authorization: r }, method: "put" }
).then((e) => e.json()).then((e) => e), b = async (r, t, e) => fetch(
  a.baseURL + (e || "/api/v1/user/mobile-numbers"),
  { headers: { authorization: r }, method: "post", body: t }
).then((n) => n.json()).then((n) => n), m = async (r, t) => fetch(
  a.baseURL + (t || "/api/v1/user/financial-information"),
  { headers: { authorization: r }, method: "put" }
).then((e) => e.json()).then((e) => e), j = async (r, t) => fetch(
  a.baseURL + (t || "/api/v1/user/modal"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), w = async (r, t) => fetch(
  a.baseURL + t,
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), U = async (r, t) => fetch(
  a.baseURL + t,
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), d = async (r, t) => fetch(
  a.baseURL + (t || "/api/v1/user/check-username"),
  { headers: { authorization: r } }
).then((e) => e.json()).then((e) => e), R = () => ({
  config: a,
  requestOTP: o,
  verifyOTP: i,
  getQRSession: c,
  checkSession: h,
  getUserProfile: u,
  getUserNumbers: f,
  getFinancialInfo: y,
  updateUserProfile: l,
  addMobileNumber: b,
  updateFinancialInfo: m,
  getNewModalSession: j,
  claimModalSession: w,
  claimQRSession: U,
  checkUsername: d
});
export {
  R as werify
};
