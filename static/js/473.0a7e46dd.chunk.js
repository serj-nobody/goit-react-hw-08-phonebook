"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[473],{1100:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var n=a(7689),i=a(1291),r=a(885),o=a(2791),s=a(9434),d=a(6203),u=a(7205),c=a(277),l=a(6015),m=a(4944),p=a(184),x=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),a=t[0],n=t[1],i=(0,o.useState)(""),c=(0,r.Z)(i,2),l=c[0],m=c[1],x=(0,o.useState)(""),g=(0,r.Z)(x,2),b=g[0],Z=g[1],k=(0,s.I0)(),w=function(e){var t=e.currentTarget,a=t.name,i=t.value;switch(a){case"name":n(i);break;case"email":m(i);break;case"password":Z(i);break;default:return}};return(0,p.jsx)("div",{children:(0,p.jsxs)(f,{component:"form",onSubmit:function(e){e.preventDefault();var t={name:a,email:l,password:b};k((0,d.EL)(t)),n(""),m(""),Z("")},autoComplete:"off",children:[(0,p.jsxs)(h,{children:[(0,p.jsx)(v,{id:"outlined-required",label:"Name",type:"text",name:"name",value:a,onChange:w,size:"small",required:!0}),(0,p.jsx)(v,{id:"outlined",label:"Email",type:"email",name:"email",value:l,onChange:w,size:"small",required:!0}),(0,p.jsx)(v,{id:"outlined-password-input",label:"Password",type:"password",name:"password",value:b,onChange:w,size:"small",required:!0})]}),(0,p.jsx)(u.Z,{type:"submit",variant:"contained",color:"warning",sx:{color:"#fff",marginBottom:"25px"},children:"Register"})]})})},f=(0,c.ZP)(l.Z)({display:"flex",flexDirection:"column",alignItems:"center"}),h=(0,c.ZP)(l.Z)({display:"flex",flexDirection:"column"}),v=(0,c.ZP)(m.Z)({marginBottom:"25px"}),g=a(803),b=a(4565),Z=function(){return(0,i.Z)()?(0,p.jsx)(n.Fg,{to:"/contacts"}):(0,p.jsxs)(g.Z,{sx:{paddingTop:{xs:"88px",sm:"96px"},paddingLeft:"16px",paddingRight:"16px",width:"100%",textAlign:"center"},children:[(0,p.jsx)(b.Z,{variant:"h5",sx:{marginBottom:"25px"},children:"Sign Up Form"}),(0,p.jsx)(x,{})]})}},803:function(e,t,a){a.d(t,{Z:function(){return W}});var n=a(4942),i=a(3366),r=a(7462),o=a(2791),s=a(8182),d=a(7312),u=a(1217),c=a(4419),l=a(7078),m=(0,a(4046).ZP)(),p=a(5080),x=a(184),f=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,p.Z)(),v=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["maxWidth".concat((0,d.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),g=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:h})},b=function(e,t){var a=e.classes,n=e.fixed,i=e.disableGutters,r=e.maxWidth,o={root:["root",r&&"maxWidth".concat((0,d.Z)(String(r))),n&&"fixed",i&&"disableGutters"]};return(0,c.Z)(o,(function(e){return(0,u.Z)(t,e)}),a)};var Z=a(9853),k=a(277),w=a(5513),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,a=void 0===t?v:t,d=e.useThemeProps,u=void 0===d?g:d,c=e.componentName,l=void 0===c?"MuiContainer":c,m=a((function(e){var t=e.theme,a=e.ownerState;return(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,a){var n=a,i=t.breakpoints.values[n];return 0!==i&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(i).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,a=e.ownerState;return(0,r.Z)({},"xs"===a.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&(0,n.Z)({},t.breakpoints.up(a.maxWidth),{maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)}))})),p=o.forwardRef((function(e,t){var a=u(e),n=a.className,o=a.component,d=void 0===o?"div":o,c=a.disableGutters,p=void 0!==c&&c,h=a.fixed,v=void 0!==h&&h,g=a.maxWidth,Z=void 0===g?"lg":g,k=(0,i.Z)(a,f),w=(0,r.Z)({},a,{component:d,disableGutters:p,fixed:v,maxWidth:Z}),S=b(w,l);return(0,x.jsx)(m,(0,r.Z)({as:d,ownerState:w,className:(0,s.Z)(S.root,n),ref:t},k))}));return p}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiContainer"})}}),W=S}}]);
//# sourceMappingURL=473.0a7e46dd.chunk.js.map