(this.webpackJsonpitrend=this.webpackJsonpitrend||[]).push([[15],{637:function(e,t,n){e.exports=n(508)},638:function(e,t,n){"use strict";function a(e,t,n,a,r,s,o){try{var c=e[s](o),i=c.value}catch(u){return void n(u)}c.done?t(i):Promise.resolve(i).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var o=e.apply(t,n);function c(e){a(o,r,s,c,i,"next",e)}function i(e){a(o,r,s,c,i,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return r}))},643:function(e,t,n){"use strict";var a=n(98),r=n.n(a),s=n(232),o=n.n(s),c=n(142),i=c.a.currentUserValue;o.a.interceptors.request.use((function(e){return i&&i.access_token&&(e.headers.credentials="include",e.headers.Authorization="Bearer ".concat(i.access_token),e.headers["Access-Control-Allow-Origin"]="*",e.headers["Content-Type"]="application/json"),e}),(function(e){return Promise.reject(e)})),o.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response&&e.response.data&&e.response.data.error&&(!1===e.response.data.session||"false"===e.response.data.session))c.a.logout();else if(e.response&&e.response.data&&e.response.data.error&&e.response.data.error.message)console.log(e.response.data.error.message);else{if(!e.response||401!==e.response.status)return Promise.reject(e);c.a.logout()}}));var u=o.a;t.a={storeUserQuestion:function(e,t,n,a){return u.post("".concat(r.a.get("apiUrl"),"/user-test"),{userId:e,questionId:t,optionAnswerId:n,quizLink:a})},getUserQuizById:function(e){return u.get("".concat(r.a.get("apiUrl"),"/user-test/").concat(e))},storeResponses:function(e,t,n,a){return u.post("".concat(r.a.get("apiUrl"),"/other-test"),{userId:e,questionId:t,optionAnswerId:n,quizLink:a})},getQuestionsByCategory:function(e){return u.get("".concat(r.a.get("apiUrl"),"/topic-question/").concat(e))},getLoggedInUserQuiz:function(){return u.get("".concat(r.a.get("apiUrl"),"/get-quizzes"))},getQuestionsAndAnswers:function(e){return u.get("".concat(r.a.get("apiUrl"),"/get-quizzes/").concat(e))},getCategoryById:function(e){return u.get("".concat(r.a.get("apiUrl"),"/category/").concat(e))},getResultDetails:function(e){return u.get("".concat(r.a.get("apiUrl"),"/result-details?quizLink=").concat(e.quizLink,"&userId=").concat(e.name))}}},648:function(e,t,n){"use strict";var a=n(5),r=n(8),s=n(0),o=n.n(s),c=n(1),i=n.n(c),u=n(3),l=n.n(u),p=n(4),d={tag:p.e,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,n=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),i=Object(p.c)(l()(t,"card-header"),n);return o.a.createElement(s,Object(a.a)({},c,{className:i}))};m.propTypes=d,m.defaultProps={tag:"div"},t.a=m},655:function(e,t,n){"use strict";var a=n(5),r=n(8),s=n(0),o=n.n(s),c=n(1),i=n.n(c),u=n(3),l=n.n(u),p=n(4),d={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:p.e,responsiveTag:p.e,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},m=function(e){var t=e.className,n=e.cssModule,s=e.size,c=e.bordered,i=e.borderless,u=e.striped,d=e.dark,m=e.hover,g=e.responsive,f=e.tag,v=e.responsiveTag,b=e.innerRef,h=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(p.c)(l()(t,"table",!!s&&"table-"+s,!!c&&"table-bordered",!!i&&"table-borderless",!!u&&"table-striped",!!d&&"table-dark",!!m&&"table-hover"),n),k=o.a.createElement(f,Object(a.a)({},h,{ref:b,className:E}));if(g){var y=Object(p.c)(!0===g?"table-responsive":"table-responsive-"+g,n);return o.a.createElement(v,{className:y},k)}return k};m.propTypes=d,m.defaultProps={tag:"table",responsiveTag:"div"},t.a=m},771:function(e,t,n){"use strict";n.r(t);var a=n(637),r=n.n(a),s=n(638),o=n(41),c=n(42),i=n(44),u=n(43),l=n(0),p=n.n(l),d=n(139),m=n(140),g=n(116),f=n(230),v=n(648),b=n(231),h=n(655),E=n(643),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(o.a)(this,n);var r=(a=t.call(this,e)).props.match.params.quizLink,s=a.props.match.params.name;return a.state={data:[],quizLink:r,name:s},a}return Object(c.a)(n,[{key:"getData",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,s=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.name,a=t.quizLink,e.next=3,E.a.getResultDetails({name:n,quizLink:a}).then((function(e){s.setState({data:e.data,name:n,quizLink:a})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRemark",value:function(e){return 0===e?p.a.createElement(d.a,{color:"danger"},"Wrong Answer"):p.a.createElement(d.a,{color:"success"},"Correct")}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.name,r=t.quizLink;return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(m.a,null,p.a.createElement(g.a,{lg:12},p.a.createElement(f.a,null,p.a.createElement(v.a,null,p.a.createElement("strong",null,p.a.createElement("i",{className:"icon-info pr-1"}),"Quiz id: ",r),p.a.createElement("strong",null,p.a.createElement("i",{className:"icon-info pr-1"}),"Name : ",a)),p.a.createElement(b.a,null,p.a.createElement(h.a,{responsive:!0,striped:!0,hover:!0},p.a.createElement("thead",null,p.a.createElement("th",null,"id")," ",p.a.createElement("th",null,"question")," ",p.a.createElement("th",null,"option")," ",p.a.createElement("th",null,"remark")),p.a.createElement("tbody",null,n.map((function(t,n){return p.a.createElement("tr",{key:n},p.a.createElement("td",null,"".concat(n+1,":")),p.a.createElement("td",null,p.a.createElement("strong",null,t.question_text)),p.a.createElement("td",null,p.a.createElement("strong",null,t.option)),p.a.createElement("td",null,e.getRemark(t.score)))})))))))))}}]),n}(l.Component);t.default=k}}]);
//# sourceMappingURL=15.d956f8c7.chunk.js.map