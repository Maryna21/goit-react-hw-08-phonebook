(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[6],{131:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(35),s=a(36),i=a(38),o=a(37),r=a(0),c=a(10),h=a(25),b=a(1),u={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},p=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var a=t.target,l=a.name,s=a.value;e.setState(Object(n.a)({},l,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0430 \u043b\u043e\u0433\u0456\u043d\u0430"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,children:[Object(b.jsxs)("label",{style:u.label,children:["\u041f\u043e\u0448\u0442\u0430",Object(b.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("label",{style:u.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(b.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"\u0423\u0432\u0456\u0439\u0442\u0438"})]})]})}}]),a}(r.Component),j={onLogin:h.a.logIn};t.default=Object(c.b)(null,j)(p)}}]);
//# sourceMappingURL=6.3a241b5b.chunk.js.map