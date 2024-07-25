/* eslint-disable */
var e,t,a,r={755:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(540),n=a(338);const l=(e="en")=>{const[t]=(0,r.useState)(window?.i18n||{});return{t:e=>t[e]||e}},o=({label:e,name:t,placeholder:a=null,handler:n,required:l=!0})=>r.createElement("fieldset",null,r.createElement("label",null,r.createElement("span",{className:"label"},e),r.createElement("input",{type:"text",name:t,placeholder:a,onChange:n,required:l}))),m=({label:e,name:t,handler:a})=>r.createElement("label",null,r.createElement("input",{type:"checkbox",name:t,onChange:a}),r.createElement("span",{className:"label"},e)),c=({label:e,name:t,handler:a})=>r.createElement("label",null,r.createElement("input",{type:"radio",name:t,onChange:a}),r.createElement("span",{className:"label"},e)),u=(0,r.lazy)((()=>a.e("TextAreaChunk").then(a.bind(a,389)))),i=()=>{const[e,t]=(0,r.useState)({firstName:"",lastName:""}),[a,n]=(0,r.useState)([]),{t:i}=l();(0,r.useEffect)((()=>{(async(e,t={})=>{try{const a=await fetch(e,t);return await a.json()}catch(e){return{error:e}}})("/form.json").then((e=>{const t=Object.groupBy(e.data,(({Name:e})=>e)),a=Object.values(t);a.length&&n(a)}))}),[]);const s=e=>{const{name:a,value:r}=e.target;t((e=>({...e,[a]:r})))};return r.createElement("form",{onSubmit:e=>{e.preventDefault(),t({firstName:"",lastName:""})}},a.length>0&&a.map((e=>1===e.length?e.map((e=>r.createElement(r.Fragment,null,"text"===e.Type&&r.createElement(o,{label:i(e.Label),name:e.Name,placeholder:e.Placeholder,handler:s}),"textarea"===e.Type&&r.createElement(r.Suspense,{fallback:r.createElement("p",null,"Loading...")},r.createElement(u,{label:i(e.Label),name:e.Name,placeholder:e.Placeholder,handler:s}))))):r.createElement(r.Fragment,null,r.createElement("fieldset",null,r.createElement("legend",null,e[0].Label),"select"!==e[0].Name&&e.map((e=>r.createElement(r.Fragment,null,"check"===e.Type&&r.createElement(m,{label:i(e.Label),name:e.Name,handler:s}),"radio"===e.Type&&r.createElement(c,{label:i(e.Label),name:e.Name,handler:s})))),"select"===e[0].Type&&r.createElement("select",null,e.map(((e,t)=>r.createElement(r.Fragment,{key:e.Label+e.Name},0!==t&&r.createElement("option",{value:e.Name},e.Label))))))))),r.createElement("br",null),r.createElement("button",{type:"submit"},i("Submit")))};function s(e){(0,n.H)(e.children[1]).render(r.createElement(i,null))}}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,l),a.exports}l.m=r,e=[],l.O=(t,a,r,n)=>{if(!a){var o=1/0;for(i=0;i<e.length;i++){for(var[a,r,n]=e[i],m=!0,c=0;c<a.length;c++)(!1&n||o>=n)&&Object.keys(l.O).every((e=>l.O[e](a[c])))?a.splice(c--,1):(m=!1,n<o&&(o=n));if(m){e.splice(i--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[a,r,n]},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,a)=>(l.f[a](e,t),t)),[])),l.u=e=>"./chunks/"+e+".js",l.miniCssF=e=>"./chunks/"+e+".css",l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},a="@adobe/aem-boilerplate:",l.l=(e,r,n,o)=>{if(t[e])t[e].push(r);else{var m,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var s=u[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==a+n){m=s;break}}m||(c=!0,(m=document.createElement("script")).type="module",m.charset="utf-8",m.timeout=120,l.nc&&m.setAttribute("nonce",l.nc),m.setAttribute("data-webpack",a+n),m.src=e),t[e]=[r];var d=(a,r)=>{m.onerror=m.onload=null,clearTimeout(p);var n=t[e];if(delete t[e],m.parentNode&&m.parentNode.removeChild(m),n&&n.forEach((e=>e(r))),a)return a(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:m}),12e4);m.onerror=d.bind(null,m.onerror),m.onload=d.bind(null,m.onload),c&&document.head.appendChild(m)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="./scripts/",(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,a)=>{var r=l.miniCssF(e),n=l.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(o=a[r]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){var o;if((n=(o=l[r]).getAttribute("data-href"))===e||n===t)return o}})(r,n))return t();((e,t,a,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",l.nc&&(o.nonce=l.nc),o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var l=a&&a.type,m=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+": "+m+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=l,c.request=m,o.parentNode&&o.parentNode.removeChild(o),n(c)}},o.href=t,a?a.parentNode.insertBefore(o,a.nextSibling):document.head.appendChild(o)})(e,n,null,t,a)})),t={"demo-form-excel":0};l.f.miniCss=(a,r)=>{t[a]?r.push(t[a]):0!==t[a]&&{TextAreaChunk:1}[a]&&r.push(t[a]=e(a).then((()=>{t[a]=0}),(e=>{throw delete t[a],e})))}}})(),(()=>{var e={"demo-form-excel":0};l.f.j=(t,a)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=l.p+l.u(t),m=new Error;l.l(o,(a=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",m.name="ChunkLoadError",m.type=n,m.request=o,r[1](m)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[o,m,c]=a,u=0;if(o.some((t=>0!==e[t]))){for(r in m)l.o(m,r)&&(l.m[r]=m[r]);if(c)var i=c(l)}for(t&&t(a);u<o.length;u++)n=o[u],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(i)},a=self.webpackChunk_adobe_aem_boilerplate=self.webpackChunk_adobe_aem_boilerplate||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=l.O(void 0,["vendor"],(()=>l(755))),m=(o=l.O(o)).A;export{m as default};