"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[248],{8248:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(885),a=t(2791),i=t(5984),o=t(9434),u=function(e){return e.contacts.items},c=t(4176),s=t(7205),l=t(1647),d=t(1508),f=t(277),x=t(6015),m=t(4944),h="ContactForm_snackbar__ET4hJ",p=t(184);function v(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],f=n[1],x=(0,a.useState)(""),m=(0,r.Z)(x,2),v=m[0],b=m[1],g=(0,a.useState)(""),C=(0,r.Z)(g,2),k=C[0],w=C[1],P=(0,a.useState)(!1),S=(0,r.Z)(P,2),_=S[0],z=S[1],D=(0,a.useState)(!1),I=(0,r.Z)(D,2),q=I[0],L=I[1],N=(0,o.v9)(u),B=(0,o.I0)(),T=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":f(r),w(r);break;case"number":b(r);break;default:return}},A=function(){f(""),b("")};return(0,p.jsxs)(Z,{component:"form",onSubmit:function(e){e.preventDefault();var n={id:(0,i.x0)(),name:t,number:v};if(function(e){var n=e.toLowerCase();return N.find((function(e){return n===e.name.toLowerCase()}))}(t))return z(!0),void A();B((0,c.uK)(n)),L(!0),A()},autoComplete:"on",children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(y,{id:"outlined-required",label:"Name",type:"text",name:"name",value:t,onChange:T,size:"small",required:!0}),(0,p.jsx)(y,{id:"outlined-required",label:"Number",type:"tel",name:"number",value:v,onChange:T,size:"small",required:!0})]}),(0,p.jsx)(s.Z,{type:"submit",variant:"contained",color:"warning",children:"Add Contact"}),(0,p.jsx)(l.Z,{className:h,open:_,autoHideDuration:3e3,onClose:function(){return z(!1)},anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,p.jsxs)(d.Z,{severity:"error",children:[k," is already in your phonebook."]})}),(0,p.jsx)(l.Z,{className:h,open:q,autoHideDuration:3e3,onClose:function(){return L(!1)},anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,p.jsxs)(d.Z,{severity:"success",children:[k," successfuly added to your phonebook!."]})})]})}var Z=(0,f.ZP)(x.Z)({display:"flex",flexDirection:"column",alignItems:"center",padding:"25px 0"}),j=(0,f.ZP)(x.Z)({display:"flex",flexDirection:"column"}),y=(0,f.ZP)(m.Z)({marginBottom:"25px"}),b=t(7895),g=function(){var e=(0,o.v9)((function(e){return e.filter})),n=(0,o.I0)();return(0,p.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"10px 0",marginBottom:"25px",backgroundColor:"#f5f5f5"},children:(0,p.jsx)(C,{id:"outlined",label:"Search",type:"text",name:"name",value:e,onChange:function(e){var t=e.target,r=(0,b.x)(t.value);n(r)},size:"small"})})},C=(0,f.ZP)(m.Z)({backgroundColor:"#fff"}),k=t(1048),w=t(3811),P=t(2087),S=t(6650),_=t(5397),z=function(e){var n=e.contact,t=(0,o.I0)();return(0,p.jsx)(D,{children:(0,p.jsxs)(I,{elevation:3,children:[(0,p.jsx)(k.Z,{primary:n.name,secondary:n.number}),(0,p.jsx)(w.Z,{edge:"end","aria-label":"delete",onClick:function(){return e=n.id,void t((0,c.zY)(e));var e},children:(0,p.jsx)(_.Z,{sx:{color:"#ef5350"}})})]})})},D=(0,f.ZP)(P.ZP)({width:"100%",maxWidth:"380px"}),I=(0,f.ZP)(S.Z)({display:"flex",padding:"10px 25px",width:"100%",backgroundColor:"#f5f5f5"}),q=function(){var e=(0,o.v9)((function(e){return e.contacts.items})),n=(0,o.v9)((function(e){return e.filter})),t=(0,o.I0)();(0,a.useEffect)((function(){t((0,c.yF)())}),[t]);var r=function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,p.jsx)("ul",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:r.map((function(e){return(0,p.jsx)(z,{contact:e},e.id)}))})},L=t(4565),N=function(){return(0,p.jsxs)(x.Z,{sx:{paddingTop:{xs:"88px",sm:"96px"},width:"100%",textAlign:"center"},children:[(0,p.jsx)(L.Z,{variant:"h5",children:"My PhoneBook"}),(0,p.jsx)(v,{}),(0,p.jsx)(g,{}),(0,p.jsx)(q,{})]})}}}]);
//# sourceMappingURL=248.eedddc56.chunk.js.map