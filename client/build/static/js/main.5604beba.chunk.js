(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(57)},30:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),c=a(60),i=a(61),u=a(62),s=a(23),m=a(7),h=a(8),d=a(12),f=a(9),E=a(13),b=(a(30),function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e),"\u2717")}),p=function(e){var t=e.children;return o.a.createElement("div",{style:{height:300,clear:"both"},className:"jumbotron"},t)},k=a(6),v=a.n(k),g={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)}},B=a(59),y=function(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},j=function(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},N=function(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},w=(a(50),function(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}),O=function(e){return o.a.createElement("li",{className:"list-group-item"},e.children)},C=function(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({className:"form-control"},e)))},S=function(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",author:""},a.loadBooks=function(){g.getBooks().then(function(e){return a.setState({books:e.data,title:"",author:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){g.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(s.a)({},n,o))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.title&&a.state.author&&g.saveBook({title:a.state.title,author:a.state.author}).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(j,{fluid:!0},o.a.createElement(N,null,o.a.createElement(y,{size:"md-6"},o.a.createElement(p,null,o.a.createElement("h1",null,"What Books Should I Read?")),o.a.createElement("form",null,o.a.createElement(C,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),o.a.createElement(C,{value:this.state.author,onChange:this.handleInputChange,name:"author",placeholder:"Author (required)"}),o.a.createElement(S,{disabled:!(this.state.author&&this.state.title),onClick:this.handleFormSubmit},"Submit Book"))),o.a.createElement(y,{size:"md-6 sm-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(O,{key:t._id},o.a.createElement(B.a,{to:"/books/"+t._id},o.a.createElement("strong",null,t.title," by ",t.author)),o.a.createElement(b,{onClick:function(){return e.deleteBook(t._id)}}))})):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(j,{fluid:!0},o.a.createElement(N,null,o.a.createElement(y,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),o.a.createElement(N,null,o.a.createElement(y,{size:"md-2"},o.a.createElement(B.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component),R=function(){return o.a.createElement(j,{fluid:!0},o.a.createElement(N,null,o.a.createElement(y,{size:"md-12"},o.a.createElement(p,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},x=function(){return o.a.createElement("nav",{className:"navbar navbar-inverse navbar-top"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"navbar-header"},o.a.createElement("a",{href:"/",className:"navbar-brand"},"React Reading List"))))},A=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement(i.a,null,o.a.createElement(u.a,{exact:!0,path:"/",component:z}),o.a.createElement(u.a,{exact:!0,path:"/books",component:z}),o.a.createElement(u.a,{exact:!0,path:"/books/:id",component:I}),o.a.createElement(u.a,{component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.5604beba.chunk.js.map