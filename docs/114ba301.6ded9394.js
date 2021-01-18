(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(g,s(s({ref:t},c),{},{components:n})):a.a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=(n(0),n(106));const i={id:"your-first-api",title:"Adding Your First API",sidebar_label:"2. Adding Your First API",slug:"/gateway/your-first-api"},o={unversionedId:"gateway/your-first-api",id:"gateway/your-first-api",isDocsHomePage:!1,title:"Adding Your First API",description:"This guide assumes you've been following the quick get-started installation guide.",source:"@site/docs/gateway/your-first-api.md",slug:"/gateway/your-first-api",permalink:"/tyk-gw-docker-dev-env/docs/gateway/your-first-api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/gateway/your-first-api.md",version:"current",sidebar_label:"2. Adding Your First API",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/tyk-gw-docker-dev-env/docs/gateway/installation"},next:{title:"Your First Auth Token",permalink:"/tyk-gw-docker-dev-env/docs/gateway/your-first-token"}},s=[{value:"Your First API",id:"your-first-api",children:[]}],l={toc:s};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide assumes you've been following the quick get-started installation guide."),Object(a.b)("h3",{id:"your-first-api"},"Your First API"),Object(a.b)("p",null,"Now that Tyk is running, we are ready to protect our APIs."),Object(a.b)("p",null,'On the Tyk Gateway\'s file system, there is an "apps" directory.  That is where we place our API definitions that tell Tyk how to protect and reverse proxy our APIs.'),Object(a.b)("h4",{id:"included-api"},"Included API"),Object(a.b)("p",null,"Inside the docker-compose directory:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ ls -l apps\nkeyless-plugin-api.json\nprotected-api.json\n")),Object(a.b)("p",null,"Let's look at our ",Object(a.b)("inlineCode",{parentName:"p"},"keyless-plugin-api.json")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ cat apps/keyless-plugin-api.json\n")),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "Tyk Test Keyless API",\n    "api_id": "keyless",\n    "org_id": "default",\n    "definition": {\n        "location": "header",\n        "key": "version"\n    },\n    "use_keyless": true,\n    "version_data": {\n        "not_versioned": true,\n        "versions": {\n            "Default": {\n                "name": "Default"\n            }\n        }\n    },\n    "custom_middleware": {\n        "pre": [\n          {\n            "name": "testJSVMData",\n            "path": "./middleware/injectHeader.js",\n            "require_session": false,\n            "raw_body_only": false\n          }\n        ]\n  },\n    "driver": "otto",\n    "proxy": {\n        "listen_path": "/keyless-test/",\n        "target_url": "http://httpbin.org",\n        "strip_listen_path": true\n    }\n}\n')),Object(a.b)("p",null,"The things we care about are:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"proxy": {\n    "listen_path": "/keyless-test/",\n    "target_url": "http://httpbin.org",\n    "strip_listen_path": true\n}\n')),Object(a.b)("p",null,"So we can see that the Gateway is listening on the ",Object(a.b)("inlineCode",{parentName:"p"},"/keyless-test/")," path for this API, and reverse proxying that traffic to ",Object(a.b)("inlineCode",{parentName:"p"},"http://httpbin.org"),", which is a mock server that will echo our HTTP request."),Object(a.b)("p",null,"Let's try hitting the equivalent of ",Object(a.b)("inlineCode",{parentName:"p"},"http://httpbin.org/get")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ curl http://httpbin.org/get\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-6005eefc-339c26631235a98376c98973"\n  },\n  "origin": "99.242.139.220",\n  "url": "http://httpbin.org/get"\n}\n\n$ curl http://localhost:8080/keyless-test/get\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Accept-Encoding": "gzip",\n    "Custom-Header": "hello world",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.64.1",\n    "X-Amzn-Trace-Id": "Root=1-6005ef18-3c24aa511227f7384b0213b7"\n  },\n  "origin": "192.168.112.1, 99.242.139.220",\n  "url": "http://httpbin.org/get"\n}\n')),Object(a.b)("p",null,'We can see the only difference between the two responses is the "custom-header" that was added by Tyk, as well as the extra hop in ',Object(a.b)("inlineCode",{parentName:"p"},"origin"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Some of Tyk's built-in capabilities:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Rate Limiting"),Object(a.b)("li",{parentName:"ul"},"Authentication (Auth token, JWT, OAuth, OIDC, mTLS, more!)"),Object(a.b)("li",{parentName:"ul"},"Native Plugins"),Object(a.b)("li",{parentName:"ul"},"Round Robin Load Balancing")))}c.isMDXComponent=!0}}]);