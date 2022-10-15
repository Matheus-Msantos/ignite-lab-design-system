var Z=Object.defineProperty;var l=(e,r)=>Z(e,"name",{value:r,configurable:!0});import{$}from"./index.module.15180565.js";import{j as n,a,F as d}from"./jsx-runtime.4a4b5bc1.js";import{r as h}from"./index.c3cb3802.js";import"./iframe.edf7d598.js";function m(e){return n("div",{className:"flex intemscenter gap-3 py-4 px-3 rounded bg-gray-800  w-full focus-within:ring-2 ring-cyan-300",children:e.children})}l(m,"TextInputRoot");m.displayName="textInput.Root";function j(e){return n($,{className:"w-6 h-6 text-gray-400",children:e.children})}l(j,"TextInputIcon");j.displayName="textInput.Icon";function W(e){return n("input",{className:"bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400  outline-none",...e})}l(W,"TextInputInput");W.displayName="textInput.Input";const k={Root:m,Input:W,Icon:j};var N=h.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),T=l(function(r,o,i){var t=i.get(r);return t?t(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function g(e,r){if(e==null)return{};var o={},i=Object.keys(e),t,s;for(s=0;s<i.length;s++)t=i[s],!(r.indexOf(t)>=0)&&(o[t]=e[t]);return o}l(g,"_objectWithoutPropertiesLoose");var v=h.exports.forwardRef(function(e,r){var o=e.alt,i=e.color,t=e.size,s=e.weight,I=e.mirrored,V=e.children,C=e.renderPath,H=g(e,["alt","color","size","weight","mirrored","children","renderPath"]),c=h.exports.useContext(N),p=c.color,f=p===void 0?"currentColor":p,x=c.size,y=c.weight,b=y===void 0?"regular":y,L=c.mirrored,M=L===void 0?!1:L,P=g(c,["color","size","weight","mirrored"]);return a("svg",{...Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:t!=null?t:x,height:t!=null?t:x,fill:i!=null?i:f,viewBox:"0 0 256 256",transform:I||M?"scale(-1, 1)":void 0},P,H),children:[!!o&&n("title",{children:o}),V,n("rect",{width:"256",height:"256",fill:"none"}),C(s!=null?s:b,i!=null?i:f)]})});v.displayName="IconBase";const _=v;var u=new Map;u.set("bold",function(e){return a(d,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});u.set("duotone",function(e){return a(d,{children:[n("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});u.set("fill",function(){return n(d,{children:n("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"})})});u.set("light",function(e){return a(d,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});u.set("thin",function(e){return a(d,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});u.set("regular",function(e){return a(d,{children:[n("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),n("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var z=l(function(r,o){return T(r,o,u)},"renderPath"),w=h.exports.forwardRef(function(e,r){return n(_,{...Object.assign({ref:r},e,{renderPath:z})})});w.displayName="Envelope";const R=w,D={title:"Components/TextInput",component:k.Root,args:{children:a(d,{children:[n(k.Icon,{children:n(R,{})}),n(k.Input,{placeholder:"Type your e-mail address"})]})},argTypes:{children:{table:{disable:!0}}}},K={},S=["Default"];export{K as Default,S as __namedExportsOrder,D as default};
//# sourceMappingURL=TextInput.stories.aa059b70.js.map
