(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"22cd":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("base-content",[o("div",{staticClass:"container q-pa-lg q-col-gutter-md"},[o("div",{staticClass:"row justify-between q-col-gutter-md"},[o("div",{staticClass:"col-xs-12 col-md-3 q-gutter-md"},[o("q-card",{staticClass:"income "},[o("q-card-section",{attrs:{horizontal:""}},[o("q-card-section",{staticClass:"col"},[o("div",{staticClass:"text-subtitle2 text-white"},[t._v("\n                Income\n                "),o("q-icon",{attrs:{color:"yellow",name:"trending_up"}})],1),o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs text-white"},[o("countTo",{attrs:{startVal:906584,endVal:952765,duration:1500}}),t._v("\n                ¥\n              ")],1)]),o("q-card-section",{staticClass:"col"},[o("div",{staticStyle:{height:"100%","max-width":"150px"}},[o("v-chart",{attrs:{options:t.income}})],1)])],1)],1),o("q-card",{staticClass:"expense "},[o("q-card-section",{attrs:{horizontal:""}},[o("q-card-section",{staticClass:"col"},[o("div",{staticClass:"text-subtitle2 text-white"},[t._v("\n                Expense\n                "),o("q-icon",{attrs:{color:"green",name:"trending_down"}})],1),o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs text-white"},[o("countTo",{attrs:{startVal:400326,endVal:439956,duration:1500}}),t._v("\n                ¥\n              ")],1)]),o("q-card-section",{staticClass:"col"},[o("div",{staticStyle:{height:"100%",width:"150px"}},[o("v-chart",{attrs:{options:t.expense}})],1)])],1)],1),o("q-card",{staticClass:"total "},[o("q-card-section",{attrs:{horizontal:""}},[o("q-card-section",{staticClass:"col"},[o("div",{staticClass:"text-subtitle2 text-white"},[t._v("\n                Total\n                "),o("q-icon",{attrs:{color:"yellow",name:"trending_up"}})],1),o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs text-white"},[o("countTo",{attrs:{startVal:706198,endVal:756268,duration:1500}}),t._v("\n                ¥\n              ")],1)]),o("q-card-section",{staticClass:"col"},[o("div",{staticStyle:{height:"100%",width:"150px"}},[o("v-chart",{attrs:{options:t.total}})],1)])],1)],1)],1),o("div",{staticClass:"col-xs-12 col-md-9"},[o("q-card",{staticClass:"cimo-shadow col-11",staticStyle:{height:"100%","min-height":"390px",padding:"3px"}},[o("v-chart",{attrs:{options:t.charts2Option,autoresize:""}})],1)],1)]),o("div",{staticClass:"row q-col-gutter-md"},[o("div",{staticClass:"col-xs-12 col-md-3"},[o("q-card",{staticClass:"cimo-shadow",staticStyle:{height:"430px",width:"100%",padding:"3px"}},[o("v-chart",{attrs:{options:t.chartPie,autoresize:""}})],1)],1),o("div",{staticClass:"col-xs-12 col-md-3"},[o("q-card",{staticClass:"my-card cimo-shadow"},[o("q-img",{attrs:{src:this.$PUBLIC_PATH+"data/bird.jpg"}}),o("q-card-section",[o("div",{staticClass:"text-overline text-orange-9"},[t._v("Overline")]),o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Title")])]),o("q-card-actions",[o("q-btn",{attrs:{flat:"",color:"dark",label:"Share"}}),o("q-btn",{attrs:{flat:"",color:"primary",label:"Book"}}),o("q-space"),o("q-btn",{attrs:{color:"grey",round:"",flat:"",dense:"",icon:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:function(e){t.expanded=!t.expanded}}})],1),o("q-slide-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}]},[o("q-separator"),o("q-card-section",{staticClass:"text-subitle2"},[t._v("\n                "+t._s(t.lorem)+"\n              ")])],1)])],1)],1),o("div",{staticClass:"col-xs-12 col-md-6"},[o("q-table",{staticClass:"cimo-shadow",staticStyle:{height:"430px"},attrs:{grid:t.$q.screen.xs,title:"Treats",data:t.data,columns:t.columns,filter:t.filter,"row-key":"name"},scopedSlots:t._u([{key:"top-right",fn:function(){return[o("q-input",{attrs:{dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e}},[o("q-td",{key:"name",attrs:{props:e}},[t._v(t._s(e.row.name))]),o("q-td",{key:"calories",attrs:{props:e}},[t._v(t._s(e.row.calories))]),o("q-td",{key:"fat",attrs:{props:e}},[t._v(t._s(e.row.fat))]),o("q-td",{key:"carbs",attrs:{props:e}},[t._v(t._s(e.row.carbs))]),o("q-td",{key:"operating",attrs:{props:e}},[o("q-btn",{staticClass:"btn-table text-white",attrs:{icon:"tune",label:"详情"},on:{click:function(o){return t.handleTableClick(e.row)}}})],1)],1)]}}])})],1)])])])},r=[],s=(o("b0c0"),o("ec1b")),i=o.n(s),l=o("b0dd"),n=o("4d4c"),c=(o("99af"),o("4160"),o("a15b"),o("4e82"),o("159b"),[{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"rgba(51,192,205,0.01)"},{offset:1,color:"rgba(51,192,205,0.57)"}],globalCoord:!1},{type:"linear",x:1,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(115,172,255,0.02)"},{offset:1,color:"rgba(115,172,255,0.67)"}],globalCoord:!1},{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(158,135,255,0.02)"},{offset:1,color:"rgba(158,135,255,0.57)"}],globalCoord:!1},{type:"linear",x:0,y:1,x2:0,y2:0,colorStops:[{offset:0,color:"rgba(252,75,75,0.01)"},{offset:1,color:"rgba(252,75,75,0.57)"}],globalCoord:!1},{type:"linear",x:1,y:1,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(253,138,106,0.01)"},{offset:1,color:"#FDB36ac2"}],globalCoord:!1},{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"rgba(254,206,67,0.12)"},{offset:1,color:"#FECE4391"}],globalCoord:!1}]),d=["#33C0CD","#73ACFF","#9E87FF","#FE6969","#FDB36A","#FECE43"];function f(){var t={};return d.forEach((function(e,o){t["hr".concat(o)]={backgroundColor:d[o],borderRadius:3,width:3,height:3,padding:[3,3,0,-12]},t["a".concat(o)]={padding:[8,-60,-20,-20],color:d[o],fontSize:12}})),t}var h=[{name:"北京",value:25},{name:"上海",value:20},{name:"广州",value:18},{name:"深圳",value:15},{name:"未知",value:13},{name:"海外",value:9}].sort((function(t,e){return e.value-t.value}));h.forEach((function(t,e){t.labelLine={lineStyle:{width:1,color:d[e]}}}));var b={series:[{type:"pie",radius:"60%",center:["50%","50%"],clockwise:!0,avoidLabelOverlap:!0,label:{show:!0,position:"outside",formatter:function(t){var e=t.name,o=t.percent+"%",a=t.dataIndex;return["{a".concat(a,"|").concat(e,"：").concat(o,"}"),"{hr".concat(a,"|}")].join("\n")},rich:f()},itemStyle:{normal:{color:function(t){return c[t.dataIndex]}}},data:h,roseType:"radius"}]},m=b,p=o("3eba"),u=["#9E87FF","#73DDFF","#fe9a8b","#F56948","#9E87FF"],y={backgroundColor:"#fff",title:{text:"全国6月销售统计",textStyle:{fontSize:12,fontWeight:400},left:"center",top:"5%"},legend:{icon:"circle",top:"5%",right:"5%",itemWidth:6,itemGap:20,textStyle:{color:"#556677"}},tooltip:{trigger:"axis",axisPointer:{label:{show:!0,backgroundColor:"#fff",color:"#556677",borderColor:"rgba(0,0,0,0)",shadowColor:"rgba(0,0,0,0)",shadowOffsetY:0},lineStyle:{width:0}},backgroundColor:"#fff",textStyle:{color:"#5c6c7c"},padding:[10,10],extraCssText:"box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)"},grid:{top:"15%"},xAxis:[{type:"category",data:["北京","上海","广州","深圳","香港","澳门","台湾","南宁","海外"],axisLine:{lineStyle:{color:"#DCE2E8"}},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{color:"#556677"},fontSize:12,margin:15},axisPointer:{label:{padding:[0,0,10,0],margin:15,fontSize:12,backgroundColor:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fff"},{offset:.86,color:"#fff"},{offset:.86,color:"#33c0cd"},{offset:1,color:"#33c0cd"}],global:!1}}},boundaryGap:!1}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},axisLabel:{textStyle:{color:"#556677"}},splitLine:{show:!1}},{type:"value",position:"right",axisTick:{show:!1},axisLabel:{textStyle:{color:"#556677"},formatter:"{value}"},axisLine:{show:!0,lineStyle:{color:"#DCE2E8"}},splitLine:{show:!1}}],series:[{name:"Adidas",type:"line",data:[10,10,30,12,15,3,7,9,8],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new p.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#9effff"},{offset:1,color:"#9E87FF"}]),shadowColor:"rgba(158,135,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:u[0],borderColor:u[0]}}},{name:"Nike",type:"line",data:[5,12,11,14,25,16,10,19,25],symbolSize:1,symbol:"circle",smooth:!0,yAxisIndex:0,showSymbol:!1,lineStyle:{width:5,color:new p.graphic.LinearGradient(1,1,0,0,[{offset:0,color:"#73DD39"},{offset:1,color:"#73DDFF"}]),shadowColor:"rgba(115,221,255, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:u[1],borderColor:u[1]}}},{name:"老北京布鞋",type:"line",data:[150,120,170,140,500,160,110,95,165],symbolSize:1,yAxisIndex:1,symbol:"circle",smooth:!0,showSymbol:!1,lineStyle:{width:5,color:new p.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#fe9a"},{offset:1,color:"#fe9a8b"}]),shadowColor:"rgba(254,154,139, 0.3)",shadowBlur:10,shadowOffsetY:20},itemStyle:{normal:{color:u[2],borderColor:u[2]}}}]},x=y,g={xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1},series:[{data:[10,50,36,85,98,72,79,88,80],type:"line",smooth:!0,show:!1,symbol:"none",animationDuration:1e3,itemStyle:{normal:{lineStyle:{color:"#ffffff"}}}}]},w={xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1},series:[{data:[50,42,36,78,56,72,20,15,35],type:"line",smooth:!0,show:!1,symbol:"none",animationDuration:1e3,itemStyle:{normal:{lineStyle:{color:"#ffffff"}}}}]},S={xAxis:{type:"category",show:!1},yAxis:{type:"value",show:!1},series:[{data:[30,45,64,78,79,80,75,70,90],type:"line",smooth:!0,show:!1,symbol:"none",animationDuration:1e3,itemStyle:{normal:{lineStyle:{color:"#ffffff"}}}}]},v=o("3eba"),C={backgroundColor:"#fff",grid:{top:"100",right:"40",left:"60",bottom:"40"},xAxis:[{type:"category",color:"#59588D",data:["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8"],axisLabel:{margin:10,color:"#999",textStyle:{fontSize:12}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1}}],yAxis:[{axisLabel:{formatter:"{value}%",color:"#999",textStyle:{fontSize:12}},axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}},axisTick:{show:!1},splitLine:{lineStyle:{color:"rgba(131,101,101,0.2)",type:"dashed"}}}],series:[{type:"bar",data:[40,80,50,36,30,35,40,60],barWidth:"16px",itemStyle:{normal:{color:function(t){var e=t.value>0?["#55d1ff","#2d82ff"]:["rgba(0,0,0,0)","rgba(0,0,0,0)"];return new v.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e[0]},{offset:1,color:e[1]}],!1)},barBorderRadius:[30,30,0,0]}},label:{normal:{show:!0,fontSize:16,fontWeight:"bold",color:"#333",position:"top"}}},{data:[40,60,40,36,30,35,40,60],type:"line",smooth:!0,name:"折线图",symbol:"none",lineStyle:{color:"#3275FB",width:3,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:10,shadowOffsetY:10},areaStyle:{normal:{color:new v.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(73, 86, 255, 0.5)"},{offset:1,color:"rgba(255, 255, 255, 0.1)"}],!1)}}}]},q=C,k={name:"home",components:{BaseContent:l["a"],countTo:i.a},data:function(){return{expanded:!1,chartPie:m,chartZ:q,charts2Option:x,income:g,expense:w,total:S,thumbStyle:n["a"],lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",filter:"",columns:[{name:"name",required:!0,label:"Dessert (100g serving)",align:"left",field:function(t){return t.name},format:function(t){return"".concat(t)},sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"operating",label:"operating",align:"center",field:"operating",sortable:!0}],data:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37},{name:"Eclair",calories:262,fat:16,carbs:23},{name:"Cupcake",calories:305,fat:3.7,carbs:67},{name:"Gingerbread",calories:356,fat:16,carbs:49},{name:"Jelly bean",calories:375,fat:0,carbs:94},{name:"Lollipop",calories:392,fat:.2,carbs:98},{name:"Honeycomb",calories:408,fat:3.2,carbs:87},{name:"Donut",calories:452,fat:25,carbs:51},{name:"KitKat",calories:518,fat:26,carbs:65}]}},methods:{handleTableClick:function(t){this.$router.push({path:"tableDetail/".concat(t.name)})}}},_=k,T=(o("2b8e"),o("2877")),F=o("f09f"),L=o("a370"),A=o("0016"),Q=o("068f"),E=o("4b7e"),D=o("9c40"),B=o("2c91"),P=o("e9c1"),z=o("eb85"),I=o("eaac"),O=o("27f9"),$=o("bd08"),G=o("db86"),j=o("eebe"),J=o.n(j),V=Object(T["a"])(_,a,r,!1,null,"4a606baa",null);e["default"]=V.exports;J()(V,"components",{QCard:F["a"],QCardSection:L["a"],QIcon:A["a"],QImg:Q["a"],QCardActions:E["a"],QBtn:D["a"],QSpace:B["a"],QSlideTransition:P["a"],QSeparator:z["a"],QTable:I["a"],QInput:O["a"],QTr:$["a"],QTd:G["a"]})},"2b8e":function(t,e,o){"use strict";o("9793")},"4d4c":function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return r}));var a={right:"5px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},r={borderRadius:"5px",backgroundColor:"rgba(144,147,153,0.9)",padding:"10px;",margin:"10px;",width:"3px"}},9793:function(t,e,o){},b0dd:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-content"},[o("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"100%"},attrs:{"thumb-style":t.thumbStyle,visible:!1}},[t._t("default")],2)],1)},r=[],s=(o("dca8"),o("4d4c")),i={name:"BaseContent",data:function(){return{thumbStyle:s["a"],BasePath:""}},props:["position"],methods:{ScrollToPosition:function(t){this.$refs.scrollArea.setScrollPosition(t,300)},getPosition:function(){return this.$refs.scrollArea.getScrollPosition()}},mounted:function(){this.BasePath=this.$route.path,Object.freeze(this.BasePath);var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},deactivated:function(){window.sessionStorage.setItem(this.BasePath,JSON.stringify({listScrollTop:this.getPosition()}))},activated:function(){var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},destroyed:function(){sessionStorage.removeItem(this.BasePath)}},l=i,n=o("2877"),c=o("4983"),d=o("eebe"),f=o.n(d),h=Object(n["a"])(l,a,r,!1,null,null,null);e["a"]=h.exports;f()(h,"components",{QScrollArea:c["a"]})}}]);