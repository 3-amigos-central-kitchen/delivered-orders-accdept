(this["webpackJsonp3-amigos-admin"]=this["webpackJsonp3-amigos-admin"]||[]).push([[0],{81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(0),a=c(20),i=c.n(a),o=c(31),s=c(7),l=c(15),j=c.n(l),d=c(19),u=c(25),b=c(27),h=c.n(b),x=c(112),O="https://firestore-apis.herokuapp.com",p=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(O,"/getOrderIdHistory"),console.log(t),e.prev=2,e.next=5,h.a.get(O);case 5:return c=e.sent,console.log(c.data),e.abrupt("return",c.data);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/getOrderDetailsFromId"),n={"Access-Control-Allow-Origin":"*"},e.prev=2,e.next=5,h.a.post(c,{orderid:t},{header:n});case 5:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),m=c(5),f=c(106),v=c(107),y=c(108),w=c(84),k=c(109),T=c(110),E=c(111),N=c(104),P=Object(N.a)((function(){return{octRoot:{minWidth:275,backgroundColor:"#fefefefe"},chargeTitle:{paddingRight:9,color:"#757575"},chargePrice:{paddingRight:2},dataTable:{minWidth:650},oidRoot:{textDecoration:"none",margin:"10px 50px"},oidPos:{margin:"10px 10px"}}})),C=Object(m.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(f.a),D=Object(m.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(v.a),R=function(e){var t=P(),c=[];return function(e){Object.keys(e.orders).map((function(t){var n=e.orders[t];c.push(n)}))}(e),Object(n.jsx)(y.a,{component:w.a,children:Object(n.jsxs)(k.a,{className:t.dataTable,size:"small","aria-label":"Order Details",children:[Object(n.jsx)(T.a,{children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(C,{align:"center",children:"Item"}),Object(n.jsx)(C,{align:"center",children:"Unit"}),Object(n.jsx)(C,{align:"center",children:"Weight/unit"}),Object(n.jsx)(C,{align:"center",children:"Price/unit"}),Object(n.jsx)(C,{align:"center",children:"Qty"}),Object(n.jsx)(C,{align:"center",children:"Expected Weight"}),Object(n.jsx)(C,{align:"center",children:"Final Price"}),Object(n.jsx)(C,{align:"center",children:"Taxable"})]})}),Object(n.jsx)(E.a,{children:c.map((function(e){return Object(n.jsxs)(D,{children:[Object(n.jsx)(C,{align:"center",component:"th",scope:"row",children:e.item}),Object(n.jsx)(C,{align:"center",children:e.package}),Object(n.jsx)(C,{align:"center",children:e.weight}),Object(n.jsx)(C,{align:"center",children:e.price}),Object(n.jsx)(C,{align:"center",children:e.qty}),Object(n.jsx)(C,{align:"center",children:e.expectedQty}),Object(n.jsx)(C,{align:"center",children:e.calculatedPrice}),Object(n.jsx)(C,{align:"center",children:e.taxable})]},e.calculatedPrice)}))})]})})},S=c(113),I=c(114),B=c(115),W=c(116),Q=function(e){var t=e.chargesData,c=P();return Object(n.jsx)(x.a,{container:!0,direction:"column",justify:"center",alignContent:"center",children:Object(n.jsx)(S.a,{className:c.octRoot,variant:"outlined",raised:!0,children:Object(n.jsxs)(I.a,{children:[Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)(B.a,{variant:"h5",gutterBottom:!0,children:"Total Charges"})}),["Delivery","Taxable","Non Taxable","QST","GST","Sub Total","Total"].map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(W.a,{}),Object(n.jsxs)(x.a,{container:!0,direction:"row",children:[Object(n.jsx)(x.a,{item:!0,children:Object(n.jsxs)(B.a,{className:c.chargeTitle,gutterBottom:!0,children:[e,":"]})}),Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)(B.a,{className:c.chargePrice,gutterBottom:!0,children:t[e.replace(" ","").toUpperCase()]})})]})]})}))]})})})},z=function(e){var t=e.match,c=Object(r.useState)({}),a=Object(u.a)(c,2),i=a[0],o=a[1],s=Object(r.useState)({}),l=Object(u.a)(s,2),b=l[0],h=l[1],O=function(){var e=Object(d.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.params.id);case 2:c=e.sent,h({}),o({}),o(c.chargesData),h(c.order);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){O()}),[]),Object(n.jsxs)(x.a,{container:!0,spacing:2,justify:"space-around",children:[Object(n.jsxs)(x.a,{item:!0,lg:9,md:9,sm:12,xs:12,children:[" ",Object(n.jsx)(R,{orders:b})," "]}),Object(n.jsxs)(x.a,{item:!0,lg:3,md:3,sm:12,xs:12,children:[" ",Object(n.jsx)(Q,{chargesData:i})," "]})]})},A=c(117),F=function(e){var t=e.orderid,c=P(),r=t.slice(-8),a="/delivered-orders-accdept";return console.log(a),Object(n.jsx)(S.a,{className:c.oidRoot,component:o.b,to:"".concat(a,"/").concat(t),children:Object(n.jsx)(A.a,{children:Object(n.jsx)(I.a,{children:Object(n.jsxs)(x.a,{container:!0,spacing:2,justify:"space-evenly",children:[Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)(B.a,{className:c.oidPos,variant:"h5",component:"h2",children:t})}),Object(n.jsx)(x.a,{item:!0,children:Object(n.jsxs)(B.a,{className:c.oidPos,color:"textSecondary",children:["Date: ","".concat(r.substring(0,2)," / ").concat(r.substring(2,4)),Object(n.jsx)("br",{}),"Time: ","".concat(r.substring(4,6)," : ").concat(r.substring(6,8))]})})]})})})})},J=(c(81),Object(N.a)({ordersRoot:{backgroundColor:"#EEEEEE"}})),U=function(){var e=J(),t=Object(r.useState)([]),c=Object(u.a)(t,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,p();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)("div",{children:a.length>0?a.map((function(t){return Object(n.jsx)(x.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.ordersRoot,children:Object(n.jsx)(F,{orderid:t})})})):Object(n.jsx)("h1",{children:"Loading"})})},q=(c(82),function(){var e="/delivered-orders-accdept";return console.log(e),Object(n.jsx)(o.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(s.c,{children:[Object(n.jsx)(s.a,{path:e+"/:id",exact:!0,component:z}),Object(n.jsx)(s.a,{path:e+"/",exact:!0,component:U})]})})})});i.a.render(Object(n.jsx)(q,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.d44bf4b7.chunk.js.map