"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=o,p=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(p,r(r({ref:t},c),{},{components:n})):a.createElement(p,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={id:"babylondgentx",sidebar_label:"Babylond_gentx",hide_table_of_contents:!0},r="Babylond_gentx",s={unversionedId:"cli/babylond/babylondgentx",id:"cli/babylond/babylondgentx",title:"Babylond_gentx",description:"Generate a genesis transaction by a specified key name, an amount that establishes a validator with a self-delegation signed by the reference key on the keyring. The genesis transaction is retrieved from the priv _validator.json file.",source:"@site/docs/cli/babylond/babylondgentx.md",sourceDirName:"cli/babylond",slug:"/cli/babylond/babylondgentx",permalink:"/docs/cli/babylond/babylondgentx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/babylondgentx.md",tags:[],version:"current",frontMatter:{id:"babylondgentx",sidebar_label:"Babylond_gentx",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_export",permalink:"/docs/cli/babylond/babylondexport"},next:{title:"Babylond_help",permalink:"/docs/cli/babylond/babylondhelp"}},l={},d=[{value:"gentx command",id:"gentx-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond_gentx"},"Babylond_gentx"),(0,o.kt)("p",null,"Generate a genesis transaction by a specified key name, an amount that establishes a validator with a self-delegation signed by the reference key on the keyring. The genesis transaction is retrieved from the priv _validator.json file."),(0,o.kt)("h2",{id:"gentx-command"},"gentx command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond gentx [key_name] [amount] [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --account-number uint                 The account number of the signing account (offline mode only)\n      --amount string                       Amount of coins to bond\n      --aux                                 Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string               Transaction broadcasting mode (sync|async|block) (default "sync")\n      --chain-id string                     The network chain ID\n      --commission-max-change-rate string   The maximum commission change rate percentage (per day)\n      --commission-max-rate string          The maximum commission rate percentage\n      --commission-rate string              The initial commission rate percentage\n      --details string                      The validator\'s (optional) details\n      --dry-run                             ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string                  Fee granter grants fees for the transaction\n      --fee-payer string                    Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                         Fees to pay along with transaction; eg: 10uatom\n      --from string                         Name or address of private key with which to sign\n      --gas string                          gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float                adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string                   Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                       Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                                help for gentx\n      --home string                         The application home directory (default "/home/kakakepan/.babylond")\n      --identity string                     The (optional) identity signature (ex. UPort or Keybase)\n      --ip string                           The node\'s public IP (default "192.168.103.91")\n      --keyring-backend string              Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string                  The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                              Use a connected Ledger device\n      --min-self-delegation string          The minimum self delegation required on the validator\n      --moniker string                      The validator\'s (optional) moniker\n      --node string                         <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --node-id string                      The node\'s NodeID\n      --note string                         Note to add a description to the transaction (previously --memo)\n      --offline                             Offline mode (does not allow any online functionality)\n  -o, --output string                       Output format (text|json) (default "json")\n      --output-document string              Write the genesis transaction JSON document to the given file instead of the default location\n      --pubkey string                       The validator\'s Protobuf JSON encoded public key\n      --security-contact string             The validator\'s (optional) security contact email\n  -s, --sequence uint                       The sequence number of the signing account (offline mode only)\n      --sign-mode string                    Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint                 Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                          Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --website string                      The validator\'s (optional) website\n  -y, --yes                                 Skip tx broadcasting prompt confirmation\n')),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--log_format string   The logging format (json|plain) (default "plain")\n--log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n--trace\n')))}m.isMDXComponent=!0}}]);