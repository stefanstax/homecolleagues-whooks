(this.webpackJsonprobofriends_app=this.webpackJsonprobofriends_app||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(4),r=n.n(c),o=(n(13),n(3)),a=n(0),i=function(e){return Object(a.jsxs)("div",{className:"text-xl text-white font-thin mx-3 my-3 p-3 rounded-md shadow-lg w-full md:w-2/6 lg:w-2/6 xl:w-1/6 text-center",style:{backgroundColor:"#004AAD"},children:[Object(a.jsx)("img",{className:"my-3 mx-auto rounded-full",style:{width:"70%"},src:"https://robohash.org/".concat(e.username,"?set=set5"),alt:"robots"}),Object(a.jsx)("h2",{className:"font-semibold text-black my-2 rounded-md",style:{backgroundColor:"#F5BD02"},children:e.name}),Object(a.jsxs)("p",{children:["Known By: ",e.username]}),Object(a.jsxs)("p",{children:["Email: ",e.email]}),Object(a.jsxs)("p",{children:["City: ",e.city]}),Object(a.jsxs)("p",{children:["Website: ",e.website]}),Object(a.jsxs)("p",{children:["Company: ",e.company]})]})},l=function(e){var t=e.robots.map((function(e){return Object(a.jsx)(i,{name:e.name,username:e.username,email:e.email,city:e.address.city,company:e.company.name,website:e.website},e.id)}));return Object(a.jsx)("div",{className:"flex flex-wrap justify-center align-center",children:t})},h=function(e){var t=e.searchChange;return Object(a.jsx)("input",{className:"w-11/12 md:w-6/12 lg:w-4/12 xl:w-2/12 m-auto mb-5 p-5 rounded-md",style:{backgroundColor:"#F5BD02",color:"rgb(0, 74, 173)"},onChange:t,type:"search",placeholder:"Search for a colleague..."})},d=function(e){return Object(a.jsx)("div",{className:"mv5",style:{overflowY:"scroll",height:"500px"},children:e.children})},u=n(5),m=n(6),b=n(8),f=n(7),j=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={hasError:!1},s}return Object(m.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.error?Object(a.jsx)("p",{children:"There has been a problem with resources. We're working on the solution, if it's not a problem please do alarm me either by sending an email or by posting an issue. Sorry for the incovenience."}):this.props.children}}]),n}(s.Component),x=(n(15),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),u=i[0],m=i[1],b=n.length?n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})):null;return Object(s.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){c(e)}))}),[u]),n.length?Object(a.jsxs)("div",{className:"flex flex-col bg-indigo-900 h-screen",children:[Object(a.jsx)("h1",{className:"text-4xl text-thin m-auto text-white ",children:"Office Friends"}),Object(a.jsx)(h,{searchChange:function(e){m(e.target.value)}}),Object(a.jsx)(d,{children:Object(a.jsx)(j,{children:Object(a.jsx)(l,{robots:b})})}),Object(a.jsxs)("h4",{className:"m-auto flex sm:flex-col md:flex-col lg:flex-row justify-center items-center font-medium p-3 rounded-md text-white shadow-2xl",style:{backgroundColor:"rgb(0, 74, 173)"},children:["Built by: Stefan Stax ",Object(a.jsx)("a",{href:"https://github.com/stefanstax/officefriends-whooks/",children:Object(a.jsx)("img",{className:"rounded-full mx-3",src:"https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff"})})]})]}):Object(a.jsxs)("div",{className:"h-screen flex justify-center items-center text-5xl text-indigo-300 bg-indigo-900",children:[Object(a.jsx)("h1",{className:"animate-pulse",children:"Loading ..."})," "]})}),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};r.a.render(Object(a.jsx)(x,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.36850dee.chunk.js.map