(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1212:e=>{"use strict";e.exports=require("async_hooks")},4770:e=>{"use strict";e.exports=require("crypto")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},4492:e=>{"use strict";e.exports=require("node:stream")},8433:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(4380),s(9877),s(6560);var t=s(3191),a=s(8716),i=s(7922),l=s.n(i),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(r,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4380)),"/Users/matthewbarr/Downloads/trials-tribulations-main/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,9877)),"/Users/matthewbarr/Downloads/trials-tribulations-main/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,6560)),"/Users/matthewbarr/Downloads/trials-tribulations-main/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/matthewbarr/Downloads/trials-tribulations-main/app/page.tsx"],m="/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7281:(e,r,s)=>{let t={"51a902f4027f5ddc46eba7eb0478a2140fc16abb":()=>Promise.resolve().then(s.bind(s,5198)).then(e=>e.sendEmail),e760a656992e6b620c512c3cd078605b60706f4c:()=>Promise.resolve().then(s.bind(s,5198)).then(e=>e.subscribe)};async function a(e,...r){return(await t[e]()).apply(null,r)}e.exports={"51a902f4027f5ddc46eba7eb0478a2140fc16abb":a.bind(null,"51a902f4027f5ddc46eba7eb0478a2140fc16abb"),e760a656992e6b620c512c3cd078605b60706f4c:a.bind(null,"e760a656992e6b620c512c3cd078605b60706f4c")}},8384:(e,r,s)=>{Promise.resolve().then(s.bind(s,7180)),Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23))},7180:(e,r,s)=>{"use strict";s.d(r,{default:()=>f});var t=s(326),a=s(9404),i=s.n(a),l=s(5999),n=s(4723),o=s(4064),c=s(6109),d=s(772),m=s(7577),u=s(7863);let h=m.forwardRef(({className:e,type:r,...s},a)=>t.jsx("input",{type:r,className:(0,u.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...s}));h.displayName="Input";var x=s(4004);let p=m.forwardRef(({className:e,...r},s)=>t.jsx("div",{ref:s,className:(0,u.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...r}));p.displayName="Card",m.forwardRef(({className:e,...r},s)=>t.jsx("div",{ref:s,className:(0,u.cn)("flex flex-col space-y-1.5 p-6",e),...r})).displayName="CardHeader",m.forwardRef(({className:e,...r},s)=>t.jsx("h3",{ref:s,className:(0,u.cn)("font-semibold leading-none tracking-tight",e),...r})).displayName="CardTitle",m.forwardRef(({className:e,...r},s)=>t.jsx("p",{ref:s,className:(0,u.cn)("text-sm text-muted-foreground",e),...r})).displayName="CardDescription";let b=m.forwardRef(({className:e,...r},s)=>t.jsx("div",{ref:s,className:(0,u.cn)("p-6 pt-0",e),...r}));function f(){let{register:e,handleSubmit:r,reset:s,formState:{errors:a,isSubmitting:m}}=(0,n.cI)({resolver:(0,o.F)(c.T),defaultValues:{email:""}}),u=async e=>{try{let r=await (0,x.L)(e);if(r?.error){l.Am.error("An error occurred! Please try again.");return}l.Am.success("Subscribed successfully!"),s()}catch(e){console.error("Newsletter subscription error:",e),l.Am.error("Failed to subscribe. Please try again.")}};return t.jsx("section",{children:t.jsx(p,{className:"rounded-lg border border-white/10 bg-zinc-900",children:(0,t.jsxs)(b,{className:"flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8",children:[(0,t.jsxs)("div",{children:[t.jsx("h2",{className:"text-2xl font-bold text-white",children:"Subscribe to our newsletter"}),t.jsx("p",{className:"text-gray-400",children:"Get legal insights, tech updates, and exclusive content."})]}),(0,t.jsxs)("form",{onSubmit:r(u),className:"flex flex-col items-start gap-3",children:[(0,t.jsxs)("div",{className:"w-full",children:[t.jsx(h,{type:"email",id:"email",autoComplete:"email",placeholder:"Your email address",className:"w-full bg-black border-white/20 text-white placeholder:text-gray-500",...e("email")}),a.email?.message&&t.jsx("p",{className:"ml-1 mt-2 text-sm text-rose-400",children:a.email.message})]}),t.jsx("div",{className:"w-full",children:t.jsx(d.z,{type:"submit",disabled:m,className:"w-full disabled:opacity-50 bg-white text-black hover:bg-gray-200",children:m?"Subscribing...":"Subscribe"})}),t.jsx("div",{children:(0,t.jsxs)("p",{className:"text-xs text-gray-400",children:["We care about your data. Read our"," ",t.jsx(i(),{href:"/privacy",className:"text-white hover:underline",children:"privacy\xa0policy."})]})})]})]})})})}b.displayName="CardContent",m.forwardRef(({className:e,...r},s)=>t.jsx("div",{ref:s,className:(0,u.cn)("flex items-center p-6 pt-0",e),...r})).displayName="CardFooter"},4004:(e,r,s)=>{"use strict";s.d(r,{C:()=>i,L:()=>a}),s(5424);var t=s(6242),a=(0,t.$)("e760a656992e6b620c512c3cd078605b60706f4c"),i=(0,t.$)("51a902f4027f5ddc46eba7eb0478a2140fc16abb")},6109:(e,r,s)=>{"use strict";s.d(r,{T:()=>a,Z:()=>i});var t=s(7256);let a=t.z.object({email:t.z.string().email("Invalid email.")}),i=t.z.object({name:t.z.string().min(1,{message:"Name is required."}).min(2,{message:"Must be at least 2 characters."}),email:t.z.string().min(1,{message:"Email is required."}).email("Invalid email."),position:t.z.string().min(1,{message:"Please share information about your current position."}),goals:t.z.string().min(1,{message:"Please tell us what kind of support you are looking for."})})},4380:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>c});var t=s(9510),a=s(7371),i=s(7710),l=s(973),n=s(9174);function o({icon:e,title:r,description:s,bullets:a}){return t.jsx("div",{className:"p-8 rounded-lg border border-white/10 bg-black",children:(0,t.jsxs)("div",{className:"flex flex-col h-full",children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4",children:["brain"===e&&(0,t.jsxs)("svg",{className:"w-8 h-8 text-white",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7Z",fill:"currentColor"}),t.jsx("path",{d:"M15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z",fill:"currentColor"}),t.jsx("path",{d:"M9 16.5C9 15.5717 9.36875 14.6815 10.0251 14.0251C10.6815 13.3687 11.5717 13 12.5 13C13.4283 13 14.3185 13.3687 14.9749 14.0251C15.6313 14.6815 16 15.5717 16 16.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"shield"===e&&t.jsx("svg",{className:"w-8 h-8 text-white",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"eye"===e&&(0,t.jsxs)("svg",{className:"w-8 h-8 text-white",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M12 18C16.4183 18 20 12 20 12C20 12 16.4183 6 12 6C7.58172 6 4 12 4 12C4 12 7.58172 18 12 18Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),t.jsx("h3",{className:"text-2xl font-bold mb-2",children:r}),t.jsx("p",{className:"text-gray-400 mb-6",children:s})]}),t.jsx("ul",{className:"space-y-4 mt-auto",children:a.map((e,r)=>(0,t.jsxs)("li",{className:"flex items-start",children:[t.jsx("svg",{className:"w-5 h-5 text-gray-400 mr-2 mt-0.5",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),t.jsx("span",{className:"text-sm text-gray-300",children:e})]},r))})]})})}function c(){return(0,t.jsxs)("div",{className:"min-h-screen bg-black text-white",children:[t.jsx("section",{className:"relative pb-24 pt-40",children:t.jsx("div",{className:"container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[(0,t.jsxs)("div",{children:[t.jsx("h1",{className:"text-5xl sm:text-6xl font-serif font-bold leading-tight",children:"Where Law Meets Tomorrow's Technology"}),t.jsx("p",{className:"mt-6 text-xl text-gray-300 max-w-xl",children:"Helping legal professionals navigate and thrive in an AI-transformed landscape"}),(0,t.jsxs)("div",{className:"mt-10 flex flex-col sm:flex-row gap-4",children:[(0,t.jsxs)(a.default,{href:"/future-insights",className:"inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-black hover:bg-gray-200 transition-colors",children:["Explore Our Insights",t.jsx(l.LZ3,{className:"ml-2 h-5 w-5"})]}),(0,t.jsxs)(a.default,{href:"#newsletter",className:"inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors",children:["Newsletter",t.jsx("span",{className:"ml-2",children:"✉"})]})]}),(0,t.jsxs)("div",{className:"mt-10 flex space-x-4",children:[(0,t.jsxs)("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-black border border-white/20 hover:bg-white/10 transition-colors",children:[t.jsx("span",{className:"sr-only",children:"YouTube"}),t.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"})})]}),(0,t.jsxs)("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-black border border-white/20 hover:bg-white/10 transition-colors",children:[t.jsx("span",{className:"sr-only",children:"Instagram"}),t.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"})})]}),(0,t.jsxs)("a",{href:"https://tiktok.com",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-black border border-white/20 hover:bg-white/10 transition-colors",children:[t.jsx("span",{className:"sr-only",children:"TikTok"}),t.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"})})]})]})]}),t.jsx("div",{className:"relative hidden lg:block",children:t.jsx("div",{className:"w-full h-[500px] relative overflow-hidden rounded-md",children:t.jsx(i.default,{src:"/images/lawyer-suits.jpg",alt:"Professional suits hanging in a closet",fill:!0,className:"object-cover",priority:!0})})})]})})}),t.jsx("section",{className:"py-24 bg-black",children:t.jsx("div",{className:"container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t.jsx(o,{icon:"brain",title:"Strategic Innovation Mastery™",description:"Transform your expertise into unmatched market advantage",bullets:["Master emerging technologies reshaping professional landscapes","Develop unique methodologies that create competitive immunity","Position yourself at high-value intersection points others overlook","Access exclusive insights on innovation patterns before they become obvious"]}),t.jsx(o,{icon:"shield",title:"Future-Proof Career Architecture™",description:"Build a resilient career that thrives in disruption",bullets:["Design career paths immune to market and technological disruption","Develop essential skills & capabilities before they become mandatory","Position yourself as an innovation leader in your field","Create a brand that attracts high-value opportunities"]}),t.jsx(o,{icon:"eye",title:"Strategic Media Intelligence™",description:"Gain unique insights through media and cultural analysis",bullets:["Decode future trends through legal, technology, media, film, and literature analysis","Apply narrative-derived strategies to real-world professional challenges","Connect theoretical concepts with practical applications","Gain perspectives that differentiate you from peers"]})]})})}),t.jsx("section",{id:"newsletter",className:"py-24 bg-black",children:t.jsx("div",{className:"container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t.jsx(n.Z,{})})})]})}},9174:(e,r,s)=>{"use strict";s.d(r,{Z:()=>t});let t=(0,s(8570).createProxy)(String.raw`/Users/matthewbarr/Downloads/trials-tribulations-main/components/newsletter-form.tsx#default`)},5198:(e,r,s)=>{"use strict";s.r(r),s.d(r,{sendEmail:()=>u,subscribe:()=>h});var t=s(7745);s(6461);var a=s(2459),i=s(692);let l=i.z.object({email:i.z.string().email("Invalid email.")}),n=i.z.object({name:i.z.string().min(1,{message:"Name is required."}).min(2,{message:"Must be at least 2 characters."}),email:i.z.string().min(1,{message:"Email is required."}).email("Invalid email."),position:i.z.string().min(1,{message:"Please share information about your current position."}),goals:i.z.string().min(1,{message:"Please tell us what kind of support you are looking for."})});var o=s(5602);let c=({name:e,email:r,position:s,goals:t})=>(0,o.jsxs)("div",{children:[o.jsx("h1",{children:"Collaboration Request"}),(0,o.jsxs)("p",{children:["From ",o.jsx("strong",{children:e})," at ",r]}),o.jsx("h2",{children:"Current Position & Challenges:"}),o.jsx("p",{children:s}),o.jsx("h2",{children:"Goals and Support Needed:"}),o.jsx("p",{children:t})]});var d=s(5723);let m=new a.R(process.env.RESEND_API_KEY);async function u(e){let r=n.safeParse(e);if(r.error)return{error:r.error.format()};try{let{name:e,email:s,position:t,goals:a}=r.data,{data:i,error:l}=await m.emails.send({from:"trialsandtribulationslaw@resend.dev",to:["trialsandtribulationslaw@gmail.com"],cc:["trialsandtribulationslaw@gmail.com"],subject:"New Consultation Request",text:`Name: ${e}
Email: ${s}
Current Position: ${t}
Goals: ${a}`,react:c({name:e,email:s,position:t,goals:a})});if(l)throw console.error("Resend API error:",l),Error("Failed to send email");return{success:!0}}catch(e){return console.error("Email sending error:",e),{error:e}}}async function h(e){let r=l.safeParse(e);if(r.error)return{error:r.error.format()};try{let{email:e}=r.data,s=process.env.RESEND_AUDIENCE_ID;if(!s)return console.error("Missing RESEND_AUDIENCE_ID environment variable"),{error:"Configuration error"};let{error:t}=await m.contacts.create({email:e,audienceId:s});if(t)throw console.error("Error adding to audience:",t),Error("Failed to subscribe");return await m.emails.send({from:"trialsandtribulationslaw@resend.dev",to:["trialsandtribulationslaw@gmail.com"],subject:"New Newsletter Subscription",text:`New subscription from: ${e}`}),{success:!0}}catch(e){return console.error("Subscription error:",e),{error:e}}}(0,d.h)([u,h]),(0,t.j)("51a902f4027f5ddc46eba7eb0478a2140fc16abb",u),(0,t.j)("e760a656992e6b620c512c3cd078605b60706f4c",h)}};var r=require("../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[948,283,624,490,424],()=>s(8433));module.exports=t})();