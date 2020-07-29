(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{172:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return p})),r.d(e,"default",(function(){return d}));var a=r(1),n=r(9),i=(r(24),r(19),r(20),r(79),r(0),r(196)),l=r(205),c=r(210),o={id:"all-lips",title:"All LIPs"},u={id:"all-lips",title:"All LIPs",description:"const types = Object.values(LIP_TYPE);",source:"@site/all-docs__GENERATED/all-lips.mdx",permalink:"/all-lips",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/all-lips.mdx",sidebar:"allLips"},s=Object.values(l.LIP_TYPE),p=[{value:"Draft",id:"draft",children:[]},{value:"Last Call",id:"last-call",children:[]},{value:"Accepted",id:"accepted",children:[]},{value:"Final",id:"final",children:[]},{value:"Rejected",id:"rejected",children:[]}],f={rightToc:p};function d(t){var e=t.components,r=Object(n.a)(t,["components"]);return Object(i.b)("wrapper",Object(a.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"draft"},"Draft"),Object(i.b)(c.a,{status:l.LIP_STATUS.DRAFT,types:s,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"last-call"},"Last Call"),Object(i.b)(c.a,{status:l.LIP_STATUS.LAST_CALL,types:s,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"accepted"},"Accepted"),Object(i.b)(c.a,{status:l.LIP_STATUS.ACCEPTED,types:s,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"final"},"Final"),Object(i.b)(c.a,{status:l.LIP_STATUS.FINAL,types:s,mdxType:"LIPTable"}),Object(i.b)("h2",{id:"rejected"},"Rejected"),Object(i.b)(c.a,{status:l.LIP_STATUS.REJECTED,types:s,mdxType:"LIPTable"}))}d.isMDXComponent=!0},196:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=n.a.createContext({}),s=function(t){var e=n.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c({},e,{},t)),r},p=function(t){var e=s(t.components);return n.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},d=Object(a.forwardRef)((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return r?n.a.createElement(m,c({ref:e},u,{components:r})):n.a.createElement(m,c({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},197:function(t,e,r){"use strict";var a=r(0),n=r(52);e.a=function(){return Object(a.useContext)(n.a)}},198:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(200);var a=r(197);function n(t){var e=(Object(a.a)().siteConfig||{}).baseUrl,r=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?r+t.slice(1):r+t}},200:function(t,e,r){"use strict";var a=r(12),n=r(25),i=r(201),l="".startsWith;a(a.P+a.F*r(202)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),r=n(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return l?l.call(e,a,r):e.slice(r,r+a.length)===a}})},201:function(t,e,r){var a=r(77),n=r(26);t.exports=function(t,e,r){if(a(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(t))}},202:function(t,e,r){var a=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[a]=!1,!"/./"[t](e)}catch(n){}}return!0}},205:function(t,e){e.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},e.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},207:function(t,e,r){"use strict";var a=r(12),n=r(28),i=r(27),l=r(14),c=[].sort,o=[1,2,3];a(a.P+a.F*(l((function(){o.sort(void 0)}))||!l((function(){o.sort(null)}))||!r(208)(c)),"Array",{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),n(t))}})},208:function(t,e,r){"use strict";var a=r(14);t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},210:function(t,e,r){"use strict";r(24),r(19),r(20),r(79),r(207);var a=r(0),n=r.n(a),i=r(13),l=r.n(i),c=r(197),o=r(198),u=r(211),s=r(205),p=r(133),f=r.n(p),d=function(t){var e=t.author,r=t.num,a=t.title;Object(c.a)().siteConfig.themeConfig;return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("a",{href:Object(o.a)("/lip-"+r)},r)),n.a.createElement("td",null,a),n.a.createElement("td",null,n.a.createElement("a",{href:"https://github.com/"+e,target:"_blank"},e)))},m=function(t){var e=t.status,r=(t.title,function(t,e){return e.reduce((function(e,r){return e.concat(u[r][t])}),[]).sort((function(t,e){return t.lip<e.lip?1:-1}))}(e,t.types));return n.a.createElement("table",{className:f.a.table},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Number"),n.a.createElement("th",{className:f.a.title},"Title"),n.a.createElement("th",null,"Author(s)"))),n.a.createElement("tbody",null,r.map((function(t){var e=t.lip,r=t.author,a=t.title;return n.a.createElement(d,{author:r,key:e,num:e,title:a})}))))};m.propTypes={status:l.a.oneOf(Object.values(s.LIP_STATUS)).isRequired,types:l.a.arrayOf(l.a.oneOf(Object.values(s.LIP_TYPE)))},m.defaultProps={types:Object.values(s.LIP_TYPE)},e.a=m},211:function(t){t.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[{"lip":1,"title":"Off-chain API","author":"Kevin Hurley (@kphfb), Dmitry Pimenov, George Danezis","status":"draft","type":"informational","created":"05/29/2020"},{"lip":2,"title":"Libra Roles and Permissions","author":"Sam Blackshear, Tim Zakian","status":"draft","type":"informational","created":"06/26/2020"},{"lip":3,"title":"Libra Upgrade Management","author":"Zekun Li (@zekun000)","status":"draft","type":"informational","created":"06/09/2020"},{"lip":4,"title":"Transaction Metadata Specification","author":"Kevin Hurley (@kphfb)","status":"draft","type":"informational","created":"06/26/2020"},{"lip":5,"title":"Address formatting","author":"Dmitry Pimenov (@dpim)","status":"draft","type":"informational","created":"07/08/2020"}],"last call":[],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","author":"libra","status":"final","type":"informational","created":"2/26/20"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')}}]);