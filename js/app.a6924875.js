(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var l=o[s];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/WebAppMyRoutesWithVue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2e96":function(t,e,o){},"32f8":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("md-app",{attrs:{"md-mode":"fixed"}},[o("md-app-toolbar",{staticClass:"md-primary"},[o("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showDrawer=!t.showDrawer}}},[o("md-icon",[t._v("menu")])],1),o("span",{staticClass:"md-title"},[t._v("My Routes")]),o("div",{staticClass:"md-toolbar-section-end"},[t.globals.recordingRoute?o("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.timerActive()}}},[o("md-icon",[t._v("timer")])],1):t._e()],1)],1),o("md-app-content",[o("router-view"),o("md-snackbar",{attrs:{"md-position":"left","md-duration":3e3,"md-active":t.snackBarRecording,"md-persistent":""},on:{"update:mdActive":function(e){t.snackBarRecording=e},"update:md-active":function(e){t.snackBarRecording=e}}},[o("span",[t._v("Recording... "+t._s(t.globals.timerTxt)+"!")])])],1)],1),o("md-bottom-bar",{attrs:{"md-sync-route":""}},[o("md-bottom-bar-item",{attrs:{to:"/home","md-label":"Home","md-icon":"home"}}),o("md-bottom-bar-item",{attrs:{to:"/routes","md-label":"Routes","md-icon":"search"}}),o("md-bottom-bar-item",{attrs:{to:"/map","md-label":"Map","md-icon":"room"}})],1),o("md-drawer",{attrs:{"md-active":t.showDrawer},on:{"update:mdActive":function(e){t.showDrawer=e},"update:md-active":function(e){t.showDrawer=e}}},[o("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[o("span",{staticClass:"md-title"},[t._v("Navigation")])]),o("md-list",[o("md-list-item",{attrs:{to:"/home"},on:{click:function(e){t.showDrawer=!1}}},[o("md-icon",[t._v("home")]),o("span",{staticClass:"md-list-item-text"},[t._v("Home")])],1),o("md-list-item",{attrs:{to:"/routes"},on:{click:function(e){t.showDrawer=!1}}},[o("md-icon",[t._v("search")]),o("span",{staticClass:"md-list-item-text"},[t._v("Rutas")])],1),o("md-list-item",{attrs:{to:"/map"},on:{click:function(e){t.showDrawer=!1}}},[o("md-icon",[t._v("room")]),o("span",{staticClass:"md-list-item-text"},[t._v("Map")])],1)],1)],1)],1)},a=[],r={titleRoute:"",recordingRoute:!1,timeInitRecord:null,intervalFun:null,timerTxt:"00:00:00",geoWatcher:null,route:{}},s=[];function l(){if(localStorage.getItem("routes")){var t=JSON.parse(localStorage.getItem("routes"));for(var e in t)t[e].ts=new Date(t[e].ts),s=t}else d()}function c(){localStorage.setItem("routes",JSON.stringify(s))}function u(t){s[0]?t.id=s[0].id+1:t.id=1,s.unshift(t),c()}function d(){if(0===s.length){var t={id:0,title:"Camino de la via Verde de Alcoy",ts:new Date,color:"#FFC107",visible:!0,positions:[{lat:38.690682,lng:-.489175},{lat:38.685797,lng:-.49362},{lat:38.683341,lng:-.498983},{lat:38.680445,lng:-.507188},{lat:38.677485,lng:-.504999},{lat:38.677427,lng:-.494381},{lat:38.678263,lng:-.48216},{lat:38.678813,lng:-.474796},{lat:38.683639,lng:-.47166},{lat:38.691693,lng:-.483748}]},e={id:0,title:'Ruta la cruz de alcoy desde el Romeral por "Els llansols',ts:new Date,color:"#FF5722",visible:!0,positions:[{lat:38.697364,lng:-.487534},{lat:38.697169,lng:-.490521},{lat:38.697672,lng:-.491832},{lat:38.700961,lng:-.492233},{lat:38.703612,lng:-.491934},{lat:38.704422,lng:-.491238}]},o={id:0,title:'Ruta de "Els canalons" desde Batoi por el rio Polop',ts:new Date,color:"#9C27B0",visible:!0,positions:[{lat:38.691203,lng:-.488148},{lat:38.685808,lng:-.493395},{lat:38.684165,lng:-.495841},{lat:38.684913,lng:-.49776},{lat:38.683282,lng:-.498895},{lat:38.684002,lng:-.501629},{lat:38.680369,lng:-.507521},{lat:38.679294,lng:-.519916},{lat:38.680087,lng:-.522191},{lat:38.680909,lng:-.523155},{lat:38.679396,lng:-.524915},{lat:38.680221,lng:-.527632}]};u(o),u(e),u(t)}}var m={name:"App",data:function(){return{showDrawer:!1,globals:r,snackBarRecording:!1,chargeBDFormLocalStorage:l}},created:function(){this.chargeBDFormLocalStorage()},methods:{timerActive:function(){this.snackBarRecording=!0}}},g=m,f=(o("5c0b"),o("2877")),h=Object(f["a"])(g,i,a,!1,null,null,null),p=h.exports,v=o("9483");Object(v["a"])("".concat("/WebAppMyRoutesWithVue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=o("8c4f"),R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[o("md-card",[o("md-card-content",[o("md-field",[o("label",[t._v("Title...")]),o("md-input",{attrs:{disabled:t.globals.recordingRoute},model:{value:t.globals.titleRoute,callback:function(e){t.$set(t.globals,"titleRoute",e)},expression:"globals.titleRoute"}})],1),o("md-button",{staticClass:"md-raised md-accent",on:{click:t.btnRecordRoute}},[t._v(t._s(t.btnText))]),t.globals.recordingRoute?o("div",{staticClass:"counter-timer"},[t._v("Recording... "+t._s(t.globals.timerTxt))]):t._e()],1)],1)],1)},w=[],_={name:"Home",data:function(){return{btnText:"",globals:r,routes:s,addRoute:u,saveRoutesArray:c}},created:function(){this.isRecording()},methods:{isRecording:function(){return this.globals.recordingRoute?this.btnText="Stop Route":this.btnText="Start Route"},btnRecordRoute:function(){var t=this;if(this.globals.recordingRoute)this.btnText="Start Route",navigator.geolocation.clearWatch(this.globals.geoWatcher),this.globals.geoWatcher=null;else{this.btnText="Stop Route",this.globals.timeInitRecord=new Date;var e={id:0,title:this.globals.titleRoute,ts:new Date,color:"#03A9F4",visible:!1,positions:[]};this.addRoute(e);var o={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};this.globals.geoWatcher=navigator.geolocation.watchPosition((function(e){var o={timestamp:e.timestamp,lat:e.coords.latitude,lng:e.coords.longitude};console.log(o),t.routes[0].positions.push(o),t.saveRoutesArray(),console.log(e),console.log(t.routes)}),(function(t){console.log(t)}),o)}this.globals.recordingRoute=!this.globals.recordingRoute,this.intervalTimer()},intervalTimer:function(){var t=this;this.globals.recordingRoute?(console.log("Hola"),this.globals.intervalFun=setInterval((function(){var e=new Date,o=e.getTime()-t.globals.timeInitRecord.getTime(),n=o/1e3;console.log(n);var i=Math.floor(n/3600),a=Math.floor((n-3600*i)/60),r=Math.round(n-3600*i-60*a);i<10&&(i="0"+i),a<10&&(a="0"+a),r<10&&(r="0"+r),t.globals.timerTxt=i+":"+a+":"+r}),1e3)):(clearInterval(this.globals.intervalFun),this.globals.intervalFun=null,this.globals.timerTxt="00:00:00",this.globals.timeInitRecord=null)}}},C=_,y=(o("cccb"),Object(f["a"])(C,R,w,!1,null,null,null)),k=y.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"routes"}},[t._l(t.routes,(function(e){return o("cardRoute",{key:e.id,attrs:{route:e},on:{remove:t.removeRoute,changeColor:t.changeColor,changeVisibility:t.changeVisibility}})})),o("md-snackbar",{attrs:{"md-position":"left","md-duration":3e3,"md-active":t.showNoDeleteRouteSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showNoDeleteRouteSnackbar=e},"update:md-active":function(e){t.showNoDeleteRouteSnackbar=e}}},[o("span",[t._v("You cannot delete the route while recording!")])])],2)},D=[],A=(o("c740"),o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("md-card",{style:{borderRightColor:t.route.color}},[o("md-card-content",[o("div",{staticClass:"md-title"},[t._v(t._s(t.route.title))]),o("div",{staticClass:"md-subhead"},[t._v(t._s(t.formatDate()))])]),o("md-card-actions",[o("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""},on:{click:t.onChangeVisibility}},[o("md-icon",[t._v(t._s(t.visibilityIcon))])],1),o("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""},on:{click:function(e){t.showColorDialog=!0}}},[o("md-icon",[t._v("color_lens")])],1),o("md-menu",{attrs:{"md-direction":"bottom-end"}},[o("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[o("md-icon",[t._v("more_vert")])],1),o("md-menu-content",[o("md-menu-item",{on:{click:function(e){t.edittingRoute=!0}}},[t._v("Edit")]),o("md-menu-item",{on:{click:function(e){t.deletingRoute=!0}}},[t._v("Delete")])],1)],1)],1),o("md-dialog",{attrs:{"md-active":t.showColorDialog,"md-fullscreen":!1},on:{"update:mdActive":function(e){t.showColorDialog=e},"update:md-active":function(e){t.showColorDialog=e}}},[o("swatches",{attrs:{colors:t.colors,shapes:"circles",inline:""},on:{input:t.onChangeColor},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),o("md-dialog-confirm",{attrs:{"md-active":t.deletingRoute,"md-title":"Delete Route","md-content":"Are you sure?","md-confirm-text":"Yes","md-cancel-text":"No"},on:{"update:mdActive":function(e){t.deletingRoute=e},"update:md-active":function(e){t.deletingRoute=e},"md-cancel":function(e){t.deletingRoute=!1},"md-confirm":function(e){return t.$emit("remove",t.route)}}}),o("md-dialog",{attrs:{"md-active":t.edittingRoute,"md-fullscreen":!0},on:{"update:mdActive":function(e){t.edittingRoute=e},"update:md-active":function(e){t.edittingRoute=e}}},[o("md-app",{attrs:{"md-mode":"fixed"}},[o("md-app-toolbar",{staticClass:"md-primary"},[o("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.edittingRoute=!1}}},[o("md-icon",[t._v("arrow_back")])],1),o("span",{staticClass:"md-title"},[t._v("Edit Route")])],1)],1),o("md-dialog-content",[o("route-details",{attrs:{route:t.route}}),o("div",{staticClass:"buttons"},[o("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.edittingRoute=!1}}},[t._v("ok")]),o("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.edittingRoute=!1}}},[t._v("Cancel")])],1)],1)],1)],1)}),S=[],F=o("468d"),O=o.n(F),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"routeDetails"}},[o("div",{staticClass:"dialog-title"},[t._v("Title:")]),o("md-field",[o("md-textarea",{model:{value:t.route.title,callback:function(e){t.$set(t.route,"title",e)},expression:"route.title"}})],1),o("div",{staticClass:"dialog-title"},[t._v("Route Date:")]),o("md-datepicker",{attrs:{"md-immediately":""},model:{value:t.route.ts,callback:function(e){t.$set(t.route,"ts",e)},expression:"route.ts"}})],1)},M=[],j={name:"RouteDetails",props:["route"]},I=j,$=(o("6754"),Object(f["a"])(I,T,M,!1,null,null,null)),B=$.exports,E=(o("2fac"),{name:"CardRoute",props:["route"],components:{Swatches:O.a,RouteDetails:B},data:function(){return{deletingRoute:!1,edittingRoute:!1,showColorDialog:!1,cardColor:this.route.color,color:this.route.color,colors:["#03A9F4","#3F51B5","#4CAF50","#FF5722","#FFC107","#9C27B0","#795548","#F44336"]}},computed:{visibilityIcon:function(){return this.route.visible?"visibility":"visibility_off"}},methods:{formatDate:function(){return this.route.ts.getDate()+"/"+(this.route.ts.getMonth()+1)+"/"+this.route.ts.getFullYear()},onChangeColor:function(t){this.$emit("changeColor",this.route,t),this.showColorDialog=!1},onChangeVisibility:function(){this.$emit("changeVisibility",this.route)}}}),N=E,P=(o("aac3"),Object(f["a"])(N,A,S,!1,null,null,null)),W=P.exports,V={name:"Routes",components:{cardRoute:W},data:function(){return{routes:s,saveRoutesArray:c,globals:r,showNoDeleteRouteSnackbar:!1}},methods:{findIndexRoute:function(t){return this.routes.findIndex((function(e){return e.id===t.id}))},removeRoute:function(t){var e=this.findIndexRoute(t);0===e&&this.globals.recordingRoute?this.showNoDeleteRouteSnackbar=!0:(this.routes.splice(e,1),this.saveRoutesArray())},changeColor:function(t,e){var o=this.findIndexRoute(t),n=this.routes[o];n.color=e,this.$set(this.routes,o,n),this.saveRoutesArray()},changeVisibility:function(t){var e=this.findIndexRoute(t),o=this.routes[e];o.visible=!o.visible,this.$set(this.routes,e,o),this.saveRoutesArray()}}},L=V,H=(o("7811"),Object(f["a"])(L,x,D,!1,null,null,null)),J=H.exports,Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"rawMap",attrs:{id:"map"}})},z=[],q=(o("d81d"),o("159b"),{name:"Map",data:function(){return{map:null,routes:s}},mounted:function(){this.loadMap(),this.loadRoutes()},methods:{loadMap:function(){var t=this.$refs.rawMap,e=new google.maps.LatLng(38.692362,-.484801),o={center:e,zoom:15};this.map=new google.maps.Map(t,o)},loadRoutes:function(){var t=this.map,e=!1;this.routes.forEach((function(o){if(o.visible){var n=o.positions.map((function(t){return new google.maps.LatLng(t.lat,t.lng)}));new google.maps.Polyline({path:n,map:t,strokeColor:o.color,strokeOpacity:1,strokeWeight:4});if(!e){var i=new google.maps.LatLng(o.positions[0].lat,o.positions[0].lng);t.panTo(i),e=!0}}}))}}}),G=q,K=(o("59db"),Object(f["a"])(G,Y,z,!1,null,null,null)),Q=K.exports;n["default"].use(b["a"]);var U=new b["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",component:k},{path:"/routes",component:J},{path:"/map",component:Q},{path:"*",redirect:"/"}]}),X=o("43f9"),Z=o.n(X);o("51de"),o("5d61");n["default"].use(Z.a),n["default"].config.productionTip=!1,new n["default"]({router:U,render:function(t){return t(p)}}).$mount("#app")},"59db":function(t,e,o){"use strict";var n=o("7d3f"),i=o.n(n);i.a},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),i=o.n(n);i.a},"5ced":function(t,e,o){},"5d61":function(t,e,o){},6754:function(t,e,o){"use strict";var n=o("2e96"),i=o.n(n);i.a},7811:function(t,e,o){"use strict";var n=o("cb25"),i=o.n(n);i.a},"7d3f":function(t,e,o){},"9c0c":function(t,e,o){},aac3:function(t,e,o){"use strict";var n=o("32f8"),i=o.n(n);i.a},cb25:function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),i=o.n(n);i.a}});
//# sourceMappingURL=app.a6924875.js.map