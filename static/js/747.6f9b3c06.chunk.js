"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[747],{1345:function(n,t,e){e.d(t,{_:function(){return o}});var r,u=e(168),o=e(6088).Z.label(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.space.l}))},550:function(n,t,e){e.d(t,{K:function(){return i},p:function(){return s}});var r,u,o=e(168),c=e(6088),a=e(8617),i=c.Z.button(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n  margin-top: ",";\n  font-size: ",";\n  border: none;\n  border-radius: ",";\n  background-color: #d6e0ecd0;\n  box-shadow: 5px 5px 10px 0px rgba(149, 167, 173, 1);\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space.ml}),(function(n){return n.theme.space.l}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.accentColor})),s=(0,c.Z)(a.J6z)(u||(u=(0,o.Z)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n"])))},606:function(n,t,e){e.d(t,{y:function(){return l},au:function(){return s},II:function(){return f}});var r,u,o,c=e(168),a=e(6088),i=e(5705),s=(0,a.Z)(i.l0)(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  margin-bottom: 30px;\n  padding-top: 10px;\n"]))),f=(0,a.Z)(i.gN)(u||(u=(0,c.Z)(["\n  padding: ",";\n  border-radius: ",";\n  height: 30px;\n  width: 400px;\n  color: ",";\n  font-family: inherit;\n  font-weight: ",";\n  font-size: ",";\n  border: none;\n  box-shadow: 5px 5px 10px 0px rgba(149, 167, 173, 1);\n  &:hover,\n  &:focus {\n    outline: none;\n    border: 2px solid ",";\n  }\n"])),(function(n){return n.theme.space.m}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.accentColor})),l=a.Z.p(o||(o=(0,c.Z)(["\n  color: red;\n  font-size: ",";\n"])),(function(n){return n.theme.fontSizes.m}))},747:function(n,t,e){e.r(t),e.d(t,{default:function(){return X}});var r=e(6804),u=e(9434),o=e(4942),c=e(2982),a=e(1413),i=e(5861),s=e(4687),f=e.n(s),l=e(6382),p=e(8174),m=e(4569),d=e.n(m);d().defaults.baseURL="https://connections-api.herokuapp.com";var h,x,v,b,g,w=function(){var n=(0,i.Z)(f().mark((function n(){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d().get("/contacts").then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=(0,i.Z)(f().mark((function n(t){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d().post("/contacts",t).then((function(n){return n.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,i.Z)(f().mark((function n(t){return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d().delete("/contacts/".concat(t)).then((function(){return t}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),j=function(){var n=(0,i.Z)(f().mark((function n(t){var e,r,u;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.id,r=t.name,u=t.number,n.next=3,d().patch("/contacts/".concat(e),{name:r,number:u}).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),C=(0,l.hg)("contacts/fetchContacts",function(){var n=(0,i.Z)(f().mark((function n(t,e){var r,u;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.rejectWithValue,n.prev=1,n.next=4,w();case 4:return u=n.sent,n.abrupt("return",u);case 8:return n.prev=8,n.t0=n.catch(1),p.Am.error("Oops, something went wrong!"),n.abrupt("return",r(n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t,e){return n.apply(this,arguments)}}()),k=(0,l.hg)("contacts/addItem",function(){var n=(0,i.Z)(f().mark((function n(t,e){var r,u;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.rejectWithValue,n.prev=1,n.next=4,Z(t);case 4:return n.next=6,Z();case 6:return u=n.sent,p.Am.success("Contact added!"),n.abrupt("return",u);case 11:return n.prev=11,n.t0=n.catch(1),p.Am.error("Oops, something went wrong!"),n.abrupt("return",r(n.t0));case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(t,e){return n.apply(this,arguments)}}()),I=(0,l.hg)("contacts/deleteContact",function(){var n=(0,i.Z)(f().mark((function n(t,e){var r,u;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.rejectWithValue,n.prev=1,n.next=4,y(t);case 4:return n.next=6,w();case 6:return u=n.sent,p.Am.success("Contact deleted!"),n.abrupt("return",u);case 11:return n.prev=11,n.t0=n.catch(1),p.Am.error("Contact not found!"),n.abrupt("return",r(n.t0));case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(t,e){return n.apply(this,arguments)}}()),z=(0,l.hg)("contacts/editContact",function(){var n=(0,i.Z)(f().mark((function n(t,e){var r,u;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.rejectWithValue,n.prev=1,n.next=4,j(t);case 4:return n.next=6,w();case 6:return u=n.sent,p.Am.success("Contact edited!"),n.abrupt("return",u);case 11:return n.prev=11,n.t0=n.catch(1),p.Am.error("Contact not found!"),n.abrupt("return",r(n.t0));case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(t,e){return n.apply(this,arguments)}}()),A=(0,l.oM)({name:"contacts",initialState:{items:[],filter:""},reducers:{filterItems:function(n,t){return(0,a.Z)((0,a.Z)({},n),{},{filter:t.payload})}},extraReducers:(h={},(0,o.Z)(h,C.fulfilled,(function(n,t){n.items=(0,c.Z)(t.payload)})),(0,o.Z)(h,k.fulfilled,(function(n,t){n.items=(0,c.Z)(t.payload)})),(0,o.Z)(h,I.fulfilled,(function(n,t){n.items=(0,c.Z)(t.payload)})),(0,o.Z)(h,z.fulfilled,(function(n,t){n.items=(0,c.Z)(t.payload)})),h)}),S=A.actions.filterItems,_=function(n){return n.contacts.items},W=function(n){return n.contacts.filter},V=(A.reducer,e(1345)),L=e(168),R=e(6088),N=R.Z.input(x||(x=(0,L.Z)(["\n  margin-bottom: ",";\n  padding: ",";\n  border-radius: ",";\n  height: 30px;\n  width: 400px;\n  color: ",";\n  font-family: inherit;\n  font-weight: ",";\n  font-size: ",";\n  border: none;\n  box-shadow: 5px 5px 10px 0px rgba(149, 167, 173, 1);\n  &:hover,\n  &:focus {\n    outline: none;\n    border: 2px solid ",";\n  }\n"])),(function(n){return n.theme.space.l}),(function(n){return n.theme.space.m}),(function(n){return n.theme.radii.small}),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.accentColor})),U=e(3329),q=function(){var n=(0,u.I0)(),t=(0,u.v9)(W);return(0,U.jsxs)(V._,{children:["Find contacts by name",(0,U.jsx)(N,{type:"text",name:"name",onChange:function(t){return n(S(t.currentTarget.value))},value:t})]})},F=e(2791),J=R.Z.ul(v||(v=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),K=R.Z.li(b||(b=(0,L.Z)(["\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.space.m}),(function(n){return n.theme.space.ml})),O=R.Z.p(g||(g=(0,L.Z)(["\n  margin: 0 ",";\n"])),(function(n){return n.theme.space.l})),B=e(5106),D=function(){var n=(0,u.I0)(),t=(0,u.v9)(_),e=(0,u.v9)(W).toLowerCase(),r=t.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,F.useEffect)((function(){n(C())}),[n]),(0,U.jsx)(J,{children:r.map((function(t){var e=t.id,r=t.name,u=t.number;return(0,U.jsxs)(K,{children:[r,": ",(0,U.jsx)(O,{children:u}),(0,U.jsxs)(B.k,{type:"button",onClick:function(){n(I(e))},children:[(0,U.jsx)(B.l,{}),"Delate"]})]},e)}))})},E=e(3284),M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},T=e(5705),$=e(550),G=e(606),H=E.Ry().shape({name:E.Z_().required(),number:E.Rx().required().test({test:function(n){return/^[\d+][\d()-]{4,14}\d$/i.test(n)}})}),P=function(n){var t=n.name;return(0,U.jsx)(T.Bc,{name:t,render:function(n){return(0,U.jsx)(G.y,{children:n})}})},Q=function(){var n=(0,u.I0)(),t=(0,u.v9)(_);return(0,U.jsx)(T.J9,{initialValues:{name:"",number:""},validationSchema:H,onSubmit:function(e,r){var u=r.resetForm,o={id:M(6),name:e.name,number:e.number};t.find((function(n){return n.name.toLowerCase().includes(o.name.toLowerCase())}))?p.Am.info("".concat(o.name," is already in contact")):(n(k(o)),u())},children:(0,U.jsxs)(G.au,{children:[(0,U.jsxs)(V._,{children:["Name:",(0,U.jsx)(G.II,{type:"text",name:"name"}),(0,U.jsx)(P,{name:"name"})]}),(0,U.jsxs)(V._,{children:["Number:",(0,U.jsx)(G.II,{type:"tel",name:"number"}),(0,U.jsx)(P,{name:"number"})]}),(0,U.jsxs)($.K,{type:"submit",children:[(0,U.jsx)($.p,{}),"Add contact"]})]})})},X=function(){return(0,U.jsxs)(r.x,{display:"flex","align-items":"center","flex-direction":"column",children:[(0,U.jsx)(Q,{}),(0,U.jsxs)("div",{children:[(0,U.jsx)(q,{}),(0,U.jsx)(D,{})]})]})}}}]);
//# sourceMappingURL=747.6f9b3c06.chunk.js.map