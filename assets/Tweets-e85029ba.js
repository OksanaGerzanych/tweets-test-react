import{r as o,R as s,j as e,f as i,L as a}from"./index-de19e0ea.js";function x(){return o.useContext(s)}function c(t=s){const n=t===s?x:()=>o.useContext(t);return function(){const{store:r}=n();return r}}const f=c();function d(t=s){const n=t===s?f:c(t);return function(){return n().dispatch}}const h=d(),l=()=>e.jsx("li",{}),p=()=>e.jsx("ul",{children:e.jsx(l,{})});function R(){const t=h();return o.useEffect(()=>{t(i())},[t]),e.jsxs("div",{children:[e.jsx(a,{to:"/",children:e.jsx("button",{type:"click",children:"Back"})}),e.jsx(p,{})]})}export{R as default};
