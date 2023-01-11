"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=l(n),p=o,b=g["".concat(s,".").concat(p)]||g[p]||u[p]||i;return n?a.createElement(b,r(r({ref:t},d),{},{components:n})):a.createElement(b,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={id:"babylond_tx_vesting_create-periodic-vesting-account",sidebar_label:"Babylond_tx_vesting_create-periodic-vesting-account",hide_table_of_contents:!0},r="Babylond tx vesting create-periodic-vesting-account",c={unversionedId:"cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-periodic-vesting-account",id:"cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-periodic-vesting-account",title:"Babylond tx vesting create-periodic-vesting-account",description:"Create a new vesting account funded with an allocation of tokens.",source:"@site/docs/cli/babylond/Babylond_tx/Babylond_tx_vesting/Babylond_tx_vesting_create-periodic-vesting-account.md",sourceDirName:"cli/babylond/Babylond_tx/Babylond_tx_vesting",slug:"/cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-periodic-vesting-account",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-periodic-vesting-account",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/Babylond_tx/Babylond_tx_vesting/Babylond_tx_vesting_create-periodic-vesting-account.md",tags:[],version:"current",frontMatter:{id:"babylond_tx_vesting_create-periodic-vesting-account",sidebar_label:"Babylond_tx_vesting_create-periodic-vesting-account",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_tx_vesting",permalink:"/docs/cli/babylond/Babylond_tx/babylond_tx_vesting"},next:{title:"Babylond_tx_vesting_create-permanent-locked-account",permalink:"/docs/cli/babylond/Babylond_tx/Babylond_tx_vesting/babylond_tx_vesting_create-permanent-locked-account"}},s={},l=[{value:"tx vesting create-periodic-vesting-account command",id:"tx-vesting-create-periodic-vesting-account-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond-tx-vesting-create-periodic-vesting-account"},"Babylond tx vesting create-periodic-vesting-account"),(0,o.kt)("p",null,"Create a new vesting account funded with an allocation of tokens."),(0,o.kt)("h2",{id:"tx-vesting-create-periodic-vesting-account-command"},"tx vesting create-periodic-vesting-account command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond tx vesting create-periodic-vesting-account [to_address] [periods_json_file] [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for create-periodic-vesting-account\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string     The network chain ID\n      --home string         directory for config and data (default "/home/<yourSystemUsername>/.babylond")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n')))}u.isMDXComponent=!0}}]);