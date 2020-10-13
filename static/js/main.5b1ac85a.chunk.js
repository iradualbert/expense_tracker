(this.webpackJsonpexpense_tracker=this.webpackJsonpexpense_tracker||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),n(2)),o=n(7),s=n(3),i={transactions:[]},m=Object(a.createContext)(i),E=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[].concat(Object(o.a)(e.transactions),[t.payload])});default:return e}},d=function(e){var t=e.children,n=Object(a.useReducer)(E,i),c=Object(u.a)(n,2),l=c[0],o=c[1];return r.a.createElement(m.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:e})}}},t)},f=function(){var e=Object(a.useContext)(m).transactions.reduce((function(e,t){return t.amount+e}),0),t=e<0?"-":"+";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,t,"$",Math.abs(e).toFixed(2)))},p=function(){var e=Object(a.useContext)(m).transactions,t=e.filter((function(e){return e.amount>0})).reduce((function(e,t){return e+t.amount}),0),n=e.filter((function(e){return e.amount<0})).reduce((function(e,t){return e+t.amount}),0);return r.a.createElement("div",{className:"income-expenses-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+$",t.toFixed(2))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expenses"),r.a.createElement("p",{className:"money minus"},"-$",Math.abs(n).toFixed(2))))},b=function(e){var t=e.transaction,n=t.text,c=t.amount,l=t.id,u=Object(a.useContext)(m).deleteTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:c>=0?"plus":"minus"},n," ",r.a.createElement("span",null,c<0?"-":"+","$",Math.abs(c)),r.a.createElement("button",{className:"delete-btn",onClick:function(e){e.preventDefault(),u(l)}},"X")))},v=function(){var e=Object(a.useContext)(m).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),e.length?r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e){return r.a.createElement(b,{key:e.id,transaction:e})}))):r.a.createElement("p",null,"No Transaction Yet"))};var h=function(){var e=Object(a.useContext)(m).addTransaction,t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(0),s=Object(u.a)(o,2),i=s[0],E=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add New Transaction"),r.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),c&&i?(e({id:"".concat(new Date,"-").concat(Math.random()),text:c,amount:parseFloat(i)}),l(""),void E(0)):void alert("Text and Amount are all required!")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",placeholder:"Enter name of the transaction",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount"),r.a.createElement("input",{type:"number",placeholder:"Enter amount",value:i,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{className:"btn",type:"submit"},"Add Transaction")))},O=function(){return r.a.createElement(d,null,r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement(h,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5b1ac85a.chunk.js.map