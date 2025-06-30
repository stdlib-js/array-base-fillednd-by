// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function u(n,r,t,e,l,s,a){var c,f,h,o,p;for(f=(o=t+1)===n,h=r[t],p=0;p<h;p++)(c=e.slice()).push(p),f?l.push(s.call(a,c)):l.push(u(n,r,o,c,[],s,a));return l}function n(n,r,t){return u(n.length,n,0,[],[],r,t)}export{n as default};
//# sourceMappingURL=mod.js.map
