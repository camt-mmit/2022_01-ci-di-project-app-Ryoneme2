(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{6889:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book",function(){return a(2233)}])},2233:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(5893),s=a(196);let n=e=>{let{data:t}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full shadow bg-white px-1 py-2 rounded-full mb-2 grid grid-cols-4 gap-4",children:[(0,r.jsx)("div",{className:"flex justify-center",children:t.isbn}),(0,r.jsx)("div",{className:"flex justify-center",children:t.title}),(0,r.jsx)("div",{className:"flex justify-center",children:t.author}),(0,r.jsx)("div",{className:"flex justify-center",children:t.price})]})})};var c=a(7294);let i=()=>{let e=async e=>{try{let t=window.localStorage.getItem("token"),a=await s.ZP.get(e,{headers:{Authorization:"Bearer ".concat(t||"")}});return a.data}catch(i){if(console.error(i),i instanceof s.d7){var r;let n=(null===(r=i.response)||void 0===r?void 0:r.data.msg)||"error",c=i.code;return{data:[],msg:"cause : ".concat(n,"(").concat(c,")")}}}},[t,a]=(0,c.useState)(),[i,l]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{let t=async()=>{try{l(!0);let t=await e("http://localhost:8082/books");a(t)}catch(r){console.error(r)}finally{l(!1)}};t()},[]),i)?(0,r.jsx)(r.Fragment,{children:"Loading"}):void 0===t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("p",{children:"no data"})}):void 0===t.data||"cause"===t.msg.split(":")[0].replace(/\s/g,"")?(0,r.jsx)("small",{className:"text-red-500 text-center",children:t.msg}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full max-w-[35rem]",children:[(0,r.jsx)(n,{data:{isbn:"isbn",title:"title",author:"author",price:"price"}},"header"),t.data.map(e=>(0,r.jsx)(n,{data:e},e.isbn))]})})};var l=i}},function(e){e.O(0,[196,774,888,179],function(){return e(e.s=6889)}),_N_E=e.O()}]);