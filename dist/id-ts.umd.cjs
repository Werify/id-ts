(function(s,r){typeof exports=="object"&&typeof module<"u"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(s=typeof globalThis<"u"?globalThis:s||self,r(s["id-ts"]={}))})(this,function(s){"use strict";let r={baseURL:""};const o=async(n,t)=>fetch(r.baseURL+(t||"/api/login"),{method:"post",body:n}).then(e=>e.json()).then(e=>e),h=async(n,t)=>fetch(r.baseURL+(t||"/api/otp"),{method:"post",body:n}).then(e=>e.json()).then(e=>e),i=async n=>fetch(r.baseURL+(n||"/api/qr")).then(t=>t.json()).then(t=>t),u=async n=>fetch(r.baseURL+n).then(t=>t.json()).then(t=>t),c=async(n,t)=>fetch(r.baseURL+(t||"/api/user/profile"),{headers:{authorization:n}}).then(e=>e.json()).then(e=>e),f=async(n,t)=>fetch(r.baseURL+(t||"/api/user/profile/mobile-numbers"),{headers:{authorization:n}}).then(e=>e.json()).then(e=>e),b=async(n,t)=>fetch(r.baseURL+(t||"/api/user/financial-information"),{headers:{authorization:n}}).then(e=>e.json()).then(e=>e),d=async(n,t)=>fetch(r.baseURL+(t||"/api/user/profile"),{headers:{authorization:n},method:"put"}).then(e=>e.json()).then(e=>e),l=async(n,t,e)=>fetch(r.baseURL+(e||"/api/user/mobile-numbers"),{headers:{authorization:n},method:"post",body:t}).then(a=>a.json()).then(a=>a),y=async(n,t)=>fetch(r.baseURL+(t||"/api/user/financial-information"),{headers:{authorization:n},method:"put"}).then(e=>e.json()).then(e=>e),m=async(n,t)=>fetch(r.baseURL+(t||"/api/user/modal"),{headers:{authorization:n}}).then(e=>e.json()).then(e=>e),U=async(n,t)=>fetch(r.baseURL+t,{headers:{authorization:n}}).then(e=>e.json()).then(e=>e),p=async(n,t)=>fetch(r.baseURL+t,{headers:{authorization:n}}).then(e=>e.json()).then(e=>e),R=async(n,t)=>fetch(r.baseURL+(t||"/api/user/check-username"),{headers:{authorization:n}}).then(e=>e.json()).then(e=>e),j=()=>({config:r,login:o,loginOTP:h,getQRSession:i,checkSession:u,getUserProfile:c,getUserNumbers:f,getFinancialInfo:b,updateUserProfile:d,addMobileNumber:l,updateFinancialInfo:y,getNewModalSession:m,claimModalSession:U,claimQRSession:p,checkUsername:R});s.werify=j,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
