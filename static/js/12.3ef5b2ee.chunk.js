(this.webpackJsonpitrend=this.webpackJsonpitrend||[]).push([[12],{637:function(e,t,a){e.exports=a(508)},638:function(e,t,a){"use strict";function n(e,t,a,n,r,s,c){try{var l=e[s](c),o=l.value}catch(u){return void a(u)}l.done?t(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,s){var c=e.apply(t,a);function l(e){n(c,r,s,l,o,"next",e)}function o(e){n(c,r,s,l,o,"throw",e)}l(void 0)}))}}a.d(t,"a",(function(){return r}))},647:function(e,t,a){"use strict";var n=a(98),r=a.n(n),s=a(232),c=a.n(s);t.a={getQuestionsByQuizId:function(e){return c.a.get("".concat(r.a.get("apiUrl"),"/get-questions/").concat(e))},storeOthersResponse:function(e){return c.a.post("".concat(r.a.get("apiUrl"),"/other-test"),e)},getResultsByQuizLink:function(e){return c.a.get("".concat(r.a.get("apiUrl"),"/all-scores?quizLink=").concat(e))},getFriendResult:function(e,t){return c.a.get("".concat(r.a.get("apiUrl"),"/friend-score?quizLink=").concat(e,"&userId=").concat(t))}}},648:function(e,t,a){"use strict";var n=a(5),r=a(8),s=a(0),c=a.n(s),l=a(1),o=a.n(l),u=a(3),i=a.n(u),d=a(4),m={tag:d.e,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.c)(i()(t,"card-header"),a);return c.a.createElement(s,Object(n.a)({},l,{className:o}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},655:function(e,t,a){"use strict";var n=a(5),r=a(8),s=a(0),c=a.n(s),l=a(1),o=a.n(l),u=a(3),i=a.n(u),d=a(4),m={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:d.e,responsiveTag:d.e,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var t=e.className,a=e.cssModule,s=e.size,l=e.bordered,o=e.borderless,u=e.striped,m=e.dark,p=e.hover,f=e.responsive,b=e.tag,v=e.responsiveTag,g=e.innerRef,h=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(d.c)(i()(t,"table",!!s&&"table-"+s,!!l&&"table-bordered",!!o&&"table-borderless",!!u&&"table-striped",!!m&&"table-dark",!!p&&"table-hover"),a),k=c.a.createElement(b,Object(n.a)({},h,{ref:g,className:E}));if(f){var y=Object(d.c)(!0===f?"table-responsive":"table-responsive-"+f,a);return c.a.createElement(v,{className:y},k)}return k};p.propTypes=m,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p},705:function(e,t,a){"use strict";var n=a(5),r=a(8),s=a(0),c=a.n(s),l=a(1),o=a.n(l),u=a(3),i=a.n(u),d=a(4),m={tag:d.e,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.c)(i()(t,"card-footer"),a);return c.a.createElement(s,Object(n.a)({},l,{className:o}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},761:function(e,t,a){"use strict";a.r(t);var n=a(637),r=a.n(n),s=a(638),c=a(41),l=a(42),o=a(44),u=a(43),i=a(0),d=a.n(i),m=a(139),p=a(177),f=a(140),b=a(116),v=a(230),g=a(648),h=a(231),E=a(655),k=a(705),y=a(233),j=a(647),O=a(234),N={marginTop:"40px",textAlign:"center"};function R(e){var t=e.index;return d.a.createElement("tr",{key:t},d.a.createElement("td",null," ",t),d.a.createElement("td",null,"  ",e.userId),d.a.createElement("td",null," ",e.score,"/",e.number_of_questions," "))}var x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={results:[],result:{},details:[]},n}return Object(l.a)(a,[{key:"getResults",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.link,a=this.props.match.params.name,e.next=4,j.a.getResultsByQuizLink(t).then((function(e){j.a.getFriendResult(t,a).then((function(t){n.setState({results:e.data,result:t.data.score,details:t.data.result})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResults();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRemark",value:function(e){return 0===e?d.a.createElement(m.a,{color:"danger"},"Wrong Answer"):d.a.createElement(m.a,{color:"success"},"Correct")}},{key:"render",value:function(){var e=this,t=this.state,a=t.results,n=t.result,r=t.details;return d.a.createElement("div",null,d.a.createElement(O.a,null),d.a.createElement(p.a,{style:N,className:"center"},d.a.createElement(y.a,{checkBackground:!0}),d.a.createElement(f.a,null,d.a.createElement(b.a,{sm:12},d.a.createElement(v.a,null,d.a.createElement(g.a,null,"Results"),d.a.createElement(h.a,null,d.a.createElement(E.a,{responsive:!0,hover:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col"},"id"),d.a.createElement("th",{scope:"col"},"name"),d.a.createElement("th",{scope:"col"}," score"))),d.a.createElement("tbody",null,a.map((function(e,t){return d.a.createElement(R,Object.assign({key:t,index:t+1},e))}))))),d.a.createElement(k.a,null,d.a.createElement(v.a,null,d.a.createElement(h.a,null,d.a.createElement(E.a,{responsive:!0,hover:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{scope:"col"},"id"),d.a.createElement("th",{scope:"col"},"question"),d.a.createElement("th",{scope:"col"}," remark"))),d.a.createElement("tbody",null,r.map((function(t,a){return d.a.createElement("tr",{key:a},d.a.createElement("td",null,"".concat(a+1,":")),d.a.createElement("td",null,d.a.createElement("strong",null,t.question_text)),d.a.createElement("td",null,d.a.createElement("strong",null,t.option)),d.a.createElement("td",null,e.getRemark(t.score)))})))))),n.userId,"  You Scored ",n.score,"/",n.number_of_questions))))))}}]),a}(i.Component);t.default=x}}]);
//# sourceMappingURL=12.3ef5b2ee.chunk.js.map