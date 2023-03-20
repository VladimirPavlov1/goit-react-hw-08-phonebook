"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[952],{3952:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,i,o,a,s,u,c,l,d,x,m,h,p,f=t(168),b=t(7402),j=t(5705),Z=b.Z.div(r||(r=(0,f.Z)(["\n  width: 400px;\n  height: 350px;\n  padding: 10px;\n \n\n  border: 1px solid black;\n"]))),g=b.Z.label(i||(i=(0,f.Z)(["\n  display: block;\n  padding-bottom: 20px;\n\n  font-size: 22px;\n  font-weight: 500;\n"]))),v=(0,b.Z)(j.gN)(o||(o=(0,f.Z)(["\n  display: block;\n  width: 170px;\n  height: 30px;\n  box-shadow: 5px 5px 5px 0;\n  margin: 10px 0;\n\n  font-size: 18px;\n"]))),w=b.Z.button(a||(a=(0,f.Z)(["\n  display: block;\n  padding: 4px;\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: 700;\n  :hover {\n    background-color: blue;\n  }\n"]))),y=b.Z.p(s||(s=(0,f.Z)(["\n  color: red;\n"]))),k=t(6727),C=t(9434),_=t(5316),z=t(6916),q=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},I=function(n){return n.contacts.error},L=(0,z.P1)([q,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),R=t(184),N=k.Ry().shape({name:k.Z_().min(3,"Please, enter your full name").max(26,"Your upper limit symbol").required("Required"),number:k.Z_().required("Required").min(6,"Min 6 symbol").max(22,"Max symbol 22")}),P=function(n){var e=n.name;return(0,R.jsx)(j.Bc,{name:e,render:function(n){return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(y,{children:n})})}})},M={name:"",number:""},S=function(){var n=(0,C.I0)(),e=(0,C.v9)(q);return(0,R.jsx)(j.J9,{initialValues:M,onSubmit:function(t,r){var i=t.name,o=t.number,a=r.resetForm;if(e.some((function(n){return n.name.toLowerCase||n.number===o})))return alert("You have this contact");n((0,_.el)({name:i,number:o})),a()},validationSchema:N,children:(0,R.jsx)(Z,{children:(0,R.jsxs)(j.l0,{children:[(0,R.jsxs)(g,{children:["Name",(0,R.jsx)(v,{type:"text",name:"name"}),(0,R.jsx)(P,{name:"name"})]}),(0,R.jsxs)(g,{children:["Number",(0,R.jsx)(v,{type:"tel",name:"number"}),(0,R.jsx)(P,{name:"number"})]}),(0,R.jsx)(w,{type:"submit",children:"Add contact"})]})})})},Y=function(n){var e=n.title,t=n.children;return(0,R.jsxs)("section",{children:[(0,R.jsx)("h1",{children:e}),t]})},A=t(1413),B=b.Z.div(u||(u=(0,f.Z)(["\n  display: flex;\n"]))),E=b.Z.h2(c||(c=(0,f.Z)(["\n  margin: 0 10px;\n"]))),J=b.Z.button(l||(l=(0,f.Z)(["\n  width: 80px;\n"]))),T=function(n){var e=n.name,t=n.id,r=n.number,i=(0,C.I0)();return(0,R.jsxs)(B,{children:[(0,R.jsxs)(E,{children:[e," : ",r]}),(0,R.jsx)(J,{type:"button",onClick:function(){i((0,_._f)(t))},children:"delete"})]})},V=b.Z.li(d||(d=(0,f.Z)(["\n  margin-bottom: 20px;\n  width: auto;\n"]))),D=function(){var n=(0,C.v9)(L);return(0,R.jsxs)("ul",{children:[n.map((function(n){return(0,R.jsx)(V,{children:(0,R.jsx)(T,(0,A.Z)({},n))},n.id)})),!n.length&&(0,R.jsx)("div",{children:"not found"})]})},G=t(2791),H=b.Z.label(x||(x=(0,f.Z)(["\n  display: block;\n\n  margin-bottom: 30px;\n\n  font-size: 22px;\n  font-weight: 500;\n"]))),K=b.Z.input(m||(m=(0,f.Z)(["\n  display: block;\n  width: 170px;\n  height: 30px;\n  font-size: 18px;\n  box-shadow: 5px 5px 5px 0;\n  margin: 10px 0;\n"]))),O=t(5030),Q=function(){var n=(0,C.I0)();return(0,R.jsx)("div",{children:(0,R.jsxs)(H,{children:["Find contact by name",(0,R.jsx)(K,{onChange:function(e){var t=e.target.value;n((0,O.T)(t))},type:"text",name:"filter"})]})})},U=t(6286),W=b.Z.div(h||(h=(0,f.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n"]))),X=b.Z.h2(p||(p=(0,f.Z)(["\n  font-weight: 700;\n  font-size: 1.7em;\n"])));function $(){var n=(0,C.v9)(I),e=(0,C.v9)(F),t=(0,C.I0)();return console.log(e),(0,G.useEffect)((function(){t((0,_.yF)())}),[t]),(0,R.jsxs)(W,{children:[(0,R.jsx)(Y,{title:"Phonebook",children:(0,R.jsx)(S,{})}),(0,R.jsx)(X,{children:"Contacts"}),(0,R.jsx)(Q,{}),e&&!n?(0,R.jsx)(U.Rf,{}):(0,R.jsx)(D,{})]})}}}]);
//# sourceMappingURL=952.6e1f1f20.chunk.js.map