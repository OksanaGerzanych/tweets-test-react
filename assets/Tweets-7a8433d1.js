import{R as Ce,u as lt,r as ae,a as Re,b as qe,h as ut,j as R,e as pt,c as Je,s as ce,d as dt,f as ht,L as ft}from"./index-dbaadb73.js";function et(e=Ce){const r=e===Ce?lt:()=>ae.useContext(e);return function(){const{store:n}=r();return n}}const gt=et();function mt(e=Ce){const r=e===Ce?gt:et(e);return function(){return r().dispatch}}const De=mt(),Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgB7VixSgNBEJ0TI8QihQqm0MLGQgstbCxsrP1mQRsbwTQGkkKLBDRFBFMkYA7ivNxsmCx32U1MzAg+GG7vbm5v993Mm+GS0Wh0Q+vHgO0uSZK0yIHXecaHQ1ozNsgGymzn9AdghTCgylF0TMZhiTDgmEnbJ8OwRhhwzqRtk1FYJKzEdsmkbZJBxC5qyPbK1qWsopXFULV2c/x7bC3xT5XvAcXBFYFHWgzvbHUZH4kBD5Stf9Z7L2fcjyKsjxdxyR9414C2CLUW6yb7NnPm6LJvQxYUk3LjIpAzVwxSfm68Rp5jqK4P3PU8sO+IAgil5BRZPF+JreJpTEWN23qD4j/xlXnwlYcUBxSBZfZeWPuu2CRY3DXKz5YphCLsQ5GFjV9RpjE4f6Es3arKv6EWgTQ4lfGYKHxdzMfnSO/YFuKE/bu0HFyo8S1bynMH01AjFGEtNUanDbIQQTXKdKovY0TMp0fuqXq2LM87zEPAuAjIce0IRZjWrbIcu0zM1IZFx9IcXw2dxoU6UgBoiwnCQhGmN+7I20YEQZ88X61liD5fpzRJ8/RZmOeB5id5JQgRpkUQqYdFI7Wu2XY835IIJ8Qdm6yrey51HWLbC+DZq9BrRSglj5iEthNrPr8Vffoq+LOA1EQ0gLQW+77xcEuXcnm+SnFAi9ImQwhFmOu6dWvQ12SJfrn7KM9nrmTDL4esWAHvLNiDrRQxjSt07Jo3i4qJDjqV55B+6JH8zePanrQdPfWeIv88gOQnWhz4cO53UaXAB+1KSnMWk8TID0QN6N+9r1v/PxCLUbMk8j6sEQaR75BhWCLMpMj7sELYT0X+1/ANbvUOPPqsLv4AAAAASUVORK5CYII=",Ue="/tweets-test-react/assets/tweet-338b66fd.png";function xt(e){function r(p,l,u,f,a){for(var k=0,s=0,O=0,C=0,E,g,D=0,Y=0,A,M=A=E=0,S=0,N=0,ge=0,_=0,Ae=u.length,me=Ae-1,V,h="",z="",je="",Ie="",re;S<Ae;){if(g=u.charCodeAt(S),S===me&&s+C+O+k!==0&&(s!==0&&(g=s===47?10:47),C=O=k=0,Ae++,me++),s+C+O+k===0){if(S===me&&(0<N&&(h=h.replace(L,"")),0<h.trim().length)){switch(g){case 32:case 9:case 59:case 13:case 10:break;default:h+=u.charAt(S)}g=59}switch(g){case 123:for(h=h.trim(),E=h.charCodeAt(0),A=1,_=++S;S<Ae;){switch(g=u.charCodeAt(S)){case 123:A++;break;case 125:A--;break;case 47:switch(g=u.charCodeAt(S+1)){case 42:case 47:e:{for(M=S+1;M<me;++M)switch(u.charCodeAt(M)){case 47:if(g===42&&u.charCodeAt(M-1)===42&&S+2!==M){S=M+1;break e}break;case 10:if(g===47){S=M+1;break e}}S=M}}break;case 91:g++;case 40:g++;case 34:case 39:for(;S++<me&&u.charCodeAt(S)!==g;);}if(A===0)break;S++}switch(A=u.substring(_,S),E===0&&(E=(h=h.replace(j,"").trim()).charCodeAt(0)),E){case 64:switch(0<N&&(h=h.replace(L,"")),g=h.charCodeAt(1),g){case 100:case 109:case 115:case 45:N=l;break;default:N=de}if(A=r(l,N,A,g,a+1),_=A.length,0<W&&(N=t(de,h,ge),re=d(3,A,N,l,$,G,_,g,a,f),h=N.join(""),re!==void 0&&(_=(A=re.trim()).length)===0&&(g=0,A="")),0<_)switch(g){case 115:h=h.replace(ee,o);case 100:case 109:case 45:A=h+"{"+A+"}";break;case 107:h=h.replace(v,"$1 $2"),A=h+"{"+A+"}",A=H===1||H===2&&c("@"+A,3)?"@-webkit-"+A+"@"+A:"@"+A;break;default:A=h+A,f===112&&(A=(z+=A,""))}else A="";break;default:A=r(l,t(l,h,ge),A,f,a+1)}je+=A,A=ge=N=M=E=0,h="",g=u.charCodeAt(++S);break;case 125:case 59:if(h=(0<N?h.replace(L,""):h).trim(),1<(_=h.length))switch(M===0&&(E=h.charCodeAt(0),E===45||96<E&&123>E)&&(_=(h=h.replace(" ",":")).length),0<W&&(re=d(1,h,l,p,$,G,z.length,f,a,f))!==void 0&&(_=(h=re.trim()).length)===0&&(h="\0\0"),E=h.charCodeAt(0),g=h.charCodeAt(1),E){case 0:break;case 64:if(g===105||g===99){Ie+=h+u.charAt(S);break}default:h.charCodeAt(_-1)!==58&&(z+=i(h,E,g,h.charCodeAt(2)))}ge=N=M=E=0,h="",g=u.charCodeAt(++S)}}switch(g){case 13:case 10:s===47?s=0:1+E===0&&f!==107&&0<h.length&&(N=1,h+="\0"),0<W*oe&&d(0,h,l,p,$,G,z.length,f,a,f),G=1,$++;break;case 59:case 125:if(s+C+O+k===0){G++;break}default:switch(G++,V=u.charAt(S),g){case 9:case 32:if(C+k+s===0)switch(D){case 44:case 58:case 9:case 32:V="";break;default:g!==32&&(V=" ")}break;case 0:V="\\0";break;case 12:V="\\f";break;case 11:V="\\v";break;case 38:C+s+k===0&&(N=ge=1,V="\f"+V);break;case 108:if(C+s+k+q===0&&0<M)switch(S-M){case 2:D===112&&u.charCodeAt(S-3)===58&&(q=D);case 8:Y===111&&(q=Y)}break;case 58:C+s+k===0&&(M=S);break;case 44:s+O+C+k===0&&(N=1,V+="\r");break;case 34:case 39:s===0&&(C=C===g?0:C===0?g:C);break;case 91:C+s+O===0&&k++;break;case 93:C+s+O===0&&k--;break;case 41:C+s+k===0&&O--;break;case 40:if(C+s+k===0){if(E===0)switch(2*D+3*Y){case 533:break;default:E=1}O++}break;case 64:s+O+C+k+M+A===0&&(A=1);break;case 42:case 47:if(!(0<C+k+O))switch(s){case 0:switch(2*g+3*u.charCodeAt(S+1)){case 235:s=47;break;case 220:_=S,s=42}break;case 42:g===47&&D===42&&_+2!==S&&(u.charCodeAt(_+2)===33&&(z+=u.substring(_,S+1)),V="",s=0)}}s===0&&(h+=V)}Y=D,D=g,S++}if(_=z.length,0<_){if(N=l,0<W&&(re=d(2,z,N,p,$,G,_,f,a,f),re!==void 0&&(z=re).length===0))return Ie+z+je;if(z=N.join(",")+"{"+z+"}",H*q!==0){switch(H!==2||c(z,2)||(q=0),q){case 111:z=z.replace(T,":-moz-$1")+z;break;case 112:z=z.replace(B,"::-webkit-input-$1")+z.replace(B,"::-moz-$1")+z.replace(B,":-ms-input-$1")+z}q=0}}return Ie+z+je}function t(p,l,u){var f=l.trim().split(m);l=f;var a=f.length,k=p.length;switch(k){case 0:case 1:var s=0;for(p=k===0?"":p[0]+" ";s<a;++s)l[s]=n(p,l[s],u).trim();break;default:var O=s=0;for(l=[];s<a;++s)for(var C=0;C<k;++C)l[O++]=n(p[C]+" ",f[s],u).trim()}return l}function n(p,l,u){var f=l.charCodeAt(0);switch(33>f&&(f=(l=l.trim()).charCodeAt(0)),f){case 38:return l.replace(P,"$1"+p.trim());case 58:return p.trim()+l.replace(P,"$1"+p.trim());default:if(0<1*u&&0<l.indexOf("\f"))return l.replace(P,(p.charCodeAt(0)===58?"":"$1")+p.trim())}return p+l}function i(p,l,u,f){var a=p+";",k=2*l+3*u+4*f;if(k===944){p=a.indexOf(":",9)+1;var s=a.substring(p,a.length-1).trim();return s=a.substring(0,p).trim()+s+";",H===1||H===2&&c(s,1)?"-webkit-"+s+s:s}if(H===0||H===2&&!c(a,1))return a;switch(k){case 1015:return a.charCodeAt(10)===97?"-webkit-"+a+a:a;case 951:return a.charCodeAt(3)===116?"-webkit-"+a+a:a;case 963:return a.charCodeAt(5)===110?"-webkit-"+a+a:a;case 1009:if(a.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(a.charCodeAt(8)===45)return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(se,"$1-webkit-$2")+a;break;case 932:if(a.charCodeAt(4)===45)switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(a.charCodeAt(8)!==99)break;return s=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+s+"-webkit-"+a+"-ms-flex-pack"+s+a;case 1005:return w.test(a)?a.replace(U,":-webkit-")+a.replace(U,":-moz-")+a:a;case 1e3:switch(s=a.substring(13).trim(),l=s.indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(l)){case 226:s=a.replace(F,"tb");break;case 232:s=a.replace(F,"tb-rl");break;case 220:s=a.replace(F,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+s+a;case 1017:if(a.indexOf("sticky",9)===-1)break;case 975:switch(l=(a=p).length-10,s=(a.charCodeAt(l)===33?a.substring(0,l):a).substring(p.indexOf(":",7)+1).trim(),k=s.charCodeAt(0)+(s.charCodeAt(7)|0)){case 203:if(111>s.charCodeAt(8))break;case 115:a=a.replace(s,"-webkit-"+s)+";"+a;break;case 207:case 102:a=a.replace(s,"-webkit-"+(102<k?"inline-":"")+"box")+";"+a.replace(s,"-webkit-"+s)+";"+a.replace(s,"-ms-"+s+"box")+";"+a}return a+";";case 938:if(a.charCodeAt(5)===45)switch(a.charCodeAt(6)){case 105:return s=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+s+"-ms-flex-"+s+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(Q,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(Q,"")+a}break;case 973:case 989:if(a.charCodeAt(3)!==45||a.charCodeAt(4)===122)break;case 931:case 953:if(te.test(p)===!0)return(s=p.substring(p.indexOf(":")+1)).charCodeAt(0)===115?i(p.replace("stretch","fill-available"),l,u,f).replace(":fill-available",":stretch"):a.replace(s,"-webkit-"+s)+a.replace(s,"-moz-"+s.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(a.charCodeAt(5)===102?"-ms-"+a:"")+a,u+f===211&&a.charCodeAt(13)===105&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+a}return a}function c(p,l){var u=p.indexOf(l===1?":":"{"),f=p.substring(0,l!==3?u:10);return u=p.substring(u+1,p.length-1),he(l!==2?f:f.replace(K,"$1"),u,l)}function o(p,l){var u=i(l,l.charCodeAt(0),l.charCodeAt(1),l.charCodeAt(2));return u!==l+";"?u.replace(ie," or ($1)").substring(4):"("+l+")"}function d(p,l,u,f,a,k,s,O,C,E){for(var g=0,D=l,Y;g<W;++g)switch(Y=X[g].call(I,p,D,u,f,a,k,s,O,C,E)){case void 0:case!1:case!0:case null:break;default:D=Y}if(D!==l)return D}function y(p){switch(p){case void 0:case null:W=X.length=0;break;default:if(typeof p=="function")X[W++]=p;else if(typeof p=="object")for(var l=0,u=p.length;l<u;++l)y(p[l]);else oe=!!p|0}return y}function x(p){return p=p.prefix,p!==void 0&&(he=null,p?typeof p!="function"?H=1:(H=2,he=p):H=0),x}function I(p,l){var u=p;if(33>u.charCodeAt(0)&&(u=u.trim()),fe=u,u=[fe],0<W){var f=d(-1,l,u,u,$,G,0,0,0,0);f!==void 0&&typeof f=="string"&&(l=f)}var a=r(de,u,l,0,0);return 0<W&&(f=d(-2,a,u,u,$,G,a.length,0,0,0),f!==void 0&&(a=f)),fe="",q=0,G=$=1,a}var j=/^\0+/g,L=/[\0\r\f]/g,U=/: */g,w=/zoo|gra/,b=/([,: ])(transform)/g,m=/,\r+?/g,P=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,B=/::(place)/g,T=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,ee=/\(\s*(.*)\s*\)/g,ie=/([\s\S]*?);/g,Q=/-self|flex-/g,K=/[^]*?(:[rp][el]a[\w-]+)[^]*/,te=/stretch|:\s*\w+\-(?:conte|avail)/,se=/([^-])(image-set\()/,G=1,$=1,q=0,H=1,de=[],X=[],W=0,he=null,oe=0,fe="";return I.use=y,I.set=x,e!==void 0&&x(e),I}var vt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yt(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var At=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,He=yt(function(e){return At.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function J(){return(J=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var Ye=function(e,r){for(var t=[e[0]],n=0,i=r.length;n<i;n+=1)t.push(r[n],e[n+1]);return t},Oe=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!qe.typeOf(e)},Se=Object.freeze([]),ne=Object.freeze({});function ve(e){return typeof e=="function"}function Ge(e){return e.displayName||e.name||"Component"}function Ne(e){return e&&typeof e.styledComponentId=="string"}var ue=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_e=typeof window<"u"&&"HTMLElement"in window,wt=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function ye(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var bt=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},r.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,c=i.length,o=c;t>=o;)(o<<=1)<0&&ye(16,""+t);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var d=c;d<o;d++)this.groupSizes[d]=0}for(var y=this.indexOfGroup(t+1),x=0,I=n.length;x<I;x++)this.tag.insertRule(y,n[x])&&(this.groupSizes[t]++,y++)},r.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),c=i+n;this.groupSizes[t]=0;for(var o=i;o<c;o++)this.tag.deleteRule(i)}},r.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],c=this.indexOfGroup(t),o=c+i,d=c;d<o;d++)n+=this.tag.getRule(d)+`/*!sc*/
`;return n},e}(),ke=new Map,Ee=new Map,xe=1,we=function(e){if(ke.has(e))return ke.get(e);for(;Ee.has(xe);)xe++;var r=xe++;return ke.set(e,r),Ee.set(r,e),r},kt=function(e){return Ee.get(e)},Ct=function(e,r){r>=xe&&(xe=r+1),ke.set(e,r),Ee.set(r,e)},St="style["+ue+'][data-styled-version="5.3.9"]',Et=new RegExp("^"+ue+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Rt=function(e,r,t){for(var n,i=t.split(","),c=0,o=i.length;c<o;c++)(n=i[c])&&e.registerName(r,n)},jt=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),n=[],i=0,c=t.length;i<c;i++){var o=t[i].trim();if(o){var d=o.match(Et);if(d){var y=0|parseInt(d[1],10),x=d[2];y!==0&&(Ct(x,y),Rt(e,x,d[3]),e.getTag().insertRules(y,n)),n.length=0}else n.push(o)}}},It=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},tt=function(e){var r=document.head,t=e||r,n=document.createElement("style"),i=function(d){for(var y=d.childNodes,x=y.length;x>=0;x--){var I=y[x];if(I&&I.nodeType===1&&I.hasAttribute(ue))return I}}(t),c=i!==void 0?i.nextSibling:null;n.setAttribute(ue,"active"),n.setAttribute("data-styled-version","5.3.9");var o=It();return o&&n.setAttribute("nonce",o),t.insertBefore(n,c),n},Pt=function(){function e(t){var n=this.element=tt(t);n.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var c=document.styleSheets,o=0,d=c.length;o<d;o++){var y=c[o];if(y.ownerNode===i)return y}ye(17)}(n),this.length=0}var r=e.prototype;return r.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var n=this.sheet.cssRules[t];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Tt=function(){function e(t){var n=this.element=tt(t);this.nodes=n.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n),c=this.nodes[t];return this.element.insertBefore(i,c||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ot=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qe=_e,Ft={isServer:!_e,useCSSOMInjection:!wt},rt=function(){function e(t,n,i){t===void 0&&(t=ne),n===void 0&&(n={}),this.options=J({},Ft,{},t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&_e&&Qe&&(Qe=!1,function(c){for(var o=document.querySelectorAll(St),d=0,y=o.length;d<y;d++){var x=o[d];x&&x.getAttribute(ue)!=="active"&&(jt(c,x),x.parentNode&&x.parentNode.removeChild(x))}}(this))}e.registerId=function(t){return we(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(J({},this.options,{},t),this.gs,n&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(i=(n=this.options).isServer,c=n.useCSSOMInjection,o=n.target,t=i?new Ot(o):c?new Pt(o):new Tt(o),new bt(t)));var t,n,i,c,o},r.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},r.registerName=function(t,n){if(we(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},r.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(we(t),i)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(we(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var n=t.getTag(),i=n.length,c="",o=0;o<i;o++){var d=kt(o);if(d!==void 0){var y=t.names.get(d),x=n.getGroup(o);if(y&&x&&y.size){var I=ue+".g"+o+'[id="'+d+'"]',j="";y!==void 0&&y.forEach(function(L){L.length>0&&(j+=L+",")}),c+=""+x+I+'{content:"'+j+`"}/*!sc*/
`}}}return c}(this)},e}(),zt=/(a)(d)/gi,We=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fe(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=We(r%52)+t;return(We(r%52)+t).replace(zt,"$1-$2")}var le=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},nt=function(e){return le(5381,e)};function Lt(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(ve(t)&&!Ne(t))return!1}return!0}var Bt=nt("5.3.9"),Dt=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Lt(r),this.componentId=t,this.baseHash=le(Bt,t),this.baseStyle=n,rt.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var i=this.componentId,c=[];if(this.baseStyle&&c.push(this.baseStyle.generateAndInjectStyles(r,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(i,this.staticRulesId))c.push(this.staticRulesId);else{var o=pe(this.rules,r,t,n).join(""),d=Fe(le(this.baseHash,o)>>>0);if(!t.hasNameForId(i,d)){var y=n(o,"."+d,void 0,i);t.insertRules(i,d,y)}c.push(d),this.staticRulesId=d}else{for(var x=this.rules.length,I=le(this.baseHash,n.hash),j="",L=0;L<x;L++){var U=this.rules[L];if(typeof U=="string")j+=U;else if(U){var w=pe(U,r,t,n),b=Array.isArray(w)?w.join(""):w;I=le(I,b+L),j+=b}}if(j){var m=Fe(I>>>0);if(!t.hasNameForId(i,m)){var P=n(j,"."+m,void 0,i);t.insertRules(i,m,P)}c.push(m)}}return c.join(" ")},e}(),Nt=/^\s*\/\/.*$/gm,_t=[":","[",".","#"];function Mt(e){var r,t,n,i,c=e===void 0?ne:e,o=c.options,d=o===void 0?ne:o,y=c.plugins,x=y===void 0?Se:y,I=new xt(d),j=[],L=function(b){function m(P){if(P)try{b(P+"}")}catch{}}return function(P,v,B,T,F,ee,ie,Q,K,te){switch(P){case 1:if(K===0&&v.charCodeAt(0)===64)return b(v+";"),"";break;case 2:if(Q===0)return v+"/*|*/";break;case 3:switch(Q){case 102:case 112:return b(B[0]+v),"";default:return v+(te===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(m)}}}(function(b){j.push(b)}),U=function(b,m,P){return m===0&&_t.indexOf(P[t.length])!==-1||P.match(i)?b:"."+r};function w(b,m,P,v){v===void 0&&(v="&");var B=b.replace(Nt,""),T=m&&P?P+" "+m+" { "+B+" }":B;return r=v,t=m,n=new RegExp("\\"+t+"\\b","g"),i=new RegExp("(\\"+t+"\\b){2,}"),I(P||!m?"":m,T)}return I.use([].concat(x,[function(b,m,P){b===2&&P.length&&P[0].lastIndexOf(t)>0&&(P[0]=P[0].replace(n,U))},L,function(b){if(b===-2){var m=j;return j=[],m}}])),w.hash=x.length?x.reduce(function(b,m){return m.name||ye(15),le(b,m.name)},5381).toString():"",w}var at=Re.createContext();at.Consumer;var it=Re.createContext(),Ut=(it.Consumer,new rt),ze=Mt();function Ht(){return ae.useContext(at)||Ut}function Yt(){return ae.useContext(it)||ze}var Gt=function(){function e(r,t){var n=this;this.inject=function(i,c){c===void 0&&(c=ze);var o=n.name+c.hash;i.hasNameForId(n.id,o)||i.insertRules(n.id,o,c(n.rules,o,"@keyframes"))},this.toString=function(){return ye(12,String(n.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=ze),this.name+r.hash},e}(),Qt=/([A-Z])/,Wt=/([A-Z])/g,$t=/^ms-/,Xt=function(e){return"-"+e.toLowerCase()};function $e(e){return Qt.test(e)?e.replace(Wt,Xt).replace($t,"-ms-"):e}var Xe=function(e){return e==null||e===!1||e===""};function pe(e,r,t,n){if(Array.isArray(e)){for(var i,c=[],o=0,d=e.length;o<d;o+=1)(i=pe(e[o],r,t,n))!==""&&(Array.isArray(i)?c.push.apply(c,i):c.push(i));return c}if(Xe(e))return"";if(Ne(e))return"."+e.styledComponentId;if(ve(e)){if(typeof(x=e)!="function"||x.prototype&&x.prototype.isReactComponent||!r)return e;var y=e(r);return pe(y,r,t,n)}var x;return e instanceof Gt?t?(e.inject(t,n),e.getName(n)):e:Oe(e)?function I(j,L){var U,w,b=[];for(var m in j)j.hasOwnProperty(m)&&!Xe(j[m])&&(Array.isArray(j[m])&&j[m].isCss||ve(j[m])?b.push($e(m)+":",j[m],";"):Oe(j[m])?b.push.apply(b,I(j[m],m)):b.push($e(m)+": "+(U=m,(w=j[m])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||U in vt?String(w).trim():w+"px")+";"));return L?[L+" {"].concat(b,["}"]):b}(e):e.toString()}var Ve=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Vt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return ve(e)||Oe(e)?Ve(pe(Ye(Se,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Ve(pe(Ye(e,t)))}var Zt=function(e,r,t){return t===void 0&&(t=ne),e.theme!==t.theme&&e.theme||r||t.theme},Kt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qt=/(^-|-$)/g;function Pe(e){return e.replace(Kt,"-").replace(qt,"")}var Jt=function(e){return Fe(nt(e)>>>0)};function be(e){return typeof e=="string"&&!0}var Le=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},er=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function tr(e,r,t){var n=e[t];Le(r)&&Le(n)?st(n,r):e[t]=r}function st(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];for(var i=0,c=t;i<c.length;i++){var o=c[i];if(Le(o))for(var d in o)er(d)&&tr(e,o[d],d)}return e}var ot=Re.createContext();ot.Consumer;var Te={};function ct(e,r,t){var n=Ne(e),i=!be(e),c=r.attrs,o=c===void 0?Se:c,d=r.componentId,y=d===void 0?function(v,B){var T=typeof v!="string"?"sc":Pe(v);Te[T]=(Te[T]||0)+1;var F=T+"-"+Jt("5.3.9"+T+Te[T]);return B?B+"-"+F:F}(r.displayName,r.parentComponentId):d,x=r.displayName,I=x===void 0?function(v){return be(v)?"styled."+v:"Styled("+Ge(v)+")"}(e):x,j=r.displayName&&r.componentId?Pe(r.displayName)+"-"+r.componentId:r.componentId||y,L=n&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,U=r.shouldForwardProp;n&&e.shouldForwardProp&&(U=r.shouldForwardProp?function(v,B,T){return e.shouldForwardProp(v,B,T)&&r.shouldForwardProp(v,B,T)}:e.shouldForwardProp);var w,b=new Dt(t,j,n?e.componentStyle:void 0),m=b.isStatic&&o.length===0,P=function(v,B){return function(T,F,ee,ie){var Q=T.attrs,K=T.componentStyle,te=T.defaultProps,se=T.foldedComponentIds,G=T.shouldForwardProp,$=T.styledComponentId,q=T.target,H=function(f,a,k){f===void 0&&(f=ne);var s=J({},a,{theme:f}),O={};return k.forEach(function(C){var E,g,D,Y=C;for(E in ve(Y)&&(Y=Y(s)),Y)s[E]=O[E]=E==="className"?(g=O[E],D=Y[E],g&&D?g+" "+D:g||D):Y[E]}),[s,O]}(Zt(F,ae.useContext(ot),te)||ne,F,Q),de=H[0],X=H[1],W=function(f,a,k,s){var O=Ht(),C=Yt(),E=a?f.generateAndInjectStyles(ne,O,C):f.generateAndInjectStyles(k,O,C);return E}(K,ie,de),he=ee,oe=X.$as||F.$as||X.as||F.as||q,fe=be(oe),p=X!==F?J({},F,{},X):F,l={};for(var u in p)u[0]!=="$"&&u!=="as"&&(u==="forwardedAs"?l.as=p[u]:(G?G(u,He,oe):!fe||He(u))&&(l[u]=p[u]));return F.style&&X.style!==F.style&&(l.style=J({},F.style,{},X.style)),l.className=Array.prototype.concat(se,$,W!==$?W:null,F.className,X.className).filter(Boolean).join(" "),l.ref=he,ae.createElement(oe,l)}(w,v,B,m)};return P.displayName=I,(w=Re.forwardRef(P)).attrs=L,w.componentStyle=b,w.displayName=I,w.shouldForwardProp=U,w.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Se,w.styledComponentId=j,w.target=n?e.target:e,w.withComponent=function(v){var B=r.componentId,T=function(ee,ie){if(ee==null)return{};var Q,K,te={},se=Object.keys(ee);for(K=0;K<se.length;K++)Q=se[K],ie.indexOf(Q)>=0||(te[Q]=ee[Q]);return te}(r,["componentId"]),F=B&&B+"-"+(be(v)?v:Pe(Ge(v)));return ct(v,J({},T,{attrs:L,componentId:F}),t)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=n?st({},e.defaultProps,v):v}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&ut(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Be=function(e){return function r(t,n,i){if(i===void 0&&(i=ne),!qe.isValidElementType(n))return ye(1,String(n));var c=function(){return t(n,i,Vt.apply(void 0,arguments))};return c.withConfig=function(o){return r(t,n,J({},i,{},o))},c.attrs=function(o){return r(t,n,J({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},c}(ct,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Be[e]=Be(e)});const Z=Be,rr=Z.li`
position: relative;
list-style: none;
width: 380px;
height: 460px;
background-repeat: no-repeat;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); 
border-radius: 20px;
 background-image: url('../../images/ellipse.png'),
     url('../../images/rectangle.png'),
   
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
 
  background-position: left 150px top 178px, 
    left 0 top 214px,  top 0 left 0; 
`,nr=Z.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;

  position: absolute;
  left: 163.5px;
  top: 186.5px;
`,ar=Z.p`
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
`,ir=Z.p`
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
`,Ze=Z.button`
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
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
&&.active {
  /* composes: btn; */
  background-color: #5cd3a8;
}
`,Ke=Z.span`
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
`,sr=Z.picture`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;
`,or=Z.picture`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;

`,cr=Z.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;

background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

`,lr=Z.div`
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

`,ur=({id:e,user:r,tweets:t,followers:n,avatar:i,isFollowing:c})=>{const o=De(),d=()=>{o(pt({id:e,isFollowing:c,followers:n}))};return R.jsxs(rr,{children:[R.jsxs(sr,{children:[" ",R.jsx("source",{srcSet:`${Me}`}),R.jsx("img",{src:Me,alt:"logo"})]}),R.jsxs(or,{children:[" ",R.jsx("source",{srcSet:`${Ue}`}),R.jsx("img",{src:Ue,alt:"tweets"})]}),R.jsx(cr,{}),R.jsx(lr,{}),R.jsx(nr,{src:i,alt:r}),R.jsxs(ar,{children:[t," tweets"]}),R.jsxs(ir,{children:[n.toLocaleString("en-US")," followers"]}),c?R.jsx(Ze,{isFollow:c,type:"button",onClick:d,children:R.jsx(Ke,{children:"following"})}):R.jsx(Ze,{isFollow:c,type:"button",onClick:d,children:R.jsx(Ke,{children:"follow"})})]})},pr=e=>e.tweets.items,dr=e=>e.filters.status,hr=Z.ul`
display: flex;
gap: 30px;
text-align: center;
`,fr=()=>{const e=Je(pr),[r,t]=ae.useState(1),n=e.slice(0,r*3),i=r*3>=e.length,c=()=>{t(o=>o+1)};return R.jsxs("div",{children:[R.jsx(hr,{children:n.map(({id:o,...d})=>R.jsx(ur,{...d},o))}),i?null:R.jsx("button",{type:"button",onClick:c,children:"Load More"})]})},gr=()=>{const e=De(),r=Je(dr),t=n=>e(dt(n));return R.jsxs("div",{children:[R.jsx("button",{selected:r===ce.all,onClick:()=>t(ce.all),children:"All"}),R.jsx("button",{selected:r===ce.follow,onClick:()=>t(ce.follow),children:"Follow"}),R.jsx("button",{selected:r===ce.followings,onClick:()=>t(ce.followings),children:"Followings"})]})};function xr(){const e=De();return ae.useEffect(()=>{e(ht())},[e]),R.jsxs("div",{children:[R.jsx(ft,{to:"/",children:R.jsx("button",{type:"click",children:"Back"})}),R.jsx(gr,{}),R.jsx(fr,{})]})}export{xr as default};
