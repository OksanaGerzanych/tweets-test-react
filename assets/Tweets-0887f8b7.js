import{R as x,u as Et,r as O,s as u,j as o,e as $t,a as b,b as P,c as Bt,U as F,d as R,f as St,L as Lt}from"./index-36e68b0f.js";function kt(e=x){const t=e===x?Et:()=>O.useContext(e);return function(){const{store:a}=t();return a}}const Rt=kt();function Dt(e=x){const t=e===x?Rt:kt(e);return function(){return t().dispatch}}const C=Dt();var _="NOT_FOUND";function It(e){var t;return{get:function(a){return t&&e(t.key,a)?t.value:_},put:function(a,r){t={key:a,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function zt(e,t){var n=[];function a(s){var c=n.findIndex(function(d){return t(s,d.key)});if(c>-1){var g=n[c];return c>0&&(n.splice(c,1),n.unshift(g)),g.value}return _}function r(s,c){a(s)===_&&(n.unshift({key:s,value:c}),n.length>e&&n.pop())}function i(){return n}function l(){n=[]}return{get:a,put:r,getEntries:i,clear:l}}var Qt=function(t,n){return t===n};function Ut(e){return function(n,a){if(n===null||a===null||n.length!==a.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],a[i]))return!1;return!0}}function qt(e,t){var n=typeof t=="object"?t:{equalityCheck:t},a=n.equalityCheck,r=a===void 0?Qt:a,i=n.maxSize,l=i===void 0?1:i,s=n.resultEqualityCheck,c=Ut(r),g=l===1?It(c):zt(l,c);function d(){var p=g.get(arguments);if(p===_){if(p=e.apply(null,arguments),s){var f=g.getEntries(),v=f.find(function(m){return s(m.value,p)});v&&(p=v.value)}g.put(arguments,p)}return p}return d.clearCache=function(){return g.clear()},d}function Mt(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(a){return typeof a=="function"})){var n=t.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function Wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=function(){for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];var g=0,d,p={memoizeOptions:void 0},f=s.pop();if(typeof f=="object"&&(p=f,f=s.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var v=p,m=v.memoizeOptions,j=m===void 0?n:m,Ft=Array.isArray(j)?j:[j],w=Mt(s),B=e.apply(void 0,[function(){return g++,f.apply(null,arguments)}].concat(Ft)),S=e(function(){for(var L=[],Ct=w.length,T=0;T<Ct;T++)L.push(w[T].apply(null,arguments));return d=B.apply(null,L),d});return Object.assign(S,{resultFunc:f,memoizedResultFunc:B,dependencies:w,lastResult:function(){return d},recomputations:function(){return g},resetRecomputations:function(){return g=0}}),S};return r}var Nt=Wt(qt);const D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgB7VixSgNBEJ0TI8QihQqm0MLGQgstbCxsrP1mQRsbwTQGkkKLBDRFBFMkYA7ivNxsmCx32U1MzAg+GG7vbm5v993Mm+GS0Wh0Q+vHgO0uSZK0yIHXecaHQ1ozNsgGymzn9AdghTCgylF0TMZhiTDgmEnbJ8OwRhhwzqRtk1FYJKzEdsmkbZJBxC5qyPbK1qWsopXFULV2c/x7bC3xT5XvAcXBFYFHWgzvbHUZH4kBD5Stf9Z7L2fcjyKsjxdxyR9414C2CLUW6yb7NnPm6LJvQxYUk3LjIpAzVwxSfm68Rp5jqK4P3PU8sO+IAgil5BRZPF+JreJpTEWN23qD4j/xlXnwlYcUBxSBZfZeWPuu2CRY3DXKz5YphCLsQ5GFjV9RpjE4f6Es3arKv6EWgTQ4lfGYKHxdzMfnSO/YFuKE/bu0HFyo8S1bynMH01AjFGEtNUanDbIQQTXKdKovY0TMp0fuqXq2LM87zEPAuAjIce0IRZjWrbIcu0zM1IZFx9IcXw2dxoU6UgBoiwnCQhGmN+7I20YEQZ88X61liD5fpzRJ8/RZmOeB5id5JQgRpkUQqYdFI7Wu2XY835IIJ8Qdm6yrey51HWLbC+DZq9BrRSglj5iEthNrPr8Vffoq+LOA1EQ0gLQW+77xcEuXcnm+SnFAi9ImQwhFmOu6dWvQ12SJfrn7KM9nrmTDL4esWAHvLNiDrRQxjSt07Jo3i4qJDjqV55B+6JH8zePanrQdPfWeIv88gOQnWhz4cO53UaXAB+1KSnMWk8TID0QN6N+9r1v/PxCLUbMk8j6sEQaR75BhWCLMpMj7sELYT0X+1/ANbvUOPPqsLv4AAAAASUVORK5CYII=",I="/tweets-test-react/assets/tweet-338b66fd.png",Yt=u.li`
position: relative;
list-style: none;
width: 380px;
height: 460px;
background-repeat: no-repeat;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); 
border-radius: 20px;
 background:   
linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
 
 
`,Kt=u.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;

  position: absolute;
  left: 163.5px;
  top: 186.5px;
`,Xt=u.p`
position: absolute;
width: 132px;
height: 24px;
left: 124px;
top: 284px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;
color: #EBD8FF;
`,Ht=u.p`
position: absolute;
width: 214px;
height: 24px;
left: 83px;
top: 324px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;

color: #EBD8FF;
`,z=u.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;

position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
cursor: pointer;
background: ${e=>e.isFollow?"#5CD3A8":"#EBD8FF"};;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;

`,Q=u.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`,Jt=u.picture`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;
`,Zt=u.picture`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;

`,Gt=u.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

`,Vt=u.div`
position: absolute;
width: 80px;
height: 80px;
left: 155px;
top: 178px;

background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
inset 0px -2.19582px 4.39163px #AE7BE3, 
inset 0px 4.39163px 3.29372px #FBF8FF;
border-radius: 50%;

`,tn=({id:e,user:t,tweets:n,followers:a,avatar:r,isFollowing:i})=>{const l=C(),s=()=>{l($t({id:e,followers:a,isFollowing:i}))};return o.jsxs("div",{children:[o.jsxs(Jt,{children:[" ",o.jsx("source",{srcSet:`${D}`}),o.jsx("img",{src:D,alt:"logo"})]}),o.jsxs(Zt,{children:[" ",o.jsx("source",{srcSet:`${I}`}),o.jsx("img",{src:I,alt:"tweets"})]}),o.jsx(Gt,{}),o.jsx(Vt,{}),o.jsx(Kt,{src:r,alt:t}),o.jsxs(Xt,{children:[n," tweets"]}),o.jsxs(Ht,{children:[a.toLocaleString("en-US")," followers"]}),i?o.jsx(z,{isFollow:i,type:"button",onClick:s,children:o.jsx(Q,{children:"following"})}):o.jsx(z,{isFollow:i,type:"button",onClick:s,children:o.jsx(Q,{children:"follow"})})]})},nn=e=>e.tweets.items,At=e=>e.filters.status,en=e=>e.tweets.isLoading,rn=Nt([nn,At],(e,t)=>{switch(t){case b.follow:return e.filter(n=>!n.isFollowing);case b.followings:return e.filter(n=>n.isFollowing);default:return e}}),an=u.ul`
display: flex;
flex-wrap: wrap;
gap: 30px;
text-align: center;
justify-content: center

`,on=u.button`
height: 50px;
width: 200px;
margin: 30px auto;
display: block;
padding: 15px 15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
:hover{
    background: #5CD3A8;
}
`,sn=()=>{const e=P(rn),[t,n]=O.useState(1),a=e.slice(0,t*3),r=t*3>=e.length,i=()=>{n(l=>l+1)};return o.jsxs(o.Fragment,{children:[o.jsx(an,{children:a.map(({id:l,...s})=>o.jsx(Yt,{children:o.jsx(tn,{id:l,...s})},l))}),r?null:o.jsx(on,{type:"button",onClick:i,children:"Load More"})]})},ln=u.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

`,k=u.button`
background: ${e=>e.selected?"#5CD3A8":"linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%)"};
`,un=u.button`
margin-left: 40px; 
`,cn=()=>{const e=C(),t=P(At),n=a=>e(Bt(a));return o.jsxs(ln,{children:[o.jsx(k,{selected:t===b.all,onClick:()=>n(b.all),children:"All"}),o.jsx(k,{selected:t===b.follow,onClick:()=>n(b.follow),children:"Follow"}),o.jsx(k,{selected:t===b.followings,onClick:()=>n(b.followings),children:"Followings"})]})};var gn="#4fa94d",pn={"aria-busy":!0,role:"status"},U=globalThis&&globalThis.__assign||function(){return U=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},U.apply(this,arguments)},q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)},M=globalThis&&globalThis.__assign||function(){return M=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},M.apply(this,arguments)},W=globalThis&&globalThis.__assign||function(){return W=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(this,arguments)},N=globalThis&&globalThis.__assign||function(){return N=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},N.apply(this,arguments)},Y=globalThis&&globalThis.__assign||function(){return Y=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Y.apply(this,arguments)},K=globalThis&&globalThis.__assign||function(){return K=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K.apply(this,arguments)},Pt=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},h=242.776657104492,fn=1.6,hn=F(X||(X=Pt([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),h*.14,h,h*.11,h*.35,h,h*.35,h*.01,h,h*.99);u.path(H||(H=Pt([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),h*.01,h,hn,fn);var X,H,J=globalThis&&globalThis.__assign||function(){return J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},J.apply(this,arguments)},Z=globalThis&&globalThis.__assign||function(){return Z=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z.apply(this,arguments)},G=globalThis&&globalThis.__assign||function(){return G=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)},V=globalThis&&globalThis.__assign||function(){return V=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},V.apply(this,arguments)},tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tt.apply(this,arguments)},nt=globalThis&&globalThis.__assign||function(){return nt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},nt.apply(this,arguments)},et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},et.apply(this,arguments)},dn=function(t,n){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[t]<"u")return a[t];if(t&&t.indexOf(".")>0){for(var r=t.split("."),i=r.length,l=a[r[0]],s=1;l!=null&&s<i;)l=l[r[s]],s+=1;if(typeof l<"u")return l}return n}},E=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},A=globalThis&&globalThis.__assign||function(){return A=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A.apply(this,arguments)},bn=F(rt||(rt=E([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`]))),mn=[0,30,60,90,120,150,180,210,240,270,300,330],vn=u.svg(at||(at=E([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),bn,dn("speed","0.75")),yn=u.polyline(ot||(ot=E([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});function xn(e){var t=e.strokeColor,n=t===void 0?gn:t,a=e.strokeWidth,r=a===void 0?"5":a,i=e.animationDuration,l=i===void 0?"0.75":i,s=e.width,c=s===void 0?"96":s,g=e.visible,d=g===void 0?!0:g,p=e.ariaLabel,f=p===void 0?"rotating-lines-loading":p,v=O.useCallback(function(){return mn.map(function(m){return R.createElement(yn,{key:m,points:"24,12 24,4",width:r,transform:"rotate(".concat(m,", 24, 24)")})})},[r]);return d?R.createElement(vn,A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:c,stroke:n,speed:l,"data-testid":"rotating-lines-svg","aria-label":f},pn),v()):null}var rt,at,ot,st=globalThis&&globalThis.__assign||function(){return st=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},st.apply(this,arguments)},it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},it.apply(this,arguments)},lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lt.apply(this,arguments)},$=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ut=globalThis&&globalThis.__assign||function(){return ut=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ut.apply(this,arguments)},_n=F(ct||(ct=$([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));u.polygon(gt||(gt=$([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),_n);u.svg(pt||(pt=$([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var ct,gt,pt,ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ft.apply(this,arguments)},ht=globalThis&&globalThis.__assign||function(){return ht=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ht.apply(this,arguments)},dt=globalThis&&globalThis.__assign||function(){return dt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},dt.apply(this,arguments)},bt=globalThis&&globalThis.__assign||function(){return bt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bt.apply(this,arguments)},mt=globalThis&&globalThis.__assign||function(){return mt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mt.apply(this,arguments)},vt=globalThis&&globalThis.__assign||function(){return vt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vt.apply(this,arguments)},yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yt.apply(this,arguments)},xt=globalThis&&globalThis.__assign||function(){return xt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xt.apply(this,arguments)},_t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_t.apply(this,arguments)},Ot=globalThis&&globalThis.__assign||function(){return Ot=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ot.apply(this,arguments)},jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jt.apply(this,arguments)},wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wt.apply(this,arguments)},Tt=globalThis&&globalThis.__assign||function(){return Tt=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Tt.apply(this,arguments)};const On=u.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
`,jn=()=>o.jsx(On,{children:o.jsx(xn,{strokeColor:"#5CD3A8",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})});function Tn(){const e=C(),t=P(en);return O.useEffect(()=>{e(St())},[e]),o.jsxs(o.Fragment,{children:[t&&o.jsx(jn,{}),o.jsx(Lt,{to:"/",children:o.jsx(un,{type:"button",children:"Back"})}),o.jsx(cn,{}),o.jsx(sn,{})]})}export{Tn as default};
