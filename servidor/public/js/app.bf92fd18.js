(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)o=r[u],n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"288a":function(t,e,a){t.exports=a.p+"img/siTerminada.11659a5f.png"},"2d83":function(t,e,a){},"3d0c":function(t,e,a){},"4b07":function(t,e,a){},"55c6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var s=a("2b0e"),n=a("9f7b");a("ab8b"),a("2dd8");s["default"].use(n["a"]);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"router",attrs:{to:"/"}},[t._v("Inicio")]),t._v(" |\n    "),a("router-link",{staticClass:"router",attrs:{to:"/meteo"}},[t._v("Meteosat")])],1),a("keep-alive",[a("router-view")],1),a("notifications",{attrs:{group:"foo"}}),a("div",[a("beautiful-chat",{attrs:{participants:t.participants,titleImageUrl:t.titleImageUrl,onMessageWasSent:t.onMessageWasSent,messageList:t.messageList,newMessagesCount:t.newMessagesCount,isOpen:t.isChatOpen,close:t.closeChat,open:t.openChat,showEmoji:!0,showFile:!0,showTypingIndicator:t.showTypingIndicator,colors:t.colors,alwaysScrollToBottom:t.alwaysScrollToBottom,messageStyling:t.messageStyling}})],1)],1)},o=[];function r(t){return d(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var u={name:"app",data:function(){return{participants:[],titleImageUrl:"https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",messageList:[],newMessagesCount:0,isChatOpen:!1,showTypingIndicator:"",userName:"",colors:{header:{bg:"#4e8cff",text:"#ffffff"},launcher:{bg:"#4e8cff"},messageList:{bg:"#ffffff"},sentMessage:{bg:"#4e8cff",text:"#ffffff"},receivedMessage:{bg:"#eaeaea",text:"#222222"},userInput:{bg:"#f4f7f9",text:"#565867"}},alwaysScrollToBottom:!1,messageStyling:!0}},methods:{sendMessage:function(t){t.length>0&&(this.newMessagesCount=this.isChatOpen?this.newMessagesCount:this.newMessagesCount+1,console.log(this.user),this.onMessageWasSent({type:"text",author:this.nick,data:{text:t}}))},onMessageWasSent:function(t){this.messageList=[].concat(r(this.messageList),[t]),this.$socket.emit("newMessage",JSON.stringify(this.messageList))},openChat:function(){this.isChatOpen=!0,this.newMessagesCount=0},closeChat:function(){this.isChatOpen=!1}},sockets:{chatUsers:function(t){this.participants=JSON.parse(t),this.$socket.emit("allParticipants",this.participants)},newUser:function(t){this.nick=t},initialMessages:function(t){this.messageList=JSON.parse(t)},actMessagesList:function(t){this.messageList=JSON.parse(t)}}},f=u,p=(a("034f"),a("2877")),h=Object(p["a"])(f,i,o,!1,null,null,null);h.options.__file="App.vue";var m=h.exports,g=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("Section"),a("Footer")],1)},v=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{attrs:{id:"tituloHeader"}},[t._v("Proyecto Vue.js - Sergio Suárez")])},y=[],C={name:"Header"},w=C,k=(a("bf0e"),Object(p["a"])(w,_,y,!1,null,"3ef223df",null));k.options.__file="Header.vue";var S=k.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return""==this.nick?s("div",{staticClass:"login page"},[s("div",{staticClass:"form"},[s("h3",{staticClass:"title"},[t._v("Introduce un nick")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nickModel,expression:"nickModel"}],staticClass:"usernameInput",attrs:{type:"text",maxlength:"14"},domProps:{value:t.nickModel},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.anadirNick(e):null},input:function(e){e.target.composing||(t.nickModel=e.target.value)}}})])]):s("div",{attrs:{id:"nota"}},[s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tareaModel,expression:"tareaModel"}],staticClass:"form-control",attrs:{id:"tarea",placeholder:"    ¿Qué quieres recordar?",type:"text",name:"tarea"},domProps:{value:t.tareaModel},on:{keyup:function(e){return"button"in e||13===e.keyCode?t.nuevaNota(e):null},input:function(e){e.target.composing||(t.tareaModel=e.target.value)}}})]),s("div",{attrs:{id:"contadoresTareas"}},[s("hr"),s("i",{staticClass:"fas fa-chart-bar"}),t._v(t._s(t.notasPendientes())+" Tareas pendientes de un total de "+t._s(t.notas.length)+" | "),s("i",{staticClass:"glyphicon glyphicon-remove",on:{click:t.borrarCompletadas}}),s("span",{attrs:{id:"borrarCompletadas"},on:{click:t.borrarCompletadas}},[t._v("Borras tareas completadas")]),s("hr")]),s("div",[s("ul",{staticClass:"list-group"},[s("transition-group",{attrs:{name:"fade"}},t._l(t.ordenar,function(e){return s("li",{key:e.tituloTarea,staticClass:"list-group-item li"},[s("div",{staticClass:"d-flex bd-highlight mb-3"},[e.completada?s("span",{staticClass:"check"},[s("img",{staticClass:"imagenEstado",attrs:{src:a("288a")},on:{click:function(a){t.modoIncompleta(e)}}})]):s("span",{staticClass:"check"},[s("img",{staticClass:"imagenEstado",attrs:{src:a("7c3c")},on:{click:function(a){t.modoCompleta(e)}}})]),e.completada?s("h1",{staticClass:"p-2 bd-highlight textoTareaCompletada"},[t._v(t._s(e.tituloTarea))]):s("h1",{staticClass:"p-2 bd-highlight "},[t._v(t._s(e.tituloTarea))]),s("img",{staticClass:"ml-auto",attrs:{id:"botonBorrar",src:a("f167")},on:{click:function(a){t.borrarNota(e)}}})]),s("div",{staticClass:"text-secondary"},[t._v("Prioridad:\n                        "),"Low"==e.prioridad?s("button",{staticClass:"btn btn-info btn-sm prioridad",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-angle-down"}),t._v("Low\n                        ")]):s("button",{staticClass:"btn btn-secondary btn-sm prioridad",attrs:{type:"button"},on:{click:function(a){t.prioridadLow(e)}}},[s("i",{staticClass:"fas fa-angle-down"}),t._v("Low\n                        ")]),"Normal"==e.prioridad?s("button",{staticClass:"btn btn-primary btn-sm prioridad",attrs:{type:"button"}},[t._v("Normal\n                        ")]):s("button",{staticClass:"btn btn-secondary btn-sm prioridad",attrs:{type:"button"},on:{click:function(a){t.prioridadNormal(e)}}},[t._v("Normal\n                        ")]),"High"==e.prioridad?s("button",{staticClass:"btn btn-danger btn-sm prioridad",attrs:{type:"button"}},[s("i",{staticClass:"fas fa-angle-up"}),t._v("High\n                        ")]):s("button",{staticClass:"btn btn-secondary btn-sm prioridad",attrs:{type:"button"},on:{click:function(a){t.prioridadHigh(e)}}},[s("i",{staticClass:"fas fa-angle-up"}),t._v("High\n                        ")]),s("span",{attrs:{id:"spanTiempo"}},[s("i",{staticClass:"fas far fa-clock"}),t._v(" Añadido hace "+t._s(e.fechaCreacion)+" minutos |")]),s("span",[t._v(" Creado por "+t._s(e.nick))]),s("div",{staticClass:"subirArchivo"},[s("input",{attrs:{type:"file"},on:{change:t.onFileSelected}}),s("button",{on:{click:t.onUpload}},[t._v("Subir")])])])])}),0)],1)]),s("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),s("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossorigin:"anonymous"}})])},N=[],O=a("bc3a"),x=a.n(O),T={name:"Section",data:function(){return{notas:[],tareaModel:"",tareaPrioridad:[],nickModel:"",nick:"",selectedFile:null}},methods:{nuevaNota:function(){var t=this.tareaModel,e=(new Date).toLocaleString(),a="Low",s=!1,n=this.nick,i=this.selectedFile;this.notas.push({tituloTarea:t,fechaCreacion:e,prioridad:a,completada:s,nick:n,selectedFile:i}),this.tareaModel="",this.$socket.emit("subirNotas",JSON.stringify(this.notas))},anadirNick:function(){this.nick=this.nickModel},onFileSelected:function(t){this.selectedFile=t.target.files[0]},onUpload:function(){var t=new FormData;t.append("archivo",this.selectedFile,this.selectedFile.name),x.a.post("http://localhost:3000/archivosSubidos",t).then(function(t){console.log(t)})},borrarNota:function(t){for(var e=this.notas,a=0;a<e.length;a++)e[a]==t&&e.splice(a,1);this.$socket.emit("subirNotas",JSON.stringify(this.notas))},modoCompleta:function(t){t.completada=!0,this.$socket.emit("subirNotas",JSON.stringify(this.notas))},modoIncompleta:function(t){t.completada=!1,this.$socket.emit("subirNotas",JSON.stringify(this.notas))},notasPendientes:function(){for(var t=0,e=0;e<this.notas.length;e++)0==this.notas[e].completada&&t++;return t},prioridadLow:function(t){t.prioridad="Low",this.$socket.emit("subirNotas",JSON.stringify(this.notas))},prioridadNormal:function(t){t.prioridad="Normal",this.$socket.emit("subirNotas",JSON.stringify(this.notas))},prioridadHigh:function(t){t.prioridad="High",this.$socket.emit("subirNotas",JSON.stringify(this.notas))},borrarCompletadas:function(){for(var t=0;t<this.notas.length;t++)1==this.notas[t].completada&&this.notas.splice(t,1);this.$socket.emit("subirNotas",JSON.stringify(this.notas))}},computed:{ordenar:function(){this.arrayOrdenado=[];for(var t=0;t<this.notas.length;t++)"High"==this.notas[t].prioridad&&this.arrayOrdenado.push(this.notas[t]);for(var e=0;e<this.notas.length;e++)"Normal"==this.notas[e].prioridad&&this.arrayOrdenado.push(this.notas[e]);for(var a=0;a<this.notas.length;a++)"Low"==this.notas[a].prioridad&&this.arrayOrdenado.push(this.notas[a]);return this.arrayOrdenado}},sockets:{cargarNotas:function(t){this.notas=JSON.parse(t),this.$notify({group:"foo",title:"Notas cargadas",text:"Se han cargado todas las notas"})},subirNotas:function(){var t=JSON.parse(this.notas);socket.emit("actualizando",t),this.$notify({group:"foo",title:"Notas actualizadas",text:"Se han actualizado las notas al servidor"})}}},L=T,j=(a("9658"),Object(p["a"])(L,M,N,!1,null,"3c2dc163",null));j.options.__file="Section.vue";var H=j.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-secondary",attrs:{id:"footer"}},[t._v("Desarrollado por Sergio Suárez."),a("br"),t._v(" Código disponible en "),a("a",{attrs:{id:"enlaceGithub",href:"https://github.com/SergioSuaGar"}},[t._v("GitHub.")])])}],F={name:"Footer"},J=F,E=(a("6fda"),Object(p["a"])(J,$,P,!1,null,"3d8694de",null));E.options.__file="Footer.vue";var I=E.exports,U={name:"home",components:{Header:S,Section:H,Footer:I}},A=U,W=Object(p["a"])(A,b,v,!1,null,null,null);W.options.__file="Home.vue";var B=W.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"meteo"},[a("Header"),a("Meteo"),a("Footer")],1)},z=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"weather"}},[a("span",[t._v("Tiempo actual: "+t._s(t.overcast))]),a("br"),a("h1",[t._v(t._s(t.name))]),a("span",{staticClass:"temperature"},[t._v("Temperatura: "+t._s(t.currentTemp)+"°")]),a("br"),a("span",{attrs:{id:"temp-values"}},[t._v("Min "+t._s(t.minTemp)+"° "),a("br"),t._v(" Max "+t._s(t.maxTemp)+"°")])]),a("div",{attrs:{id:"info"}},[a("span",[t._v("Hora del amanecer: "+t._s(t.sunrise))]),a("br"),a("span",[t._v("Hora de la puesta de sol: "+t._s(t.sunset))]),a("br"),a("span",[t._v("Humedad: "+t._s(t.humidity))]),a("br"),a("span",[t._v("Presión: "+t._s(t.pressure))]),a("br"),a("span",[t._v("Viento: "+t._s(t.wind))]),a("br")])])},q=[],Z="http://api.openweathermap.org/data/2.5/weather?units=metric",Q="&APPID=3f3ed20033a1da9fba1669fe6a90588d",R={name:"Meteo",data:function(){return{currentTemp:"",name:"",minTemp:"",maxTemp:"",sunrise:"",sunset:"",pressure:"",humidity:"",wind:"",overcast:"",location:""}},methods:{getWeather:function(t){var e=this;x.a.get(t).then(function(t){e.name=t.data.name,e.currentTemp=t.data.main.temp,e.minTemp=t.data.main.temp_min,e.maxTemp=t.data.main.temp_max,e.pressure=t.data.main.pressure,e.humidity=t.data.main.humidity+"%",e.wind=t.data.wind.speed+"m/s",e.overcast=t.data.weather[0].description,e.sunrise=new Date(1e3*t.data.sys.sunrise).toLocaleTimeString("en-GB").slice(0,4),e.sunset=new Date(1e3*t.data.sys.sunset).toLocaleTimeString("en-GB").slice(0,4)}).catch(function(t){console.log(t)})},geolocation:function(){navigator.geolocation.getCurrentPosition(this.buildUrl,this.geoError)},buildUrl:function(t){var e=t.coords.latitude,a=t.coords.longitude;this.getWeather(Z+"&lat="+e+"&lon="+a+Q)},geoError:function(t){this.getWeather(Z+"&lat=0&lon=0"+Q)}},beforeMount:function(){this.geolocation()}},V=R,K=(a("cb08"),Object(p["a"])(V,G,q,!1,null,"32259bb1",null));K.options.__file="Meteo.vue";var X=K.exports,Y={name:"meteo",components:{Header:S,Meteo:X,Footer:I}},tt=Y,et=Object(p["a"])(tt,D,z,!1,null,"3b591fbd",null);et.options.__file="Meteo.vue";var at=et.exports;s["default"].use(g["a"]);var st=new g["a"]({routes:[{path:"/",name:"home",component:B},{path:"/home",name:"home",component:B},{path:"/meteo",name:"meteo",component:at}]}),nt=a("5132"),it=a.n(nt),ot=a("c718"),rt=a("ee98"),ct=a.n(rt);s["default"].use(ot["a"]),s["default"].use(ct.a),s["default"].use(new it.a({debug:!0,connection:"http://localhost:3000"})),s["default"].config.productionTip=!1,new s["default"]({router:st,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,a){},"6fda":function(t,e,a){"use strict";var s=a("4b07"),n=a.n(s);n.a},"7c3c":function(t,e,a){t.exports=a.p+"img/noTerminada.cdd265b1.png"},9658:function(t,e,a){"use strict";var s=a("3d0c"),n=a.n(s);n.a},bf0e:function(t,e,a){"use strict";var s=a("55c6"),n=a.n(s);n.a},cb08:function(t,e,a){"use strict";var s=a("2d83"),n=a.n(s);n.a},f167:function(t,e,a){t.exports=a.p+"img/borrar.51a7d681.png"}});
//# sourceMappingURL=app.bf92fd18.js.map