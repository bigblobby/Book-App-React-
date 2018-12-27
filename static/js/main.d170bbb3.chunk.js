(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=a(6),s=a(1),u=a(2),i=a(4),m=a(3),b=a(5),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).titleRef=r.a.createRef(),a.authorRef=r.a.createRef(),a.isbnRef=r.a.createRef(),a.handleSubmit=function(e){if(e.preventDefault(),""!==a.titleRef.current.value&&""!==a.authorRef.current.value&&""!==a.isbnRef.current.value){var t={title:a.titleRef.current.value,author:a.authorRef.current.value,isbn:parseInt(a.isbnRef.current.value)};a.props.addBook(t),e.currentTarget.reset()}else a.props.showAlert("Please fill out all fields","danger")},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"book-form",className:"mb-5",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{id:"title",className:"form-control",type:"text",ref:this.titleRef})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"author"},"Author:"),r.a.createElement("input",{id:"author",type:"text",className:"form-control",ref:this.authorRef})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"isbn"},"ISBN:"),r.a.createElement("input",{id:"isbn",className:"form-control",type:"number",ref:this.isbnRef})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Book ",r.a.createElement("i",{className:"fas fa-plus ml-2"})))}}]),t}(r.a.Component),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).renderBook=function(e){return r.a.createElement("tr",{key:e.isbn},r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.author),r.a.createElement("td",null,e.isbn),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger delete-button",onClick:function(){return a.props.removeBook(e.isbn)}},"X")))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("table",{id:"book-table",className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Title"),r.a.createElement("th",{scope:"col"},"Author"),r.a.createElement("th",{scope:"col"},"ISBN"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.props.books.map(function(t){return e.renderBook(t)})))}}]),t}(r.a.Component),h=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).addBook=function(t){var a=Object(c.a)(e.state.books);a.push(t),e.setState({books:a}),e.showAlert("Book Added!","success")},e.removeBook=function(t){var a=Object(c.a)(e.state.books);a.forEach(function(e,n){t===e.isbn&&a.splice(n,1)}),e.setState({books:a}),e.showAlert("Book Removed!","danger")},e.showAlert=function(t,a){t&&(e.setState({alertMessage:r.a.createElement("div",{className:"alert alert-".concat(a)},t)}),setTimeout(function(){e.setState({alertMessage:null})},3e3))},e.state={books:[],alertMessage:null},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("books");e&&this.setState({books:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("books",JSON.stringify(this.state.books))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Book List"),this.state.alertMessage),r.a.createElement(f,{addBook:this.addBook,showAlert:this.showAlert}),this.state.books.length>0&&r.a.createElement(d,{books:this.state.books,removeBook:this.removeBook}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,2,1]]]);
//# sourceMappingURL=main.d170bbb3.chunk.js.map