"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[9055],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(a),m=o,u=g["".concat(s,".").concat(m)]||g[m]||p[m]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},64866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={id:"babylond_tx_gov_submit-legacy-proposal_param",sidebar_label:"babylond tx gov submit-legacy-proposal param-change",hide_table_of_contents:!0},i="babylond tx gov submit-legacy-proposal param-change",l={unversionedId:"cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_param",id:"cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_param",title:"babylond tx gov submit-legacy-proposal param-change",description:"Submit a parameters change proposal.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/Babylond_tx_gov_submit-legacy-proposal_param.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy",slug:"/cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_param",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_param",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/Babylond_tx_gov_submit-legacy-proposal_param.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_gov_submit-legacy-proposal_param",sidebar_label:"babylond tx gov submit-legacy-proposal param-change",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"babylond tx gov submit-legacy-proposal community-pool-spend",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_community"},next:{title:"babylond tx gov submit-legacy-proposal software-upgrade",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_gov/submit-legacy/babylond_tx_gov_submit-legacy-proposal_software"}},s={},c=[{value:"tx gov submit-legacy-proposal param-change command",id:"tx-gov-submit-legacy-proposal-param-change-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-tx-gov-submit-legacy-proposal-param-change"},"babylond tx gov submit-legacy-proposal param-change"),(0,o.kt)("p",null,"Submit a parameters change proposal."),(0,o.kt)("h2",{id:"tx-gov-submit-legacy-proposal-param-change-command"},"tx gov submit-legacy-proposal param-change command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond tx gov submit-legacy-proposal param-change [proposal-file] [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for param-change\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}p.isMDXComponent=!0}}]);