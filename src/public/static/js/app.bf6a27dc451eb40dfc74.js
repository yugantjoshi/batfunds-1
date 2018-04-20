webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=n("3EgV"),s=n.n(r),o=n("NYxO"),i=n("mtWM"),l=n.n(i);a.a.use(o.a);var c="http://167.99.238.2:8080",u=new o.a.Store({state:{currentUser:{},groups:[],members:[],currentGroup:{},paymentFlags:[]},actions:{GET_CURRENT_USER:function(t){l.a.get(c+"/getCurrentUser").then(function(e){t.commit("SET_CURRENT_USER",e.data)})},LOAD_GROUPS:function(t){l.a.get(c+"/api/user/groups/").then(function(e){t.commit("SET_GROUPS",e.data),t.dispatch("LOAD_MEMBERS"),t.dispatch("LOAD_PAYMENT_FLAGS")})},CREATE_GROUP:function(t,e){l.a.post(c+"/api/groups",{name:e.name,desc:e.desc}).then(function(e){t.dispatch("LOAD_GROUPS")})},LOAD_MEMBERS:function(t){l.a.get(c+"/api/groups/"+t.state.currentGroup.gid+"/users").then(function(e){t.commit("SET_MEMBERS",e.data)})},SET_CURRENT_GROUP:function(t,e){t.commit("SET_CURRENT_GROUP",e),t.dispatch("LOAD_MEMBERS"),t.dispatch("LOAD_PAYMENT_FLAGS")},ADD_MEMBER_TO_GROUP:function(t,e){l.a.post(c+"/api/groups/member/",{username:e,gid:t.state.currentGroup.gid}).then(function(e){t.dispatch("LOAD_MEMBERS")})},LOAD_PAYMENT_FLAGS:function(t){l.a.get(c+"/api/paymentflags/"+t.state.currentGroup.gid).then(function(e){t.commit("LOAD_PAYMENT_FLAGS",e.data)})},CREATE_PAYMENT_FLAG:function(t,e){l.a.post(c+"/api/raisepayment",{gid:t.state.currentGroup.gid,amount:e.amount,due:e.due,description:e.description}).then(function(e){t.dispatch("LOAD_PAYMENT_FLAGS")})},DELETE_GROUP:function(t,e){l.a.delete(c+"/api/groups/member/"+e).then(function(e){t.dispatch("LOAD_GROUPS")})},DELETE_PAYMENT_FLAG:function(t,e){l.a.delete(c+"/api/paymentflags/"+e).then(function(e){t.dispatch("LOAD_PAYMENT_FLAGS")})}},mutations:{SET_CURRENT_USER:function(t,e){t.currentUser=e},SET_GROUPS:function(t,e){t.groups=e.groups,t.currentGroup=e.groups[0]},SET_MEMBERS:function(t,e){t.members=e.users},SET_CURRENT_GROUP:function(t,e){t.currentGroup=e},LOAD_PAYMENT_FLAGS:function(t,e){t.paymentFlags=e.paymentflags}}}),d=(n("7zck"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"xs-12":""}},[n("v-card-title",{staticClass:"headline"},[t._v("Add Group")])],1),t._v(" "),n("v-flex",{attrs:{"xs-12":""}},[n("v-card-text",[n("span",[t._v("Please give this group a name and description.")])])],1),t._v(" "),n("v-flex",{attrs:{xs11:""}},[n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[n("v-text-field",{attrs:{label:"Group Name",rules:[function(t){return!!t||"Name is required"}],required:""},model:{value:t.groupName,callback:function(e){t.groupName=e},expression:"groupName"}}),t._v(" "),n("v-text-field",{attrs:{label:"Description","multi-line":"",rows:"2",rules:[function(t){return t.length<=400||"Max 400 characters"}],counter:400,required:""},model:{value:t.groupDesc,callback:function(e){t.groupDesc=e},expression:"groupDesc"}}),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.$emit("close")}}},[t._v("\n                      Cancel\n                  ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat",disabled:!t.formValid},nativeOn:{click:function(e){t.addGroup()}}},[t._v("\n                      Submit\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}),v=n("VU/8")({data:function(){return{formValid:!0}},methods:{addGroup:function(){this.groupName&&this.groupDesc&&(this.$store.dispatch("CREATE_GROUP",{name:this.groupName,desc:this.groupDesc}),this.$emit("close"))}},props:["show"]},d,!1,null,null,null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-tile",{attrs:{avatar:""},on:{click:t.updateGroupDetail}},[n("v-badge",{attrs:{left:"",overlap:"",color:"red"}},[n("v-list-tile-avatar",[n("v-icon",[t._v("group")])],1)],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.group.name))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(t.group.description))])],1)],1)},staticRenderFns:[]},m={data:function(){return{showAddGroupDialog:!1}},computed:{groups:function(){return this.$store.state.groups}},mounted:function(){this.$store.dispatch("LOAD_GROUPS")},components:{groupNavigationItem:n("VU/8")({data:function(){return{}},methods:{updateGroupDetail:function(){this.$store.dispatch("SET_CURRENT_GROUP",this.group)}},props:["group"]},p,!1,null,null,null).exports,addGroupDialog:v}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list",[n("v-subheader",[t._v("\n      Groups\n      "),n("v-btn",{attrs:{flat:"",small:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.showAddGroupDialog=!0}}},[n("v-icon",[t._v("add")])],1)],1),t._v(" "),n("addGroupDialog",{attrs:{show:t.showAddGroupDialog},on:{close:function(e){t.showAddGroupDialog=!1}}}),t._v(" "),t._l(t.groups,function(t,e){return n("groupNavigationItem",{key:t.uid,attrs:{group:t}})})],2)],1)},staticRenderFns:[]},_={name:"App",mounted:function(){this.$store.dispatch("GET_CURRENT_USER")},data:function(){return{drawer:null}},components:{navigation:n("VU/8")(m,f,!1,null,null,null).exports}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("navigation")],1),t._v(" "),n("v-toolbar",{attrs:{app:"","clipped-left":t.$vuetify.breakpoint.lgAndUp,fixed:""}},[n("v-btn",{attrs:{flat:"",icon:"",color:"indigo"},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("menu")])],1),t._v(" "),n("h1",{staticClass:"title"},[t._v("Batfunds")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-menu",{attrs:{bottom:"","offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[n("v-icon",[t._v("person")])],1),t._v(" "),n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-btn",{attrs:{flat:"",href:"/logout"}},[n("v-list-tile-title",[t._v("Logout")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(_,h,!1,function(t){n("yWWS")},null,null).exports,x=n("/ocq"),b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-chip",[e("v-icon",[this._v("person")]),this._v(" "),e("span",{staticClass:"ml-2"},[this._v(this._s(this.person.username))])],1)},staticRenderFns:[]};function E(t,e){return t+e}var D={data:function(){return{headers:[{text:"Requested By",align:"left",value:"username",sortable:!1},{text:"Amount",value:"amount"},{text:"Description",value:"description",sortable:!1},{text:"Due",value:"due"},{text:"Actions",sortable:!1,value:"actions"}]}},computed:{currentUser:function(){return this.$store.state.currentUser},currentGroup:function(){return this.$store.state.currentGroup},members:function(){return this.$store.state.members},items:function(){return this.$store.state.paymentFlags},groupTotal:function(){if(!this.items)return 0;var t=[];for(var e in this.items)this.items[e].payee==this.currentUser.uid?t.push(parseInt(this.items[e].amount)):t.push(-parseInt(this.items[e].amount));return t.reduce(E,0)}},methods:{deletePaymentFlag:function(t){this.$store.dispatch("DELETE_PAYMENT_FLAG",t)}},components:{personChip:n("VU/8")({props:["person"]},b,!1,null,null,null).exports}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentGroup?n("div",[n("h1",{staticClass:"title"},[t._v(t._s(t.currentGroup.name))]),t._v(" "),n("h3",{staticClass:"caption mt-2"},[t._v(t._s(t.currentGroup.description))]),t._v(" "),n("h1",{class:{"green--text":t.groupTotal>=0,"red--text":t.groupTotal<0}},[t._v("$"+t._s(t.groupTotal))]),t._v(" "),t._l(t.members,function(t){return n("personChip",{key:t.name,staticClass:"mt-4 mb-3 mr-3",attrs:{person:t}})}),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.user.username))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.amount))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.description))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.due))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[e.item.payee==t.currentUser.uid?n("v-btn",{attrs:{flat:"",icon:"",color:"red lighten-2"},nativeOn:{click:function(n){t.deletePaymentFlag(e.item.pid)}}},[n("v-icon",[t._v("delete")])],1):t._e()],1)]}}])})],2):t._e()},staticRenderFns:[]},G=n("VU/8")(D,w,!1,null,null,null).exports,R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"xs-12":""}},[n("v-card-title",{staticClass:"headline"},[t._v("Add Member")])],1),t._v(" "),n("v-flex",{attrs:{"xs-12":""}},[n("v-card-text",[t._v("\n            Type in a email address or username to add member to group.\n          ")])],1),t._v(" "),n("v-flex",{attrs:{xs11:""}},[n("v-card-text",[n("v-text-field",{attrs:{label:"Email/Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.$emit("close")}}},[t._v("\n            Cancel\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){return t.addMember(e)}}},[t._v("\n            Submit\n        ")])],1)],1)],1)],1)},staticRenderFns:[]},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Request Payment")]),t._v(" "),n("v-card-text",[n("v-subheader",[t._v("Amount")]),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs9:""}},[n("v-card-text",[n("v-slider",{attrs:{"thumb-label":"",step:"0.50",max:"150",ticks:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs3:""}},[n("v-text-field",{attrs:{prefix:"$"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card-text",[n("v-menu",{ref:"dateMenu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.dueDate},on:{"update:returnValue":function(e){t.dueDate=e}},model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Select Due Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}}),t._v(" "),n("v-date-picker",{attrs:{landscape:"",scrollable:""},model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.dateMenu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.dateMenu.save(t.dueDate)}}},[t._v("OK")])],1)],1)],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card-text",[n("v-text-field",{attrs:{label:"Description","multi-line":"",rows:"2",rules:[function(t){return t.length<=200||"Max 200 characters"}],counter:200,required:""},model:{value:t.paymentDesc,callback:function(e){t.paymentDesc=e},expression:"paymentDesc"}})],1)],1)],1),t._v(" "),n("v-subheader",[t._v("Who")]),t._v(" "),n("v-card-text",[n("p",{staticClass:"caption"},[t._v("Leave blank for entire group or add who you wish to request from.")]),t._v(" "),n("v-select",{attrs:{items:t.members,label:"Members",autocomplete:""}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.$emit("close")}}},[t._v("\n            Cancel\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){return t.raisepayment(e)}}},[t._v("\n            Submit\n        ")])],1)],1)],1)},staticRenderFns:[]},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Leave Group?")]),t._v(" "),n("v-card-text",[t._v("Do you want to exit this group? This action cannot be undone.")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.$emit("close")}}},[t._v("\n          Cancel\n      ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){return t.deleteGroup(e)}}},[t._v("\n        I Understand\n      ")])],1)],1)],1)},staticRenderFns:[]},y={data:function(){return{showAddMemberDialog:!1,showRaisePaymentDialog:!1,showExitDialog:!1}},props:[],components:{addMemberDialog:n("VU/8")({data:function(){return{}},methods:{addMember:function(){this.$store.dispatch("ADD_MEMBER_TO_GROUP",this.username),this.$emit("close")}},props:["show"]},R,!1,null,null,null).exports,raisePaymentDialog:n("VU/8")({data:function(){return{value:10,recurring:!1,dueDate:null,dateMenu:!1,paymentDesc:""}},computed:{members:function(){var t=[];for(var e in this.$store.state.members)t.push(this.$store.state.members[e].username);return t}},methods:{raisepayment:function(){var t={amount:this.value,due:this.dueDate,description:this.paymentDesc};this.$store.dispatch("CREATE_PAYMENT_FLAG",t),this.$emit("close")}},props:["show"]},A,!1,null,null,null).exports,exitGroupDialog:n("VU/8")({data:function(){return{}},methods:{deleteGroup:function(){this.$store.dispatch("DELETE_GROUP",this.$store.state.currentGroup.gid),this.$emit("close")}},props:["show"]},k,!1,null,null,null).exports}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-speed-dial",{attrs:{fixed:"",bottom:!0,right:!0,direction:t.top,"open-on-hover":!0},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-btn",{attrs:{slot:"activator",color:"indigo",fab:"",dark:"",hover:""},slot:"activator",model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-icon",[t._v("more_vert")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",color:"green"},nativeOn:{click:function(e){e.stopPropagation(),t.showAddMemberDialog=!0}}},[n("v-icon",[t._v("person_add")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",color:"orange"},nativeOn:{click:function(e){e.stopPropagation(),t.showRaisePaymentDialog=!0}}},[n("v-icon",[t._v("flag")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",color:"red"},nativeOn:{click:function(e){e.stopPropagation(),t.showExitDialog=!0}}},[n("v-icon",[t._v("exit_to_app")])],1)],1),t._v(" "),n("addMemberDialog",{attrs:{show:t.showAddMemberDialog},on:{close:function(e){t.showAddMemberDialog=!1}}}),t._v(" "),n("raisePaymentDialog",{attrs:{show:t.showRaisePaymentDialog},on:{close:function(e){t.showRaisePaymentDialog=!1}}}),t._v(" "),n("exitGroupDialog",{attrs:{show:t.showExitDialog},on:{close:function(e){t.showExitDialog=!1}}})],1)},staticRenderFns:[]},O={data:function(){return{}},components:{groupDetail:G,speedDial:n("VU/8")(y,U,!1,null,null,null).exports},computed:{currentGroup:function(){return this.$store.state.currentGroup}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"grid-list-xs":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{"align-start":"",xs12:""}},[e("groupDetail")],1),this._v(" "),this.currentGroup?e("speedDial"):this._e()],1)],1)},staticRenderFns:[]};var T=n("VU/8")(O,M,!1,function(t){n("SLGC")},"data-v-2085a75c",null).exports;a.a.use(x.a);var S=new x.a({routes:[{path:"/",name:"Home",component:T}]});a.a.use(s.a),a.a.config.productionTip=!1,new a.a({el:"#app",store:u,router:S,components:{App:g},template:"<App/>"})},SLGC:function(t,e){},yWWS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bf6a27dc451eb40dfc74.js.map