"use strict";(self.webpackChunkdocument_sample=self.webpackChunkdocument_sample||[]).push([[1083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(r),u=o,b=y["".concat(s,".").concat(u)]||y[u]||d[u]||a;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"babylondkeysexport",sidebar_label:"Babylond_keys_export",hide_table_of_contents:!0},l="Babylond_keys_export",i={unversionedId:"cli/babylond/keys/babylondkeysexport",id:"cli/babylond/keys/babylondkeysexport",title:"Babylond_keys_export",description:"Export a private key in encrypted ASCII format from the local keyring. Advanced users should only use this feature if they are comfortable handling private keys and fully aware of their risks.",source:"@site/docs/cli/babylond/keys/babylonkeysexport.md",sourceDirName:"cli/babylond/keys",slug:"/cli/babylond/keys/babylondkeysexport",permalink:"/docs/cli/babylond/keys/babylondkeysexport",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/babylond/keys/babylonkeysexport.md",tags:[],version:"current",frontMatter:{id:"babylondkeysexport",sidebar_label:"Babylond_keys_export",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Babylond_keysdelete",permalink:"/docs/cli/babylond/keys/babylondkeysdelete"},next:{title:"Babylond_keys_import",permalink:"/docs/cli/babylond/keys/babylondkeysimport"}},s={},p=[{value:"keys export command",id:"keys-export-command",level:2},{value:"Options",id:"options",level:2},{value:"Options Inherited from Parent Commands",id:"options-inherited-from-parent-commands",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"babylond_keys_export"},"Babylond_keys_export"),(0,o.kt)("p",null,"Export a private key in encrypted ASCII format from the local keyring. Advanced users should only use this feature if they are comfortable handling private keys and fully aware of their risks."),(0,o.kt)("h2",{id:"keys-export-command"},"keys export command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"babylond keys export <name> [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-h, --help            help for export\n      --unarmored-hex   Export unarmored hex privkey. Requires --unsafe.\n      --unsafe          Enable unsafe operations. This flag must be switched on along with all unsafe operation-specific options.\n")),(0,o.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options Inherited from Parent Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --home string              The application home directory (default "/home/<yourSystemUsername>/.babylond")\n      --keyring-backend string   Select keyring\'s backend (os|file|test) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --log_format string        The logging format (json|plain) (default "plain")\n      --log_level string         The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --output string            Output format (text|json) (default "text")\n      --trace                    print out full stack trace on errors\n')))}d.isMDXComponent=!0}}]);