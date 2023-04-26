import{R as x,u as $n,r as O,s as c,j as o,e as Ln,a as b,b as P,c as Sn,U as F,d as R,L as Bn,f as Rn}from"./index-1cbff73e.js";function An(e=x){const n=e===x?$n:()=>O.useContext(e);return function(){const{store:a}=n();return a}}const Dn=An();function zn(e=x){const n=e===x?Dn:An(e);return function(){return n().dispatch}}const C=zn();var _="NOT_FOUND";function In(e){var n;return{get:function(a){return n&&e(n.key,a)?n.value:_},put:function(a,r){n={key:a,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function Qn(e,n){var t=[];function a(s){var u=t.findIndex(function(d){return n(s,d.key)});if(u>-1){var g=t[u];return u>0&&(t.splice(u,1),t.unshift(g)),g.value}return _}function r(s,u){a(s)===_&&(t.unshift({key:s,value:u}),t.length>e&&t.pop())}function i(){return t}function l(){t=[]}return{get:a,put:r,getEntries:i,clear:l}}var Un=function(n,t){return n===t};function Wn(e){return function(t,a){if(t===null||a===null||t.length!==a.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!e(t[i],a[i]))return!1;return!0}}function qn(e,n){var t=typeof n=="object"?n:{equalityCheck:n},a=t.equalityCheck,r=a===void 0?Un:a,i=t.maxSize,l=i===void 0?1:i,s=t.resultEqualityCheck,u=Wn(r),g=l===1?In(u):Qn(l,u);function d(){var p=g.get(arguments);if(p===_){if(p=e.apply(null,arguments),s){var f=g.getEntries(),v=f.find(function(m){return s(m.value,p)});v&&(p=v.value)}g.put(arguments,p)}return p}return d.clearCache=function(){return g.clear()},d}function Mn(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every(function(a){return typeof a=="function"})){var t=n.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function Nn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var r=function(){for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];var g=0,d,p={memoizeOptions:void 0},f=s.pop();if(typeof f=="object"&&(p=f,f=s.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var v=p,m=v.memoizeOptions,j=m===void 0?t:m,Cn=Array.isArray(j)?j:[j],w=Mn(s),L=e.apply(void 0,[function(){return g++,f.apply(null,arguments)}].concat(Cn)),S=e(function(){for(var B=[],En=w.length,T=0;T<En;T++)B.push(w[T].apply(null,arguments));return d=L.apply(null,B),d});return Object.assign(S,{resultFunc:f,memoizedResultFunc:L,dependencies:w,lastResult:function(){return d},recomputations:function(){return g},resetRecomputations:function(){return g=0}}),S};return r}var Yn=Nn(qn);const D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgB7VixSgNBEJ0TI8QihQqm0MLGQgstbCxsrP1mQRsbwTQGkkKLBDRFBFMkYA7ivNxsmCx32U1MzAg+GG7vbm5v993Mm+GS0Wh0Q+vHgO0uSZK0yIHXecaHQ1ozNsgGymzn9AdghTCgylF0TMZhiTDgmEnbJ8OwRhhwzqRtk1FYJKzEdsmkbZJBxC5qyPbK1qWsopXFULV2c/x7bC3xT5XvAcXBFYFHWgzvbHUZH4kBD5Stf9Z7L2fcjyKsjxdxyR9414C2CLUW6yb7NnPm6LJvQxYUk3LjIpAzVwxSfm68Rp5jqK4P3PU8sO+IAgil5BRZPF+JreJpTEWN23qD4j/xlXnwlYcUBxSBZfZeWPuu2CRY3DXKz5YphCLsQ5GFjV9RpjE4f6Es3arKv6EWgTQ4lfGYKHxdzMfnSO/YFuKE/bu0HFyo8S1bynMH01AjFGEtNUanDbIQQTXKdKovY0TMp0fuqXq2LM87zEPAuAjIce0IRZjWrbIcu0zM1IZFx9IcXw2dxoU6UgBoiwnCQhGmN+7I20YEQZ88X61liD5fpzRJ8/RZmOeB5id5JQgRpkUQqYdFI7Wu2XY835IIJ8Qdm6yrey51HWLbC+DZq9BrRSglj5iEthNrPr8Vffoq+LOA1EQ0gLQW+77xcEuXcnm+SnFAi9ImQwhFmOu6dWvQ12SJfrn7KM9nrmTDL4esWAHvLNiDrRQxjSt07Jo3i4qJDjqV55B+6JH8zePanrQdPfWeIv88gOQnWhz4cO53UaXAB+1KSnMWk8TID0QN6N+9r1v/PxCLUbMk8j6sEQaR75BhWCLMpMj7sELYT0X+1/ANbvUOPPqsLv4AAAAASUVORK5CYII=",z="/tweets-test-react/assets/tweet-338b66fd.png",Kn=c.li`
position: relative;
list-style: none;
width: 380px;
height: 460px;
background-repeat: no-repeat;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); 
border-radius: 20px;
 background:   
linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
 
 
`,Xn=c.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;

  position: absolute;
  left: 163.5px;
  top: 186.5px;
`,Hn=c.p`
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
`,Jn=c.p`
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
`,I=c.button`
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

`,Q=c.span`
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
`,Gn=c.picture`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;
`,Zn=c.picture`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;

`,Vn=c.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

`,nt=c.div`
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

`,tt=({id:e,user:n,tweets:t,followers:a,avatar:r,isFollowing:i})=>{const l=C(),s=()=>{l(Ln({id:e,followers:a,isFollowing:i}))};return o.jsxs("div",{children:[o.jsxs(Gn,{children:[" ",o.jsx("source",{srcSet:`${D}`}),o.jsx("img",{src:D,alt:"logo"})]}),o.jsxs(Zn,{children:[" ",o.jsx("source",{srcSet:`${z}`}),o.jsx("img",{src:z,alt:"tweets"})]}),o.jsx(Vn,{}),o.jsx(nt,{}),o.jsx(Xn,{src:r,alt:n}),o.jsxs(Hn,{children:[t," tweets"]}),o.jsxs(Jn,{children:[a.toLocaleString("en-US")," followers"]}),i?o.jsx(I,{isFollow:i,type:"button",onClick:s,children:o.jsx(Q,{children:"following"})}):o.jsx(I,{isFollow:i,type:"button",onClick:s,children:o.jsx(Q,{children:"follow"})})]})},et=e=>e.tweets.items,Pn=e=>e.filters.status,rt=e=>e.tweets.isLoading,at=Yn([et,Pn],(e,n)=>{switch(n){case b.follow:return e.filter(t=>!t.isFollowing);case b.followings:return e.filter(t=>t.isFollowing);default:return e}}),ot=c.ul`
display: flex;
flex-wrap: wrap;
gap: 30px;
text-align: center;
justify-content: center

`,st=c.button`
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
`,it=()=>{const e=P(at),[n,t]=O.useState(1),a=e.slice(0,n*3),r=n*3>=e.length,i=()=>{t(l=>l+1)};return o.jsxs(o.Fragment,{children:[o.jsx(ot,{children:a.map(({id:l,...s})=>o.jsx(Kn,{children:o.jsx(tt,{id:l,...s})},l))}),r?null:o.jsx(st,{type:"button",onClick:i,children:"Load More"})]})},lt=c.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

`,k=c.button`
background: ${e=>e.selected?"#5CD3A8":"linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%)"};
`,ct=()=>{const e=C(),n=P(Pn),t=a=>e(Sn(a));return o.jsxs(lt,{children:[o.jsx(k,{selected:n===b.all,onClick:()=>t(b.all),children:"All"}),o.jsx(k,{selected:n===b.follow,onClick:()=>t(b.follow),children:"Follow"}),o.jsx(k,{selected:n===b.followings,onClick:()=>t(b.followings),children:"Followings"})]})};var ut="#4fa94d",gt={"aria-busy":!0,role:"status"},U=globalThis&&globalThis.__assign||function(){return U=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)},W=globalThis&&globalThis.__assign||function(){return W=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)},q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)},M=globalThis&&globalThis.__assign||function(){return M=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)},N=globalThis&&globalThis.__assign||function(){return N=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)},Y=globalThis&&globalThis.__assign||function(){return Y=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)},K=globalThis&&globalThis.__assign||function(){return K=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)},Fn=globalThis&&globalThis.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},h=242.776657104492,pt=1.6,ft=F(X||(X=Fn([`
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
`])),h*.14,h,h*.11,h*.35,h,h*.35,h*.01,h,h*.99);c.path(H||(H=Fn([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),h*.01,h,ft,pt);var X,H,J=globalThis&&globalThis.__assign||function(){return J=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)},G=globalThis&&globalThis.__assign||function(){return G=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)},Z=globalThis&&globalThis.__assign||function(){return Z=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)},V=globalThis&&globalThis.__assign||function(){return V=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)},nn=globalThis&&globalThis.__assign||function(){return nn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nn.apply(this,arguments)},tn=globalThis&&globalThis.__assign||function(){return tn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tn.apply(this,arguments)},en=globalThis&&globalThis.__assign||function(){return en=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},en.apply(this,arguments)},ht=function(n,t){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[n]<"u")return a[n];if(n&&n.indexOf(".")>0){for(var r=n.split("."),i=r.length,l=a[r[0]],s=1;l!=null&&s<i;)l=l[r[s]],s+=1;if(typeof l<"u")return l}return t}},E=globalThis&&globalThis.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},A=globalThis&&globalThis.__assign||function(){return A=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)},dt=F(rn||(rn=E([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`]))),bt=[0,30,60,90,120,150,180,210,240,270,300,330],mt=c.svg(an||(an=E([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),dt,ht("speed","0.75")),vt=c.polyline(on||(on=E([`
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
`])),function(e){return e.width});function yt(e){var n=e.strokeColor,t=n===void 0?ut:n,a=e.strokeWidth,r=a===void 0?"5":a,i=e.animationDuration,l=i===void 0?"0.75":i,s=e.width,u=s===void 0?"96":s,g=e.visible,d=g===void 0?!0:g,p=e.ariaLabel,f=p===void 0?"rotating-lines-loading":p,v=O.useCallback(function(){return bt.map(function(m){return R.createElement(vt,{key:m,points:"24,12 24,4",width:r,transform:"rotate(".concat(m,", 24, 24)")})})},[r]);return d?R.createElement(mt,A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:u,stroke:t,speed:l,"data-testid":"rotating-lines-svg","aria-label":f},gt),v()):null}var rn,an,on,sn=globalThis&&globalThis.__assign||function(){return sn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sn.apply(this,arguments)},ln=globalThis&&globalThis.__assign||function(){return ln=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ln.apply(this,arguments)},cn=globalThis&&globalThis.__assign||function(){return cn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cn.apply(this,arguments)},$=globalThis&&globalThis.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},un=globalThis&&globalThis.__assign||function(){return un=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},un.apply(this,arguments)},xt=F(gn||(gn=$([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));c.polygon(pn||(pn=$([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),xt);c.svg(fn||(fn=$([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var gn,pn,fn,hn=globalThis&&globalThis.__assign||function(){return hn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hn.apply(this,arguments)},dn=globalThis&&globalThis.__assign||function(){return dn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dn.apply(this,arguments)},bn=globalThis&&globalThis.__assign||function(){return bn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bn.apply(this,arguments)},mn=globalThis&&globalThis.__assign||function(){return mn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mn.apply(this,arguments)},vn=globalThis&&globalThis.__assign||function(){return vn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vn.apply(this,arguments)},yn=globalThis&&globalThis.__assign||function(){return yn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yn.apply(this,arguments)},xn=globalThis&&globalThis.__assign||function(){return xn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xn.apply(this,arguments)},_n=globalThis&&globalThis.__assign||function(){return _n=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_n.apply(this,arguments)},On=globalThis&&globalThis.__assign||function(){return On=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},On.apply(this,arguments)},jn=globalThis&&globalThis.__assign||function(){return jn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jn.apply(this,arguments)},wn=globalThis&&globalThis.__assign||function(){return wn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wn.apply(this,arguments)},Tn=globalThis&&globalThis.__assign||function(){return Tn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tn.apply(this,arguments)},kn=globalThis&&globalThis.__assign||function(){return kn=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++){n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kn.apply(this,arguments)};const _t=c.div`
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
`,Ot=()=>o.jsx(_t,{children:o.jsx(yt,{strokeColor:"#5CD3A8",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}),jt=c(Bn)`
 border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background:  linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  cursor: pointer;
  transition: border-color 0.25s;
 
`,wt=c.div`
margin: 20px 50px;
`,Tt=({to:e,children:n})=>o.jsx(jt,{to:e,children:n});function At(){const e=C(),n=P(rt);return O.useEffect(()=>{e(Rn())},[e]),o.jsxs(o.Fragment,{children:[n&&o.jsx(Ot,{}),o.jsx(wt,{children:o.jsx(Tt,{to:"/",children:"Go Back"})}),o.jsx(ct,{}),o.jsx(it,{})]})}export{At as default};
