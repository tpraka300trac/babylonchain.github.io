"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[5465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=d(n),p=a,b=y["".concat(s,".").concat(p)]||y[p]||c[p]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"babylond_query_txs",sidebar_label:"Babylond_query_txs",hide_table_of_contents:!0},l="Babylond Query txs",i={unversionedId:"cli/babylond/BabylondQuery/babylond_query_txs",id:"cli/babylond/BabylondQuery/babylond_query_txs",title:"Babylond Query txs",description:"Querying for paginated transactions that match a set of events.",source:"@site/docs/cli/babylond/BabylondQuery/Babylond_query_txs.md",sourceDirName:"cli/babylond/BabylondQuery",slug:"/cli/babylond/BabylondQuery/babylond_query_txs",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_txs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/BabylondQuery/Babylond_query_txs.md",tags:[],version:"current",frontMatter:{id:"babylond_query_txs",sidebar_label:"Babylond_query_txs",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_query_tx",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_tx"},next:{title:"Babylond_query_upgrade",permalink:"/docs/cli/babylond/BabylondQuery/babylond_query_upgrade"}},s={},d=[{value:"query txs command",id:"query-txs-command",level:2},{value:"Example Command",id:"example-command",level:3},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babylond-query-txs"},"Babylond Query txs"),(0,a.kt)("p",null,"Querying for paginated transactions that match a set of events."),(0,a.kt)("h2",{id:"query-txs-command"},"query txs command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"babylond query txs [flags]\n")),(0,a.kt)("h3",{id:"example-command"},"Example Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ babylond query txs --events 'message.sender=cosmos5...&message.action=withdraw_delegator_reward' --page 1 --limit 50\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --events string   list of transaction events in the form of {eventType}.{eventAttribute}={value}\n      --height int      Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help            help for txs\n      --limit int       Query number of transactions results per page returned (default 100)\n      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string   Output format (text|json) (default "text")\n      --page int        Query a specific page of paginated results (default 1)\n')),(0,a.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n')))}c.isMDXComponent=!0}}]);