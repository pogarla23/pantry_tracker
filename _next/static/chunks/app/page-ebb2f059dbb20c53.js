(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6647:function(){},9524:function(e,o,t){Promise.resolve().then(t.bind(t,520))},520:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return I}});var r=t(7437),a=t(1326),n=t(6548),i=t(8929),s=t(2265),l=t(5236),d=t(9842);let x=(0,l.ZF)({apiKey:"AIzaSyCyQ8PHiyuogd7Eeg_XEKPk9UByIcbLTnU",authDomain:"pantrytracker-38483.firebaseapp.com",projectId:"pantrytracker-38483",storageBucket:"pantrytracker-38483.appspot.com",messagingSenderId:"242338318925",appId:"1:242338318925:web:e5363cddbc228b63fe6a04"}),p=(0,d.ad)(x);var c=t(1733),h=t(9806),u=t(511),b=t(7138),f=()=>(0,r.jsx)(c.Z,{position:"static",sx:{backgroundColor:"#253A4A",boxShadow:"none",borderBottom:"2px solid #0D1419",alignContent:"center",width:"100%"},children:(0,r.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",fontFamily:"Cormorant, serif"},children:[(0,r.jsx)(a.Z,{sx:{flex:1}}),(0,r.jsx)(u.Z,{variant:"h6",component:"div",sx:{flexGrow:1,textAlign:"center",color:"#E0A840",letterSpacing:"2px"},children:"PANTRY TRACKER"}),(0,r.jsx)(a.Z,{sx:{flex:1,display:"flex",justifyContent:"flex-end"},children:(0,r.jsx)(b.default,{href:"https://github.com/pogarla23/pantry_tracker",passHref:!0,children:(0,r.jsx)(n.Z,{variant:"contained",sx:{bgcolor:"#E0A840",color:"#FFF",borderRadius:"8px","&:hover":{bgcolor:"#D89C39"}},children:"More Info"})})})]})}),g=t(1052),m=t(6950),F=e=>{let{inventory:o,addItem:t}=e,[a,n]=(0,s.useState)(""),i=async(e,r)=>{if(r&&!o.some(e=>e.name===r.trim())){let e=r.trim();e&&(await t(e),n(""))}};return(0,r.jsx)(g.Z,{freeSolo:!0,disableClearable:!0,options:o.map(e=>e.name),value:a,onInputChange:(e,o)=>{n(o)},onChange:i,renderInput:e=>(0,r.jsx)(m.Z,{...e,label:"Search Item",InputProps:{...e.InputProps,type:"search"},sx:{width:"100%",minWidth:200}})})},w=t(9922),j=e=>{let{open:o,handleClose:t,itemName:s,setItem:l,addItem:d}=e;return(0,r.jsx)(w.Z,{open:o,onClose:t,children:(0,r.jsxs)(a.Z,{position:"absolute",top:"50%",left:"50%",width:400,bgcolor:"#FFFFFF",border:"1px solid #E0E0E0",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",p:4,display:"flex",flexDirection:"column",gap:3,sx:{transform:"translate(-50%, -50%)",borderRadius:"12px",outline:"none"},children:[(0,r.jsx)(u.Z,{variant:"h6",sx:{color:"#333333",textAlign:"center",fontWeight:"bold"},children:"Add Item"}),(0,r.jsxs)(i.Z,{width:"100%",direction:"row",spacing:2,children:[(0,r.jsx)(m.Z,{id:"item-name",label:"Name",variant:"outlined",fullWidth:!0,value:s,onChange:e=>l(e.target.value),sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#E0E0E0",borderRadius:"8px"},"&:hover fieldset":{borderColor:"#007AFF"},"&.Mui-focused fieldset":{borderColor:"#007AFF"}},boxShadow:"0px 1px 3px rgba(0, 0, 0, 0.1)"}}),(0,r.jsx)(n.Z,{variant:"contained",sx:{bgcolor:"#007AFF",color:"#FFFFFF",borderRadius:"8px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)","&:hover":{bgcolor:"#005BBB"}},onClick:()=>{""!==s.trim()&&(d(s),l(""),t())},children:"Add"})]})]})})},v=t(335),y=t(7622),C=e=>{let{name:o,quantity:t,addItem:s,removeItem:l,removeIt:d}=e;return(0,r.jsxs)(a.Z,{width:"100%",minHeight:"80px",display:"flex",alignItems:"center",justifyContent:"space-between",bgcolor:"#FFFFFF",padding:2,sx:{borderRadius:"12px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",mb:1,transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"scale(1.02)",boxShadow:"0px 6px 12px rgba(0, 0, 0, 0.2)"}},children:[(0,r.jsx)(u.Z,{variant:"h6",color:"#333333",sx:{flex:1,textAlign:"center",fontFamily:"Poppins, sans-serif",fontWeight:500},children:o.charAt(0).toUpperCase()+o.slice(1)}),(0,r.jsx)(u.Z,{variant:"h6",color:"#333333",sx:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Poppins, sans-serif",fontWeight:500},children:t}),(0,r.jsxs)(i.Z,{direction:"row",spacing:1,children:[(0,r.jsx)(n.Z,{variant:"outlined",sx:{bgcolor:"#c2c2c4",color:"#FFF",borderRadius:"50%",width:36,height:36,minWidth:0,padding:0,fontSize:"1rem",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)","&:hover":{bgcolor:"#a1a1a3"}},onClick:()=>s(o),children:"+"}),(0,r.jsx)(n.Z,{variant:"contained",sx:{bgcolor:"#c2c2c4",color:"#FFF",borderRadius:"50%",width:36,height:36,minWidth:0,padding:0,fontSize:"1rem",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)","&:hover":{bgcolor:"#a1a1a3"}},onClick:()=>l(o),children:"—"}),(0,r.jsx)(v.Z,{sx:{bgcolor:"#c2c2c4",color:"#FFF",borderRadius:"50%",width:36,height:36,minWidth:0,padding:0,fontSize:"1rem",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)","&:hover":{bgcolor:"#a1a1a3"}},onClick:()=>d(o),children:(0,r.jsx)(y.Z,{fontSize:"inherit"})})]})]})},S=t(2197),Z=e=>{let{onLoginSuccess:o}=e,[t,i]=(0,s.useState)(""),[l,d]=(0,s.useState)("");return(0,r.jsx)(S.Z,{component:"main",maxWidth:"xs",children:(0,r.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#f5f5f5",padding:4,borderRadius:"12px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:[(0,r.jsx)(u.Z,{component:"h1",variant:"h5",sx:{marginBottom:3,fontWeight:600},children:"Sign In"}),(0,r.jsxs)("form",{noValidate:!0,onSubmit:e=>{e.preventDefault(),t&&l?o():alert("Please enter both email and password.")},children:[(0,r.jsx)(m.Z,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:t,onChange:e=>i(e.target.value),sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#e0e0e0"},"&:hover fieldset":{borderColor:"#007AFF"},"&.Mui-focused fieldset":{borderColor:"#007AFF"}}}}),(0,r.jsx)(m.Z,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:e=>d(e.target.value),sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#e0e0e0"},"&:hover fieldset":{borderColor:"#007AFF"},"&.Mui-focused fieldset":{borderColor:"#007AFF"}}}}),(0,r.jsx)(n.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",sx:{marginTop:2,padding:1.5,borderRadius:"8px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)","&:hover":{bgcolor:"#005BBB",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.2)"}},children:"Sign In"})]})]})})};function I(){let[e,o]=(0,s.useState)([]),[t,l]=(0,s.useState)(!1),[x,c]=(0,s.useState)(""),[h,u]=(0,s.useState)(!1),b=async()=>{let e=(0,d.IO)((0,d.hJ)(p,"inventory")),t=await (0,d.PL)(e),r=[];t.forEach(e=>{r.push({name:e.id,...e.data()})}),o(r)},g=async e=>{let o=(0,d.JU)((0,d.hJ)(p,"inventory"),e),t=await (0,d.QT)(o);if(t.exists()){let{quantity:e}=t.data();1===e?await (0,d.oe)(o):await (0,d.pl)(o,{quantity:e-1})}await b()},m=async e=>{let o=(0,d.JU)((0,d.hJ)(p,"inventory"),e);(await (0,d.QT)(o)).exists()&&await (0,d.oe)(o),await b()},w=async e=>{let o=(0,d.JU)((0,d.hJ)(p,"inventory"),e),t=await (0,d.QT)(o);if(t.exists()){let{quantity:e}=t.data();await (0,d.pl)(o,{quantity:e+1})}else await (0,d.pl)(o,{quantity:1});await b()};return(0,s.useEffect)(()=>{b()},[]),e.map(e=>({label:e.name})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),h?(0,r.jsxs)(a.Z,{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:7,sx:{backgroundColor:"#F8F9FA",fontFamily:"Poppins, sans-serif"},children:[(0,r.jsx)(j,{open:t,handleClose:()=>l(!1),itemName:x,setItem:c,addItem:w}),(0,r.jsxs)(a.Z,{border:"1px solid #E0E0E0",sx:{borderRadius:"12px",overflow:"hidden",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"},children:[(0,r.jsxs)(a.Z,{width:"800px",height:"100px",bgcolor:"#FFFFFF",display:"flex",alignItems:"center",justifyContent:"space-between",p:2,sx:{borderBottom:"1px solid #E0E0E0",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"},children:[(0,r.jsx)(n.Z,{variant:"contained",sx:{bgcolor:"#E0A840",color:"#FFF",borderRadius:"12px",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.1)",padding:"10px",fontFamily:"Poppins, sans-serif"},onClick:()=>l(!0),children:0===e.length?"Add your first item":"Add item"}),(0,r.jsx)(F,{inventory:e,addItem:w})]}),(0,r.jsx)(i.Z,{width:"800px",height:"300px",spacing:2,overflow:"auto",p:3,children:e.map(e=>{let{name:o,quantity:t}=e;return(0,r.jsx)(C,{name:o,quantity:t,addItem:w,removeItem:g,removeIt:m},o)})})]})]}):(0,r.jsx)(Z,{onLoginSuccess:()=>{u(!0)}})]})}t(9930).config()}},function(e){e.O(0,[218,358,801,971,23,744],function(){return e(e.s=9524)}),_N_E=e.O()}]);