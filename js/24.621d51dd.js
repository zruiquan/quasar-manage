(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{f993:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{margin:"10px",height:"calc(100vh - 105px)"}},[e("v-md-editor",{attrs:{height:"100%"},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)},a=[],c={name:"markdown",data:function(){return{content:""}},methods:{getMsg:function(){var t=this,n={url:this.$PUBLIC_PATH+"data/markdownData.md",method:"get",responseType:"text"};this.$fetchData(n).then((function(n){t.content=n.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getMsg()}},i=c,s=e("2877"),r=Object(s["a"])(i,o,a,!1,null,null,null);n["default"]=r.exports}}]);