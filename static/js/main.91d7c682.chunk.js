(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(10),r=c.n(a),s=(c(75),c(37)),i=c.n(s),o=c(48),l=c(14),u=(c(77),c(78),c(39)),j=c(3),d=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(u.b,{to:"/",className:"title",children:"QuizYouUp"}),Object(j.jsx)("hr",{className:"divider"})]})},b=function(){return Object(j.jsx)("div",{style:{textAlign:"center",marginBottom:10},children:"Quiz App \xa9 Prakhar Mishra"})},h=c(9),O=(c(85),c(149)),v=c(145),m=c(147),g=c(148),f=c(150),x=[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}],p=function(e){var t=e.children;return Object(j.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:20,backgroundColor:"red",textAlign:"center",color:"white",textTransform:"capitalize"},children:t})},y=function(e){var t=e.name,c=e.setName,a=e.fetchQuestions,r=e.fetchTimeBoolean,s=Object(n.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],d=Object(n.useState)(""),b=Object(l.a)(d,2),y=b[0],S=b[1],N=Object(n.useState)(!1),k=Object(l.a)(N,2),C=k[0],z=k[1],w=Object(n.useState)(5),Q=Object(l.a)(w,2),q=Q[0],B=Q[1],E=Object(n.useState)(!0),T=Object(l.a)(E,2),A=T[0],M=T[1],F=Object(n.useState)("Quiz is not timed"),G=Object(l.a)(F,2),_=G[0],I=G[1],H=Object(h.f)();return Object(j.jsxs)("div",{className:"content",children:[Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsx)("span",{style:{fontSize:30},children:"Quiz Settings"}),Object(j.jsxs)("div",{className:"settings__select",children:[C&&Object(j.jsx)(p,{children:"Error! Please fill all the fields before submitting."}),Object(j.jsx)(m.a,{style:{marginBottom:25},label:"Enter your name",variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(j.jsx)(m.a,{select:!0,label:"Select number of questions",variant:"outlined",style:{marginBottom:30},onChange:function(e){return B(e.target.value)},value:q,children:[3,4,5,6,7,8,9,10].map((function(e){return Object(j.jsx)(O.a,{value:e,children:e},e)}))}),Object(j.jsx)(m.a,{select:!0,label:"Select Category",variant:"outlined",style:{marginBottom:30},onChange:function(e){return u(e.target.value)},value:o,children:x.map((function(e){return Object(j.jsx)(O.a,{value:e.value,children:e.category},e.category)}))}),Object(j.jsxs)(m.a,{select:!0,label:"Select Difficulty",variant:"outlined",style:{marginBottom:30},onChange:function(e){return S(e.target.value)},value:y,children:[Object(j.jsx)(O.a,{value:"easy",children:"Easy"},"Easy"),Object(j.jsx)(O.a,{value:"medium",children:"Medium"},"Medium"),Object(j.jsx)(O.a,{value:"hard",children:"Hard"},"Hard")]}),Object(j.jsx)(f.a,{control:Object(j.jsx)(g.a,{checked:A.checkedA,onChange:function(){M(!A),I(A?"30 seconds for each question":"Quiz is not timed")},name:"checkedA"}),label:_}),Object(j.jsx)(v.a,{variant:"contained",style:{backgroundColor:"#03298C",color:"white"},size:"large",onClick:function(){o&&y&&t?(z(!1),a(q,o,y),r(A),H.push("/quiz")):z(!0)},children:"Start Quiz"})]})]}),Object(j.jsx)("img",{src:"/quiz.png",className:"banner",alt:"Banner"})]})},S=c(64),N=c(146),k=(c(86),c(87),function(e){var t=e.currentQues,c=e.setCurrentQues,a=e.questions,r=e.options,s=e.correct,i=e.setScore,o=e.score,u=e.time,d=e.setTime,b=Object(n.useState)(),O=Object(l.a)(b,2),m=O[0],g=O[1],f=Object(n.useState)(!1),x=Object(l.a)(f,2),y=x[0],S=(x[1],Object(h.f)()),N=function(e){return m===e&&m===s?"select":m===e&&m!==s?"wrong":e===s?"select":void 0};Object(n.useEffect)((function(){0===u&&u&&k()}));var k=function(){t>a.length-2?(S.push("/result"),d(30)):(c(t+1),g(),d(30))};return Object(j.jsxs)("div",{className:"question",children:[Object(j.jsxs)("h1",{children:["Question: ",t+1]}),Object(j.jsxs)("div",{className:"singleQuestion",children:[Object(j.jsx)("h2",{children:a[t].question}),Object(j.jsxs)("div",{className:"options",children:[y&&Object(j.jsx)(p,{children:"Error. Please Select an Option."}),r&&r.map((function(e){return Object(j.jsx)("button",{onClick:function(){return function(e){g(e),e===s&&i(o+1)}(e)},className:"singleOption ".concat(m&&N(e)),disabled:m,children:e},e)}))]}),Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsx)(v.a,{variant:"contained",color:"secondary",href:"/",onClick:function(){j.Fragment},children:"Quit"}),Object(j.jsx)(v.a,{variant:"contained",style:{backgroundColor:"blueviolet",color:"white"},onClick:k,children:"Next Question"})]})]})]})}),C=function(e){var t,c=e.name,a=e.score,r=e.questions,s=e.setScore,i=e.isTimed,o=Object(n.useState)(),u=Object(l.a)(o,2),d=u[0],b=u[1],h=Object(n.useState)(0),O=Object(l.a)(h,2),v=O[0],m=O[1],g=Object(n.useState)(30),f=Object(l.a)(g,2),x=f[0],p=f[1];Object(n.useEffect)((function(){var e,t;b(r&&y([null===(e=r[v])||void 0===e?void 0:e.correct_answer].concat(Object(S.a)(null===(t=r[v])||void 0===t?void 0:t.incorrect_answers))))}),[r,v]);var y=function(e){return e.sort((function(){return Math.random()-.5}))};Object(n.useEffect)((function(){var e=setInterval((function(){p(x-1)}),1e3);return function(){clearInterval(e)}}));return Object(j.jsxs)("div",{className:"quiz",children:[Object(j.jsxs)("span",{className:"subtitle",children:["Welcome, ",c]}),r?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"quizInfo",children:[Object(j.jsx)("span",{children:r[v].category}),i?Object(j.jsx)(j.Fragment,{}):Object(j.jsx)("span",{children:x})]}),Object(j.jsx)(k,{currentQues:v,setCurrentQues:m,questions:r,options:d,correct:null===(t=r[v])||void 0===t?void 0:t.correct_answer,score:a,setScore:s,time:x,setTime:p})]}):Object(j.jsx)(N.a,{style:{margin:100},color:"inherit",size:150,thickness:1})]})},z=(c(88),function(e){var t=e.name,c=e.score,a=Object(h.f)();return Object(n.useEffect)((function(){if(!t)return function(){a.push("/")}}),[t,a]),Object(j.jsxs)("div",{className:"result",children:[Object(j.jsxs)("span",{className:"score_message",children:["Final Score: ",c]}),Object(j.jsx)(v.a,{variant:"contained",size:"large",style:{alignSelf:"center",marginTop:20,backgroundColor:"blueviolet",color:"white"},href:"/",children:"Go back to Home."})]})}),w=c(63),Q=c.n(w);var q=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(),s=Object(l.a)(r,2),O=s[0],v=s[1],m=Object(n.useState)(0),g=Object(l.a)(m,2),f=g[0],x=g[1],p=Object(n.useState)(!0),S=Object(l.a)(p,2),N=S[0],k=S[1],w=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c,n,a,r,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:5,c=s.length>1&&void 0!==s[1]?s[1]:"",n=s.length>2&&void 0!==s[2]?s[2]:"",e.next=5,Q.a.get("https://opentdb.com/api.php?amount=".concat(t).concat(c&&"&category=".concat(c)).concat(n&&"&difficulty=".concat(n),"&type=multiple"));case 5:a=e.sent,r=a.data,v(r.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(u.a,{children:[Object(j.jsxs)("div",{className:"App",style:{backgroundImage:"url(./background.png)"},children:[Object(j.jsx)(d,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/",exact:!0,children:Object(j.jsx)(y,{name:c,setName:a,fetchQuestions:w,fetchTimeBoolean:q})}),Object(j.jsx)(h.a,{path:"/quiz",exact:!0,children:Object(j.jsx)(C,{name:c,questions:O,score:f,setScore:x,isTimed:N})}),Object(j.jsx)(h.a,{path:"/result",exact:!0,children:Object(j.jsx)(z,{name:c,score:f})})]})]}),Object(j.jsx)(b,{})]})};r.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))},75:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.91d7c682.chunk.js.map