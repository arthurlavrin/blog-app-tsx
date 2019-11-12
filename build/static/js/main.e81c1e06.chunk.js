(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{100:function(e,n,t){},101:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(25),c=t.n(o),i=t(45),u=t(20),l=t(1),s=t(9),p=t(10),f=t(12),d=t(11),b=t(13),h=t(22),m=t(15),v=t(16),O=t.n(v),g=t(27),j=t(23),y=t(47),x=t.n(y).a.create({baseURL:"https://simple-blog-api.crew.red/"}),E=function(){return{type:"FETCH_POSTS_START"}},w=function(e){return{type:"FETCH_POSTS_SUCCESS",posts:e}},P=function(e){return{type:"FETCH_POSTS_ERROR",error:e}},k=function(e){return{type:"FETCH_POST_SUCCESS",post:e}},C=function(e){return{postId:e,type:"DELETE_POST"}};function S(){return function(){var e=Object(j.a)(O.a.mark((function e(n){var t,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(E()),e.prev=1,e.next=4,x.get("/posts");case 4:t=e.sent,r=Object(g.a)(t.data),n(w(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(P(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()}function T(e){return function(){var n=Object(j.a)(O.a.mark((function n(t){var r,a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(E()),n.prev=1,n.next=4,x.get("/posts/".concat(e,"?_embed=comments"));case 4:r=n.sent,a=r.data,console.log(a),t(k(a)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),t(P(n.t0));case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}function _(e,n){return function(){var t=Object(j.a)(O.a.mark((function t(r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(E()),t.prev=1,t.next=4,x.delete("/posts/".concat(e));case 4:r(C(e)),n.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r(P(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}var D=t(2),H=t(26),F=t.n(H),R=t(5);function M(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 400px;\n"]);return M=function(){return e},e}function N(){var e=Object(l.a)(["\n    text-decoration: none;\n    color: #fff;\n    &:hover {\n        color: #363f54;\n    }\n"]);return N=function(){return e},e}function A(){var e=Object(l.a)(["\n    margin-bottom: 10px;\n"]);return A=function(){return e},e}function I(){var e=Object(l.a)(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n"]);return I=function(){return e},e}function z(){var e=Object(l.a)(["\n    color: #fff;\n"]);return z=function(){return e},e}function V(){var e=Object(l.a)(["\n    text-align: center;\n    width: 800px;\n    padding: 15px;\n    box-shadow: 0px 0px 10px #000000c2;\n    background: #ffffff1f;\n    height: 80vh;\n    overflow: auto;\n"]);return V=function(){return e},e}function L(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    padding-top: 100px;\n    flex-grow: 1;\n    width: 100%;\n    background: linear-gradient(90deg, #fd8355 0%, #f0576c 37%, #f79cbd 100%);\n"]);return L=function(){return e},e}var B=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).renderPosts=function(){return t.props.posts.map((function(e){return a.a.createElement(X,{key:e.id},a.a.createElement($,{to:"/post/"+e.id},e.title))}))},t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"render",value:function(){var e=this.props.loaded&&0!==this.props.posts.length?a.a.createElement(J,null,this.renderPosts()):a.a.createElement(G,{type:"Puff",color:"#00BFFF",height:100,width:100});return a.a.createElement(U,null,a.a.createElement(q,null,a.a.createElement(W,null,"List of latest post"),e))}}]),n}(r.Component),U=D.a.div(L()),q=D.a.div(V()),W=D.a.h1(z()),J=D.a.ul(I()),X=D.a.li(A()),$=Object(D.a)(h.b)(N()),G=Object(D.a)(F.a)(M()),K=Object(m.b)((function(e,n){return{posts:e.blog.posts,loaded:e.blog.loaded}}),(function(e,n){return{fetchPosts:Object(R.b)(S,e)}}))(B);function Q(){var e=Object(l.a)(["\n    background: #ffffff7a;\n    height: 40vh;\n    margin: 50px;\n    padding: 10px;\n    overflow: auto;\n"]);return Q=function(){return e},e}var Y=D.a.div(Q()),Z=function(e){return a.a.createElement(Y,null,function(){if(!e.comments||0===e.comments.length)return a.a.createElement("div",null,"no comments");e.comments.map((function(e,n){return a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",null),a.a.createElement("p",{key:n},e),a.a.createElement("hr",null))}))}())};function ee(){var e=Object(l.a)(["\n    display: inline-block;\n    padding: 10px 20px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    color: #000;\n    margin-right: 15px;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 12px;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);\n    }\n    &.error {\n        background: rgba(240, 87, 108, 1);\n    }\n    &.success {\n        background: rgba(161, 240, 69, 1);\n    }\n    &.primary {\n        background: #2884f6;\n        color: #fff;\n    }\n    &:disabled {\n        background: #ccc;\n        color: #000;\n        cursor: not-allowed;\n    }\n"]);return ee=function(){return e},e}var ne=D.a.button(ee()),te=function(e){return a.a.createElement(ne,{onClick:e.onClick,className:e.type,disabled:e.disabled},e.children)};function re(){var e=Object(l.a)(["\n    margin-bottom: 20px;\n"]);return re=function(){return e},e}function ae(){var e=Object(l.a)(["\n    text-align: center;\n"]);return ae=function(){return e},e}function oe(){var e=Object(l.a)([""]);return oe=function(){return e},e}var ce=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).deletePostHandler=function(e){e.preventDefault(),t.props.deletePost(t.props.post.id,t.props.history)},t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(ie,null,a.a.createElement(ue,null,this.props.post.title),a.a.createElement(le,null,this.props.post.body),a.a.createElement(te,{type:"success",onClick:this.deletePostHandler},"Delete post"),a.a.createElement(Z,{comments:this.props.post.comments}))}}]),n}(a.a.Component),ie=D.a.div(oe()),ue=D.a.h3(ae()),le=D.a.p(re()),se=Object(m.b)(null,(function(e,n){return{deletePost:Object(R.b)(_,e)}}))(ce);function pe(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 400px;\n"]);return pe=function(){return e},e}function fe(){var e=Object(l.a)(["\n    color: #fff;\n    margin-left: 10px;\n    text-align: center;\n"]);return fe=function(){return e},e}function de(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    padding-top: 100px;\n    flex-grow: 1;\n    width: 100%;\n    background: linear-gradient(90deg, #5041b2 0%, #7969e6 100%);\n"]);return de=function(){return e},e}function be(){var e=Object(l.a)(["\n    width: 800px;\n    padding: 15px;\n    box-shadow: 0px 0px 10px #000000c2;\n    background: #ffffff1f;\n    height: 80vh;\n    overflow: auto;\n"]);return be=function(){return e},e}var he=function(e){function n(){return Object(s.a)(this,n),Object(f.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostById(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props.loaded?a.a.createElement(se,{history:this.props.history,post:this.props.post}):a.a.createElement(ge,{type:"Puff",color:"#00BFFF",height:100,width:100});return a.a.createElement(ve,null,a.a.createElement(me,null,a.a.createElement(Oe,null,"Post"),e))}}]),n}(r.Component),me=D.a.div(be()),ve=D.a.div(de()),Oe=D.a.h1(fe()),ge=Object(D.a)(F.a)(pe()),je=Object(m.b)((function(e,n){return{loaded:e.blog.loaded,post:e.blog.post}}),(function(e,n){return{fetchPostById:Object(R.b)(T,e)}}))(he),ye=t(19);function xe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ee(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?xe(t,!0).forEach((function(n){Object(ye.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{validation:n,valid:!n,touched:!1,value:""})}function we(e){var n=!0;for(var t in e)e.hasOwnProperty(t)&&(n=e[t].valid&&n);return n}var Pe=function(e){return{type:"SAVE_POST_IN_STORE",item:e}},ke=function(){return{type:"RESET_POST_CREATION"}};function Ce(){return function(){var e=Object(j.a)(O.a.mark((function e(n,t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/posts",t().create.post);case 2:n(ke());case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}function Se(){var e=Object(l.a)(["\n    color: #f01f30;\n    font-size: 12px;\n    font-weight: bold;\n"]);return Se=function(){return e},e}function Te(){var e=Object(l.a)(["\n    display: block;\n    box-sizing: border-box;\n    border: 1px solid #bebebe;\n    padding: 7px;\n    margin: 0 0 5px;\n    width: 100%;\n    outline: none;\n    transition: all 0.3s ease-in-out;\n"]);return Te=function(){return e},e}function _e(){var e=Object(l.a)(["\n    margin-bottom: 3px;\n    padding: 0;\n    display: block;\n    font-weight: bold;\n    &.invalid {\n        color: #f01f30;\n    }\n"]);return _e=function(){return e},e}function De(){var e=Object(l.a)(["\n    margin-bottom: 15px;\n"]);return De=function(){return e},e}function He(e){var n=e.valid,t=e.touched,r=e.shouldValidate;return!n&&r&&t}var Fe=D.a.div(De()),Re=D.a.label(_e()),Me=D.a.input(Te()),Ne=D.a.span(Se()),Ae=function(e){var n=e.type||"text",t="".concat(n,"-").concat(Math.random()),r=He(e)?a.a.createElement(Ne,null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):null;return a.a.createElement(Fe,null,a.a.createElement(Re,{className:He(e)?"invalid":" ",htmlFor:t},e.label),a.a.createElement(Me,{type:n,id:t,value:e.value,onChange:e.onChange}),r)};function Ie(){var e=Object(l.a)(["\n    text-align: center;\n    width: 80%;\n    margin: 0 auto;\n"]);return Ie=function(){return e},e}function ze(){var e=Object(l.a)(["\n    text-align: center;\n"]);return ze=function(){return e},e}function Ve(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: end;\n    padding-top: 20px;\n    flex-grow: 1;\n    width: 100%;\n    background: linear-gradient(270deg, #f0613c 0%, #f0783c 100%);\n    flex-direction: column;\n"]);return Ve=function(){return e},e}function Le(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    padding-top: 20px;\n    flex-grow: 1;\n    width: 100%;\n    background: linear-gradient(270deg, #f0613c 0%, #f0783c 100%);\n"]);return Le=function(){return e},e}function Be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Be(t,!0).forEach((function(n){Object(ye.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Be(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function qe(){return{title:Ee({label:"Subject",errorMessage:"Could not be empty"},{required:!0}),body:Ee({label:"What you think",errorMessage:"Could not be empty"},{required:!0})}}var We=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={isFormValid:!1,formControls:qe()},t.submitHandler=function(e){e.preventDefault()},t.createPostHandler=function(e){e.preventDefault(),t.setState({isFormValid:!1,formControls:qe()}),t.props.finishCreatePost()},t.changeHandler=function(e,n){var r=Ue({},t.state.formControls),a=Ue({},r[n]);a.touched=!0,a.value=e,a.valid=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!n)return!0;var t=!0;return n.required&&(t=""!==e.trim()&&t),t}(a.value,a.validation),r[n]=a,t.setState({formControls:r,isFormValid:we(r)}),t.props.savePostInStore({value:e,controlName:n})},t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"renderControls",value:function(){var e=this,n=this.state.formControls.title,t=this.state.formControls.body;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ae,{label:n.label,value:n.value,valid:n.valid,shouldValidate:!!n.validation,touched:n.touched,errorMessage:n.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,"title")}}),a.a.createElement(Ae,{label:t.label,value:t.value,valid:t.valid,shouldValidate:!!t.validation,touched:t.touched,errorMessage:t.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,"body")}}))}},{key:"render",value:function(){return a.a.createElement(Je,null,a.a.createElement(Xe,null,a.a.createElement($e,null,"Post creation"),a.a.createElement(Ge,{onSubmit:this.submitHandler},this.renderControls(),a.a.createElement(te,{type:"success",onClick:this.createPostHandler,disabled:0===this.props.post.title.length||0===this.props.post.body.length},"Create post"))))}}]),n}(r.Component),Je=D.a.div(Le()),Xe=D.a.div(Ve()),$e=D.a.h1(ze()),Ge=D.a.form(Ie()),Ke=Object(m.b)((function(e,n){return{post:e.create.post}}),(function(e,n){return{finishCreatePost:Object(R.b)(Ce,e),savePostInStore:Object(R.b)(Pe,e)}}))(We);function Qe(){var e=Object(l.a)(["\n    z-index: 50;\n    background: rgba(0, 0, 0, 0.7);\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: 0;\n"]);return Qe=function(){return e},e}var Ye=D.a.h1(Qe()),Ze=function(e){return a.a.createElement(Ye,{onClick:e.onClick})};function en(){var e=Object(l.a)(["\n    color: #363f54;\n    font-size: 30px;\n    text-decoration: none;\n    background-color: #fff;\n    position: relative;\n    padding: 0 20px 10px 20px;\n    transition: opacity 0.3s;\n    &:hover {\n        color: #363f54;\n        font-size: 30px;\n        text-decoration: none;\n        background-color: #fff;\n        position: relative;\n        padding: 0 20px 10px 20px;\n        opacity: 0.7;\n    }\n"]);return en=function(){return e},e}function nn(){var e=Object(l.a)(["\n    margin-bottom: 15px;\n"]);return nn=function(){return e},e}function tn(){var e=Object(l.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return tn=function(){return e},e}function rn(){var e=Object(l.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 80%;\n    max-width: 300px;\n    padding: 20px 10px;\n    box-sizing: border-box;\n    background: #fff;\n    z-index: 90;\n    transform: translateX(0px);\n    transition: transform 0.22s ease-in;\n    &.close {\n        transform: translateX(-300px);\n    }\n"]);return rn=function(){return e},e}var an=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).clickHandler=function(){t.props.onClose()},t.renderLinks=function(e){return e.map((function(e,n){return a.a.createElement(un,{key:n},a.a.createElement(ln,{to:e.to,exact:e.exact,activeClassName:"active",onClick:t.clickHandler},e.label))}))},t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(on,{className:this.props.isOpen?" ":"close"},a.a.createElement(cn,null,this.renderLinks([{to:"/",label:"Post List",exact:!0},{to:"/post-creator",label:"Create post",exact:!1}]))),this.props.isOpen?a.a.createElement(Ze,{onClick:this.props.onClose}):null)}}]),n}(r.Component),on=D.a.nav(rn()),cn=D.a.ul(tn()),un=D.a.li(nn()),ln=Object(D.a)(h.b)(en()),sn=an;function pn(){var e=Object(l.a)(["\n    position: fixed;\n    top: 40px;\n    left: 40px;\n    cursor: pointer;\n    color: #fff;\n    z-index: 100;\n    font-size: 20px;\n    transition: opacity, left, 0.22s ease-in;\n    &:hover {\n        opacity: 0.7;\n    }\n    &.open {\n        left: 320px;\n    }\n"]);return pn=function(){return e},e}var fn=D.a.i(pn()),dn=function(e){var n=["fa"];return e.isOpen?(n.push("fa-times"),n.push("open")):n.push("fa-bars"),a.a.createElement(fn,{className:n.join(" "),onClick:e.onToggle})};function bn(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]);return bn=function(){return e},e}function hn(){var e=Object(l.a)(["\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]);return hn=function(){return e},e}var mn=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={menu:!1},t.toggleMenuHandler=function(){t.setState({menu:!t.state.menu})},t.menuCloseHandler=function(){t.setState({menu:!1})},t}return Object(b.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(vn,null,a.a.createElement(sn,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),a.a.createElement(dn,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),a.a.createElement(On,null,this.props.children))}}]),n}(r.Component),vn=D.a.div(hn()),On=D.a.main(bn()),gn=mn;var jn=Object(u.g)((function(e){Object(i.a)(e);var n=a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"/post-creator",component:Ke}),a.a.createElement(u.b,{path:"/post/:id",component:je}),a.a.createElement(u.b,{path:"/",exact:!0,component:K}),a.a.createElement(u.a,{to:"/"}));return a.a.createElement(gn,null,n)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var yn=t(51);function xn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function En(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?xn(t,!0).forEach((function(n){Object(ye.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var wn={posts:[],loading:!1,loaded:!1,post:[],error:""};function Pn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function kn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Pn(t,!0).forEach((function(n){Object(ye.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Cn={post:{title:"",body:""}},Sn=Object(R.c)({blog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_POSTS_START":return En({},e,{loading:!0});case"FETCH_POSTS_SUCCESS":return En({},e,{loading:!1,loaded:!0,posts:n.posts});case"FETCH_POSTS_ERROR":return En({},e,{loading:!1,loaded:!1,error:n.error});case"FETCH_POST_SUCCESS":return En({},e,{loading:!1,loaded:!0,post:n.post});case"DELETE_POST":var t=Object(g.a)(e.posts).filter((function(e){return e.id!==n.postId}));return console.log(t),En({},e,{posts:t,post:[]});default:return e}},create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Cn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SAVE_POST_IN_STORE":return kn({},e,{post:{body:"body"===n.item.controlName?n.item.value:e.post.body,title:"title"===n.item.controlName?n.item.value:e.post.title}});case"RESET_POST_CREATION":return kn({},e,{title:"",body:""});default:return e}}}),Tn=Object(R.d)(Sn,Object(R.a)(yn.a)),_n=(t(100),a.a.createElement(m.a,{store:Tn},a.a.createElement(h.a,null,a.a.createElement(jn,null))));c.a.render(_n,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(e,n,t){e.exports=t(101)}},[[54,1,2]]]);
//# sourceMappingURL=main.e81c1e06.chunk.js.map