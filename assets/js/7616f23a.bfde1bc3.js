"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>_,contentTitle:()=>E,default:()=>x,frontMatter:()=>O,metadata:()=>k,toc:()=>j});var r=n(7462),o=n(7294),i=n(3905),c=n(6010),a=n(2802),l=n(9960),s=n(3919),u=n(5999);const d="cardContainer_fWXF",p="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:n}=e;return o.createElement(l.Z,{href:t,className:(0,c.Z)("card padding--lg",d)},n)}function y(e){let{href:t,icon:n,title:r,description:i}=e;return o.createElement(f,{href:t},o.createElement("h2",{className:(0,c.Z)("text--truncate",p),title:r},n," ",r),i&&o.createElement("p",{className:(0,c.Z)("text--truncate",m),title:i},i))}function v(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?o.createElement(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return o.createElement(y,{href:t.href,icon:n,title:t.label,description:r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(b,{item:t});case"category":return o.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const n=(0,a.jA)();return o.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return o.createElement(w,e);const r=(0,a.MN)(t);return o.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}const O={id:"overview",sidebar_label:"Introduction",sidebar_position:0,hide_table_of_contents:!0,pagination_prev:null,custom_edit_url:null},E="Introduction",k={unversionedId:"introduction/overview",id:"introduction/overview",title:"Introduction",description:"These articles provide an overview of what Babylon is and how Babylon works on the Proof of Stake chains.",source:"@site/docs/introduction/overview.md",sourceDirName:"introduction",slug:"/introduction/overview",permalink:"/docs/introduction/overview",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",sidebar_label:"Introduction",sidebar_position:0,hide_table_of_contents:!0,pagination_prev:null,custom_edit_url:null},sidebar:"docs",next:{title:"1. Babylon Overview",permalink:"/docs/introduction/babylon-overview"}},_={},j=[],P={toc:j};function x(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"These articles provide an overview of what Babylon is and how Babylon works on the Proof of Stake chains."),(0,i.kt)(g,{mdxType:"DocCardList"}))}x.isMDXComponent=!0}}]);