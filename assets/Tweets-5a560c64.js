import{R as A,u as q,r as C,s as a,j as o,e as O,a as h,b as D,c as P,f as W,L as N}from"./index-d9ec2bc4.js";function T(t=A){const n=t===A?q:()=>C.useContext(t);return function(){const{store:r}=n();return r}}const Y=T();function K(t=A){const n=t===A?Y:T(t);return function(){return n().dispatch}}const E=K();var v="NOT_FOUND";function X(t){var n;return{get:function(r){return n&&t(n.key,r)?n.value:v},put:function(r,u){n={key:r,value:u}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function H(t,n){var e=[];function r(i){var l=e.findIndex(function(d){return n(i,d.key)});if(l>-1){var p=e[l];return l>0&&(e.splice(l,1),e.unshift(p)),p.value}return v}function u(i,l){r(i)===v&&(e.unshift({key:i,value:l}),e.length>t&&e.pop())}function s(){return e}function c(){e=[]}return{get:r,put:u,getEntries:s,clear:c}}var J=function(n,e){return n===e};function Z(t){return function(e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var u=e.length,s=0;s<u;s++)if(!t(e[s],r[s]))return!1;return!0}}function G(t,n){var e=typeof n=="object"?n:{equalityCheck:n},r=e.equalityCheck,u=r===void 0?J:r,s=e.maxSize,c=s===void 0?1:s,i=e.resultEqualityCheck,l=Z(u),p=c===1?X(l):H(c,l);function d(){var x=p.get(arguments);if(x===v){if(x=t.apply(null,arguments),i){var f=p.getEntries(),g=f.find(function(m){return i(m.value,x)});g&&(x=g.value)}p.put(arguments,x)}return x}return d.clearCache=function(){return p.clear()},d}function V(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every(function(r){return typeof r=="function"})){var e=n.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function $(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var u=function(){for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];var p=0,d,x={memoizeOptions:void 0},f=i.pop();if(typeof f=="object"&&(x=f,f=i.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var g=x,m=g.memoizeOptions,b=m===void 0?e:m,M=Array.isArray(b)?b:[b],y=V(i),S=t.apply(void 0,[function(){return p++,f.apply(null,arguments)}].concat(M)),B=t(function(){for(var R=[],U=y.length,j=0;j<U;j++)R.push(y[j].apply(null,arguments));return d=S.apply(null,R),d});return Object.assign(B,{resultFunc:f,memoizedResultFunc:S,dependencies:y,lastResult:function(){return d},recomputations:function(){return p},resetRecomputations:function(){return p=0}}),B};return u}var _=$(G);const k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgB7VixSgNBEJ0TI8QihQqm0MLGQgstbCxsrP1mQRsbwTQGkkKLBDRFBFMkYA7ivNxsmCx32U1MzAg+GG7vbm5v993Mm+GS0Wh0Q+vHgO0uSZK0yIHXecaHQ1ozNsgGymzn9AdghTCgylF0TMZhiTDgmEnbJ8OwRhhwzqRtk1FYJKzEdsmkbZJBxC5qyPbK1qWsopXFULV2c/x7bC3xT5XvAcXBFYFHWgzvbHUZH4kBD5Stf9Z7L2fcjyKsjxdxyR9414C2CLUW6yb7NnPm6LJvQxYUk3LjIpAzVwxSfm68Rp5jqK4P3PU8sO+IAgil5BRZPF+JreJpTEWN23qD4j/xlXnwlYcUBxSBZfZeWPuu2CRY3DXKz5YphCLsQ5GFjV9RpjE4f6Es3arKv6EWgTQ4lfGYKHxdzMfnSO/YFuKE/bu0HFyo8S1bynMH01AjFGEtNUanDbIQQTXKdKovY0TMp0fuqXq2LM87zEPAuAjIce0IRZjWrbIcu0zM1IZFx9IcXw2dxoU6UgBoiwnCQhGmN+7I20YEQZ88X61liD5fpzRJ8/RZmOeB5id5JQgRpkUQqYdFI7Wu2XY835IIJ8Qdm6yrey51HWLbC+DZq9BrRSglj5iEthNrPr8Vffoq+LOA1EQ0gLQW+77xcEuXcnm+SnFAi9ImQwhFmOu6dWvQ12SJfrn7KM9nrmTDL4esWAHvLNiDrRQxjSt07Jo3i4qJDjqV55B+6JH8zePanrQdPfWeIv88gOQnWhz4cO53UaXAB+1KSnMWk8TID0QN6N+9r1v/PxCLUbMk8j6sEQaR75BhWCLMpMj7sELYT0X+1/ANbvUOPPqsLv4AAAAASUVORK5CYII=",L="/tweets-test-react/assets/tweet-338b66fd.png",tt=a.li`
position: relative;
list-style: none;
width: 380px;
height: 460px;
background-repeat: no-repeat;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); 
border-radius: 20px;
 background:   
linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
 
 
`,et=a.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;

  position: absolute;
  left: 163.5px;
  top: 186.5px;
`,nt=a.p`
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
`,rt=a.p`
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
`,Q=a.button`
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
background: ${t=>t.isFollow?"#5CD3A8":"#EBD8FF"};;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;

`,z=a.span`
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
`,ot=a.picture`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;
`,st=a.picture`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;

`,it=a.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

`,at=a.div`
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

`,ct=({id:t,user:n,tweets:e,followers:r,avatar:u,isFollowing:s})=>{const c=E(),i=()=>{c(O(s?{id:t,followers:r-1,isFollowing:!1}:{id:t,followers:r+1,isFollowing:!0}))};return o.jsxs("div",{children:[o.jsxs(ot,{children:[" ",o.jsx("source",{srcSet:`${k}`}),o.jsx("img",{src:k,alt:"logo"})]}),o.jsxs(st,{children:[" ",o.jsx("source",{srcSet:`${L}`}),o.jsx("img",{src:L,alt:"tweets"})]}),o.jsx(it,{}),o.jsx(at,{}),o.jsx(et,{src:u,alt:n}),o.jsxs(nt,{children:[e," tweets"]}),o.jsxs(rt,{children:[r.toLocaleString("en-US")," followers"]}),s?o.jsx(Q,{isFollow:s,type:"button",onClick:i,children:o.jsx(z,{children:"following"})}):o.jsx(Q,{isFollow:s,type:"button",onClick:i,children:o.jsx(z,{children:"follow"})})]})},lt=t=>t.tweets.items,I=t=>t.filters.status,ut=_([lt,I],(t,n)=>{switch(n){case h.follow:return t.filter(e=>!e.isFollowing);case h.followings:return t.filter(e=>e.isFollowing);default:return t}}),pt=a.ul`
display: flex;
flex-wrap: wrap;
gap: 30px;
text-align: center;
justify-content: center

`,xt=a.button`
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
`,ft=()=>{const t=D(ut),[n,e]=C.useState(1),r=t.slice(0,n*3),u=n*3>=t.length,s=()=>{e(c=>c+1)};return o.jsxs(o.Fragment,{children:[o.jsx(pt,{children:r.map(({id:c,...i})=>o.jsx(tt,{children:o.jsx(ct,{id:c,...i})},c))}),u?null:o.jsx(xt,{type:"button",onClick:s,children:"Load More"})]})},dt=a.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

`,F=a.button`
background: ${t=>t.selected?"#5CD3A8":"linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%)"};
`,ht=a.button`
margin-left: 40px; 
`,gt=()=>{const t=E(),n=D(I),e=r=>t(P(r));return o.jsxs(dt,{children:[o.jsx(F,{selected:n===h.all,onClick:()=>e(h.all),children:"All"}),o.jsx(F,{selected:n===h.follow,onClick:()=>e(h.follow),children:"Follow"}),o.jsx(F,{selected:n===h.followings,onClick:()=>e(h.followings),children:"Followings"})]})};function wt(){const t=E();return C.useEffect(()=>{t(W())},[t]),o.jsxs(o.Fragment,{children:[o.jsx(N,{to:"/",children:o.jsx(ht,{type:"button",children:"Back"})}),o.jsx(gt,{}),o.jsx(ft,{})]})}export{wt as default};
