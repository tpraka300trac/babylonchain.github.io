"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[2425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,m=s["".concat(c,".").concat(b)]||s[b]||y[b]||a;return n?o.createElement(m,u(u({ref:t},i),{},{components:n})):o.createElement(m,u({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var d=2;d<a;d++)u[d]=n[d];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={id:"babylond_query_auth_module_accounts",sidebar_label:"Babylond_query_auth_module_accounts",hide_table_of_contents:!0},u="Babylond Query auth module-accounts",l={unversionedId:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts",id:"cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts",title:"Babylond Query auth module-accounts",description:"Querying all the module accounts.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_accounts.md",sourceDirName:"cli/babylond/BabylondQuery/Babylond_query_auth",slug:"/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_accounts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_auth/Babylond_query_auth_module_accounts.md",tags:[],version:"current",frontMatter:{id:"babylond_query_auth_module_accounts",sidebar_label:"Babylond_query_auth_module_accounts",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_query_auth_module_account",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_module_account"},next:{title:"Babylond_query_auth_params",permalink:"/docs/cli/babylond/BabylondQuery/Babylond_query_auth/babylond_query_auth_params"}},c={},d=[{value:"query auth module-accounts command",id:"query-auth-module-accounts-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],i={toc:d};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babylond-query-auth-module-accounts"},"Babylond Query auth module-accounts"),(0,r.kt)("p",null,"Querying all the module accounts."),(0,r.kt)("h2",{id:"query-auth-module-accounts-command"},"query auth module-accounts command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"babylond query auth module-accounts [flags]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for module-accounts\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n')),(0,r.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'--chain-id string     The network chain ID\n--home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n--log_format string   The logging format (json|plain) (default "plain")\n--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n--trace               print out full stack trace on errors\n')))}y.isMDXComponent=!0}}]);