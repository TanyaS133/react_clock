(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=(n(12),n(0)),d=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:(new Date).toUTCString().slice(-12,-4)},t.timerId=null,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:(new Date).toUTCString().slice(-12,-4)}),console.info(t.state.today)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.timerId&&window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(s.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var m=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timerId=null,t.handlerRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handlerLeftClick=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",this.handlerRightClick),document.addEventListener("click",this.handlerLeftClick),this.timerId=window.setInterval((function(){t.setState({clockName:h()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handlerRightClick),document.removeEventListener("click",this.handlerLeftClick),this.timerId&&window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(d,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9b87b679.chunk.js.map