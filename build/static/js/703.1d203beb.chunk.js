"use strict";(self.webpackChunksspvo=self.webpackChunksspvo||[]).push([[703],{653:function(e,t,n){var r=n(885),u=n(791),c=n(389);t.Z=function(e){var t=e.disabledDefault,n=e.convertDefault,s=(e.getZeroFunc,e.handlerFunc,e.type,(0,u.useState)("")),a=(0,r.Z)(s,2),i=a[0],l=a[1],o=(0,u.useState)(""),f=(0,r.Z)(o,2),h=f[0],d=f[1],Z=(0,u.useState)(""),p=(0,r.Z)(Z,2),v=p[0],k=p[1],S=(0,u.useState)(50),x=(0,r.Z)(S,2),g=x[0],m=x[1],j=(0,u.useState)(10),C=(0,r.Z)(j,2),b=C[0],w=C[1],y=(0,u.useState)(n),A=(0,r.Z)(y,2),U=A[0],E=A[1],F=(0,u.useState)(1),N=(0,r.Z)(F,2),_=N[0],G=N[1],J=(0,u.useState)(0),z=(0,r.Z)(J,2);return{start:_,setStart:G,end:z[0],setEnd:z[1],currAbit:i,sca:l,status:h,ss:d,counter:v,sc:k,saveAt:g,setSaveAt:m,resize:b,setResize:w,convert:U,setConvert:E,runBtn:(0,c.Z)("run","RUN",t)}}},703:function(e,t,n){n.r(t);var r=n(942),u=n(165),c=n(762),s=n(861),a=n(413),i=n(885),l=n(791),o=n(884),f=n(115),h=n(731),d=n(4),Z=n(893),p=n(653),v=n(678),k=n(184),S=["in_competition"],x={fullCheck:!1,headers:!1,forceChange:!1,onlySogl:!0,limit:100,filters:"",newStatus:null,agree:"",checks:["main","sums"]};t.default=function(){var e=(0,l.useState)(x),t=(0,i.Z)(e,2),n=t[0],g=t[1],m=(0,l.useState)(!1),j=(0,i.Z)(m,2),C=j[0],b=j[1],w=(0,p.Z)({convertDefault:!1,disabledDefault:!1,getZeroFunc:o.le,type:"pages",handlerFunc:o.wB}),y=w.currAbit,A=w.sca,U=w.status,E=w.ss,F=w.counter,N=w.sc,_=w.saveAt,G=w.setSaveAt,J=w.resize,z=w.setResize,B=w.convert,D=w.setConvert,R=w.runBtn;(0,l.useEffect)((function(){return g((function(e){return(0,a.Z)((0,a.Z)({},e),{},{filters:S.map((function(e){return h.fn.filter((function(t){return t.code===e})).map((function(e){return"&filter_status="+e.id}))})).join("")})}))}),[g]),(0,l.useEffect)((function(){document.title=n.onlySogl?"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u044f":"\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f",g((function(e){return(0,a.Z)((0,a.Z)({},e),{},{agree:n.onlySogl?"&filter_agree=true":""})}))}),[n.onlySogl,g]);var L=(0,l.useCallback)((0,s.Z)((0,u.Z)().mark((function e(){var t,r,s,a,i,l,h,d,Z,p,v;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(""),R.disable(),R.remove(),t=(0,o.le)(n),e.next=6,(0,o.UQ)(n);case 6:r=e.sent,s=r.total,a=r.count_page,i=(0,f.cl)(a),l=(0,f.Hx)(i,J),h=(0,f.py)("ApplLog",B,J,n.onlySogl),d=J*n.limit,Z=(0,c.Z)(l),e.prev=14,v=(0,u.Z)().mark((function e(){var r,c;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.value,d>s&&(d=s),N("".concat(Math.round(d/s*1e4)/100,"% (").concat(d,"/").concat(s,")")),c=[],r.forEach((function(e){return c.push((0,o.wB)(e,{sca:A,ss:E,config:n}))})),e.next=7,Promise.all(c).then((function(e){return e.flat().forEach((function(e){return t[e.appl_id]=e}))}));case 7:d%_===0&&R.update(h(d,t)),d+=J*n.limit;case 9:case"end":return e.stop()}}),e)})),Z.s();case 17:if((p=Z.n()).done){e.next=21;break}return e.delegateYield(v(),"t0",19);case 19:e.next=17;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(14),Z.e(e.t1);case 26:return e.prev=26,Z.f(),e.finish(26);case 29:R.update(h(s,t,!0)),R.enable();case 31:case"end":return e.stop()}}),e,null,[[14,23,26,29]])}))),[R,n,J,B,_,A,E,N]),O=function(e){var t=e.target.id;g((function(u){var c;return(0,a.Z)((0,a.Z)({},u),{},(c={},(0,r.Z)(c,t,!n[t]),(0,r.Z)(c,"limit",e.target.checked?100:n.limit),c))}))};return(0,l.useEffect)((function(){n.fullCheck&&(g((function(e){return(0,a.Z)((0,a.Z)({},e),{},{checks:x.checks,headers:!0,limit:10})})),z(1))}),[n.fullCheck,g,z]),(0,k.jsxs)("div",{className:"main",children:[(0,k.jsx)(d.Jg,{id:"onlySogl",check:n.onlySogl,handler:O,text:"\u0422\u043e\u043b\u044c\u043a\u043e \u0421\u043e\u0433\u043b\u0430\u0441\u0438\u044f"}),(0,k.jsx)(Z.N.GUStatuses,{handler:function(e){g((function(t){return(0,a.Z)((0,a.Z)({},t),{},{filters:e.map((function(e){return"&filter_status="+e.id})).join("")})}))},defOpt:S}),(0,k.jsx)(d.Jg,{id:"needNewStatus",check:C,handler:function(e){e.currentTarget.checked||g((function(e){return(0,a.Z)((0,a.Z)({},e),{},{newStatus:null})})),b(!C)},text:"\u041d\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"}),C&&(0,k.jsx)(Z.q.GUStatuses,{handler:function(e){g((function(t){return(0,a.Z)((0,a.Z)({},t),{},{newStatus:e.value})}))}}),(0,k.jsx)(d.Jg,{id:"fullCheck",check:n.fullCheck,handler:O,text:"\u041f\u043e\u043b\u043d\u0430\u044f \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0430"}),n.fullCheck&&(0,k.jsx)(Z.N.ApplsChecks,{handler:function(e){0===e.length&&g((function(e){return(0,a.Z)((0,a.Z)({},e),{},{fullCheck:!1})})),g((function(t){return(0,a.Z)((0,a.Z)({},t),{},{checks:e.map((function(e){return e.value}))})}))},defOpt:x.checks}),(0,k.jsx)(d.GU.Limit,{value:n.limit,handler:function(e){g((function(t){return(0,a.Z)((0,a.Z)({},t),{},{limit:Number(e.target.value)})}))}}),(0,k.jsx)(d.GU.Save,{value:_,setFunc:G}),(0,k.jsx)(d.GU.Split,{value:J,setFunc:z}),(0,k.jsx)(d.Jg,{id:"headers",check:n.headers,handler:O,text:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432"}),n.headers&&(0,k.jsx)(d.Jg,{id:"toCSV",check:B,handler:function(){return D(!B)},text:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 CSV"}),(0,k.jsx)(v.Z,{p:R.p,func:L}),(0,k.jsxs)("p",{children:["\u0417\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435: ",y]}),(0,k.jsxs)("p",{children:["\u0412\u0441\u0435\u0433\u043e ",F]}),(0,k.jsxs)("p",{children:["\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430: ",U]})]})}}}]);
//# sourceMappingURL=703.1d203beb.chunk.js.map