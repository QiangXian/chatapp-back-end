(function(t){function e(e){for(var n,a,i=e[0],u=e[1],c=e[2],f=0,h=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var u=s[i];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("85ec"),r=s.n(n);r.a},"08f3":function(t,e,s){"use strict";var n=s("e792"),r=s.n(n);r.a},1:function(t,e){},"293c":function(t,e,s){},"3a49":function(t,e,s){"use strict";var n=s("293c"),r=s.n(n);r.a},"3c6b":function(t,e,s){"use strict";var n=s("e51d"),r=s.n(n);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[null==t.$root.me?s("choose-user",{attrs:{userlist:t.userlist}}):t._e(),null!=t.$root.me?s("user-list",{attrs:{chooseUser:t.chooseUser,islogin:t.islogin,users:t.users,unreadlist:t.unreadlist}}):t._e(),t.ischat?s("chat-user",{attrs:{touser:t.touser,closeChat:t.closeChat,newsMsg:t.newsMsg}}):t._e()],1)},o=[],a=(s("4160"),s("c975"),s("a434"),s("159b"),s("96cf"),s("1da1")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chooseUser"},[s("h1",[t._v("请选择你聊天的角色")]),s("div",{staticClass:"list"},t._l(t.userlist,(function(e,n){return s("div",{key:n,staticClass:"item",on:{click:function(s){return t.chooseEvent(e)}}},[s("img",{attrs:{src:e.headerimg}}),s("span",[t._v(t._s(e.username))])])})),0)])},u=[],c=s("ef27"),l=s.n(c),f=l.a.connect("http://localhost:3000"),h=f,m={props:["userlist"],methods:{chooseEvent:function(t){this.$root.me=t,localStorage.chatme=JSON.stringify(t),h.emit("login",t)}}},d=m,p=(s("08f3"),s("2877")),g=Object(p["a"])(d,i,u,!1,null,"ea08d146",null),v=g.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userlist"},[s("div",{staticClass:"nav"},[s("div",{staticClass:"headerimg",class:{online:!t.islogin}},[null!=t.$root.me?s("img",{attrs:{src:t.$root.me.headerimg,alt:""}}):t._e()]),s("div",{staticClass:"title"},[t._v("消息")]),s("div",{staticClass:"headerimg"})]),s("div",{staticClass:"users"},t._l(t.friends,(function(e,n){return s("div",{key:n,staticClass:"useritem",on:{click:function(s){return t.chooseUser(e)}}},[s("div",{staticClass:"left",class:{online:"true"==e.isonline,unread:-1!=t.unreadlist.indexOf(e.username)}},[s("img",{attrs:{src:e.headerimg,alt:""}})]),s("div",{staticClass:"right"},[s("span",{staticClass:"username"},[t._v(t._s(e.username))]),s("span",{staticClass:"msg"})])])})),0)])},_=[],S=(s("4de4"),{props:["islogin","users","chooseUser","unreadlist"],computed:{friends:function(){var t=this;return this.users.filter((function(e,s){return e.username!=t.$root.me.username}))}}}),y=S,C=(s("3a49"),Object(p["a"])(y,b,_,!1,null,"7ca76c14",null)),O=C.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chatuser"},[s("div",{staticClass:"header"},[s("span",{staticClass:"back",on:{click:t.closeChat}},[t._v("<")]),s("div",{staticClass:"senduser"},[t._v(t._s(t.touser.username))])]),s("div",{ref:"chatbox",staticClass:"chatlist"},t._l(t.chatlist,(function(e,n){return s("div",{key:n,staticClass:"chatItem",class:{self:t.$root.me.username==e.from.username}},[s("div",{staticClass:"headers"},[s("img",{attrs:{src:e.from.headerimg,alt:""}})]),s("div",{staticClass:"chatContent"},[t._v(t._s(e.content))])])})),0),s("div",{staticClass:"inputcom"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],attrs:{type:"text"},domProps:{value:t.inputData},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendEvent(e)},input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),s("button",{on:{click:t.sendEvent}},[t._v("发送")])])])},x=[],$={props:["touser","closeChat","newsMsg"],data:function(){return{chatlist:[],inputData:""}},methods:{sendEvent:function(){var t={from:this.$root.me,to:this.touser,content:this.inputData,time:(new Date).getTime()};h.emit("sendMsg",t),this.chatlist.push(t),this.saveStorage(),this.inputData=""},toBottom:function(){var t=this.$refs.chatbox;t.scrollTop=t.scrollHeight-t.clientHeight},saveStorage:function(){var t="chat-user-"+this.$root.me.username+"-"+this.touser.username;localStorage[t]=JSON.stringify(this.chatlist)},getStorage:function(){var t="chat-user-"+this.$root.me.username+"-"+this.touser.username;localStorage[t]=localStorage[t]?localStorage[t]:"[]";var e=JSON.parse(localStorage[t]);this.chatlist=e,console.log(this.chatlist)}},beforeMount:function(){this.getStorage(),h.emit("readMsg",{self:this.$root.me.username,username:this.touser.username})},mounted:function(){this.toBottom()},watch:{newsMsg:function(t){this.chatlist.push(t),this.saveStorage()}},updated:function(){this.toBottom()}},k=$,j=(s("3c6b"),Object(p["a"])(k,w,x,!1,null,"2fceb49c",null)),M=j.exports,E=s("82ae"),J=s.n(E),D={name:"App",data:function(){return{userlist:[],me:null,islogin:!1,users:[],ischat:!1,touser:null,unreadlist:[],newsMsg:null}},components:{chooseUser:v,userList:O,chatUser:M},beforeMount:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.a.get("http://localhost:3000/api/userlist");case 2:s=e.sent,t.userlist=s.data;case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;h.on("login",(function(e){"ok"==e.state&&(t.islogin=!0,h.emit("users"))})),h.on("unreadMsg",(function(e){e.forEach((function(e,s){e.from=t.usersObj[e.from],e.to=t.usersObj[e.to],t.unreadlist.push(e.from);var n="chat-user-"+t.$root.me.username+"-"+e.from.username;localStorage[n]=localStorage[n]?localStorage[n]:"[]";var r=JSON.parse(localStorage[n]);r.push(e),localStorage[n]=JSON.stringify(r)})),console.log(t)})),h.on("accept",(function(e){if(1==t.ischat&&e.from.username==t.touser.username||e.to.username==t.touser.username&&"true"==e.to.isgroup)t.newsMsg=e;else{var s="chat-user-"+t.$root.me.username+"-"+e.from.username;localStorage[s]=localStorage[s]?localStorage[s]:"[]";var n=JSON.parse(localStorage[s]);n.push(e),localStorage[s]=JSON.stringify(n),t.unreadlist.push(e.from.username)}})),h.on("logout",(function(e){console.log(e),t.islogin=!1,h.disconnect()})),h.on("disconnect",(function(t){console.log("断开连接")})),h.on("users",(function(e){t.users=e}))},methods:{chooseUser:function(t){this.touser=t,this.ischat=!0;var e=this.userlist.indexOf(t.username);this.unreadlist.splice(e,1)},closeChat:function(){this.ischat=!1}},computed:{usersObj:function(t){var e={};return this.users.forEach((function(t,s){e[t.username]=t})),console.log(e),e}}},N=D,P=(s("034f"),Object(p["a"])(N,r,o,!1,null,null,null)),U=P.exports;n["a"].config.productionTip=!1,new n["a"]({data:{me:null},render:function(t){return t(U)}}).$mount("#app")},"85ec":function(t,e,s){},e51d:function(t,e,s){},e792:function(t,e,s){}});
//# sourceMappingURL=app.bfae0397.js.map