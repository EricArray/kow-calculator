(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],s=0,p=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(u.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},u=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6df3822b"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var c=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(s);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",c.name="ChunkLoadError",c.type=n,c.request=u,a[1](c)}r[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/kow-calculator/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=c;u.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"199c":function(e,t){},"23be":function(e,t,a){"use strict";var n=a("199c"),r=a.n(n);t["default"]=r.a},"3dfd":function(e,t,a){"use strict";var n=a("c4cb"),r=a("23be"),u=(a("034f"),a("2877")),i=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("3dfd"),u=(a("d3b7"),a("8c4f")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"home"},[a("h1",{attrs:{id:"title"}},[e._v("KoW Calculator 0.1")]),a("InputsAttacker",{model:{value:e.attacker,callback:function(t){e.attacker=t},expression:"attacker"}}),a("InputsDefender",{model:{value:e.defender,callback:function(t){e.defender=t},expression:"defender"}}),a("InputsAttackedSide",{model:{value:e.attackedSide,callback:function(t){e.attackedSide=t},expression:"attackedSide"}}),a("button",{attrs:{id:"calculate",type:"submit"},on:{click:function(t){return t.preventDefault(),e.calculate(t)}}},[e._v("Calculate")]),a("Outputs",{model:{value:e.outputs,callback:function(t){e.outputs=t},expression:"outputs"}})],1)},o=[],l=(a("d81d"),a("fb6a"),a("ddb0"),a("2909")),c=a("b85c"),s=(a("13d5"),[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171384e13,8.841761993739701e30,26525285981219103e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960412e22,1.0333147966386144e40,3719933267899012e26,13763753091226343e27,523022617466601e30,20397882081197442e30,8159152832478977e32,33452526613163803e33,14050061177528798e35,6041526306337383e37,26582715747884485e38,11962222086548019e40,55026221598120885e41,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,4052691950487722e61,2350561331282879e63,1.3868311854568986e80,8320987112741392e66,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.197857166996989e100,8504785885678622e86,6123445837688608e88,44701154615126834e89,33078854415193856e91,2480914081139539e94,18854947016660498e95,14518309202828584e97,11324281178206295e99,8946182130782973e101,7156945704626378e103,5.797126020747366e120,475364333701284e108,3945523969720657e109,3314240134565352e111,28171041143805494e112,2.4227095383672724e130,2107757298379527e117,18548264225739836e118,16507955160908452e120,14857159644817607e122,1.3520015276784023e140,124384140546413e128,11567725070816409e128,10873661566567424e130,10329978488239052e132,9916779348709491e134,9619275968248206e136,9426890448883242e138,933262154439441e141]);function d(e){return e<=1?1:d(e-1)*e}function p(e){var t=s[e];return t||d(e)}function v(e){return e.reduce((function(e,t){return e+t}),0)}function h(e){return Array(e+1).keys()}function f(e,t){return console.assert(e<=t,{from:e,to:t}),Object(l["a"])(Array(t-e+1).keys()).map((function(t,a){return a+e}))}function b(e,t,a){var n=1-t,r=e-a,u=p(e)/p(a)/p(r),i=Math.pow(t,a)*Math.pow(n,r);return u*i}function m(e,t,a){return b(e,(7-t)/6,a)}function y(e,t,a){var n,r=[],u=Object(c["a"])(h(e));try{for(u.s();!(n=u.n()).done;){var i=n.value;r[i]=m(e,t,i)}}catch(g){u.e(g)}finally{u.f()}if(a){var o,l=[],s=Object(c["a"])(h(e));try{for(s.s();!(o=s.n()).done;){var d,p=o.value,v=0,f=Object(c["a"])(h(p));try{for(f.s();!(d=f.n()).done;){var b=d.value,y=p-b,C=e-b;v+=r[b]*k(t,y,C)}}catch(g){f.e(g)}finally{f.f()}l[p]=v}}catch(g){s.e(g)}finally{s.f()}return l}return r}function k(e,t,a){var n,r=1/(e-1),u=0,i=Object(c["a"])(f(t,a));try{for(i.s();!(n=i.n()).done;){var o=n.value;u+=b(a,r,o)*m(o,e,t)}}catch(l){i.e(l)}finally{i.f()}return u}function C(e,t,a){var n,r=[],u=Object(c["a"])(h(e));try{for(u.s();!(n=u.n()).done;){var i=n.value;r[i]=y(i,t,a)}}catch(o){u.e(o)}finally{u.f()}return r}function g(e,t,a){var n,r=e.length-1,u=C(r,a.de,t.vicious),i=[],o=Object(c["a"])(u.keys());try{for(o.s();!(n=o.n()).done;){var l,s=n.value,d=e[s],p=u[s],v=Object(c["a"])(p.keys());try{for(v.s();!(l=v.n()).done;){var h,f=l.value,b=p[f];i[f]=(null!==(h=i[f])&&void 0!==h?h:0)+b*d}}catch(m){v.e(m)}finally{v.f()}}}catch(m){o.e(m)}finally{o.f()}return i}var _=[0,0,1,2,3,4,5,6,5,4,3,2,1].map((function(e){return e/36})),w=Object(l["a"])(h(12)).map((function(e){return v(_.slice(e))}));function P(e){return e>12?0:w[e]}function O(e,t,a){var n=P(Math.max(3,e.rout-t)),r=P(Math.min(12,Math.max(3,e.weaver-t)))-n;return a&&(n=Math.pow(n,2),r+=n*r),{routChance:n,weaverChance:r}}function x(e,t){var a,n=e.map((function(e,a){return 0===a?{weaverChance:0,routChance:0}:O(t.ne,a,t.inspired)})),r={routChance:0,weaverChance:0},u=Object(c["a"])(n.keys());try{for(u.s();!(a=u.n()).done;){var i=a.value;r.routChance+=n[i].routChance*e[i],r.weaverChance+=n[i].weaverChance*e[i]}}catch(o){u.e(o)}finally{u.f()}return r}function j(e,t){var a=y(e.att,e.me,e.elite),n=g(a,e,t),r=x(n,t);return{hitsChanceTable:a,dmgChanceTable:n,killChance:r}}var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inputs attacked-side"},[a("h3",[e._v("Attacked Side")]),a("label",[a("span",[e._v("Front")]),a("input",{attrs:{type:"radio",id:"front",value:"front"},domProps:{checked:"front"===e.value},on:{change:function(t){return e.update("front")}}})]),a("label",[a("span",[e._v("Flank")]),a("input",{attrs:{type:"radio",id:"flank",value:"flank"},domProps:{checked:"flank"===e.value},on:{change:function(t){return e.update("flank")}}})]),a("label",[a("span",[e._v("Rear")]),a("input",{attrs:{type:"radio",id:"rear",value:"rear"},domProps:{checked:"rear"===e.value},on:{change:function(t){return e.update("rear")}}})])])},A=[],E={name:"InputsAttackedSide",props:{value:String},methods:{update:function(e){this.$emit("input",e)}}},M=E,R=a("2877"),T=Object(R["a"])(M,S,A,!1,null,null,null),H=T.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inputs inputs-attacker"},[a("h3",[e._v("Attacker")]),a("label",[a("span",[e._v("Me")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.me},on:{input:function(t){return e.update("att",t)}}})]),a("label",[a("span",[e._v("Att")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.att},on:{input:function(t){return e.update("att",t)}}})]),a("br"),a("label",[a("span",[e._v("Crushing Strength")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.cs},on:{input:function(t){return e.update("cs",t)}}})]),a("label",[a("span",[e._v("Thunderous Charge")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.tc},on:{input:function(t){return e.update("tc",t)}}})]),a("br"),a("label",[a("span",[e._v("Elite")]),a("input",{attrs:{type:"checkbox"},domProps:{value:e.value.elite},on:{input:function(t){return e.updateBool("elite",t)}}})]),a("label",[a("span",[e._v("Vicious")]),a("input",{attrs:{type:"checkbox"},domProps:{value:e.value.vicious},on:{input:function(t){return e.updateBool("vicious",t)}}})]),a("label",[a("span",[e._v("Brutal/Shattering")]),a("input",{attrs:{type:"checkbox"},domProps:{value:e.value.brutal},on:{input:function(t){return e.updateBool("brutal",t)}}})]),a("br"),a("label",[a("span",[e._v("Hindered")]),a("input",{attrs:{type:"checkbox"},domProps:{value:e.value.hindered},on:{input:function(t){return e.updateBool("hindered",t)}}})]),a("label",[a("span",[e._v("Charge from hill")]),a("input",{attrs:{type:"checkbox"},domProps:{value:e.value.chargeFromHill},on:{input:function(t){return e.updateBool("chargeFromHill",t)}}})])])},V=[],$=a("ade3"),B=a("5530"),I={name:"InputsAttacker",props:{value:Object},methods:{update:function(e,t){this.updateValue(e,t.target.value)},updateBool:function(e,t){this.updateValue(e,t.target.checked)},updateValue:function(e,t){this.$emit("input",Object(B["a"])(Object(B["a"])({},this.value),{},Object($["a"])({},e,t)))}}},F=I,D=Object(R["a"])(F,W,V,!1,null,null,null),N=D.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inputs inputs-defender"},[a("h3",[e._v("Defender")]),a("label",[a("span",[e._v("De")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.de},on:{input:function(t){return e.update("de",t)}}})]),a("label",{attrs:{id:"inputs-defender-ne"}},[a("span",[e._v("Ne")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.neWeaver},on:{input:function(t){return e.update("neWeaver",t)}}}),e._v(" / "),a("input",{attrs:{type:"number"},domProps:{value:e.value.neRout},on:{input:function(t){return e.update("neRout",t)}}})]),a("br"),a("label",[a("span",[e._v("Previous Wounds")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.wounds},on:{input:function(t){return e.update("wounds",t)}}})]),a("label",[a("span",[e._v("Rallied")]),a("input",{attrs:{type:"number"},domProps:{value:e.value.rallied},on:{input:function(t){return e.update("rallied",t)}}})]),a("br"),a("label",[a("span",[e._v("Inspired")]),a("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.inspired},on:{input:function(t){return e.updateBool("inspired",t)}}})]),a("label",[a("span",[e._v("Ensnare/Stealthy")]),a("input",{attrs:{type:"checkbox"},domProps:{checked:e.value.ensnare},on:{input:function(t){return e.updateBool("ensnare",t)}}})])])},L=[],J={name:"InputsDefender",props:{value:Object},methods:{update:function(e,t){this.updateValue(e,t.target.value)},updateBool:function(e,t){this.updateValue(e,t.target.checked)},updateValue:function(e,t){this.$emit("input",Object(B["a"])(Object(B["a"])({},this.value),{},Object($["a"])({},e,t)))}}},q=J,z=Object(R["a"])(q,K,L,!1,null,null,null),G=z.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"outputs"},[a("h3",[e._v("Results")]),a("label",[a("span",[e._v("Rout probability")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.displayedRoutProbability,expression:"displayedRoutProbability"}],domProps:{value:e.displayedRoutProbability},on:{input:function(t){t.target.composing||(e.displayedRoutProbability=t.target.value)}}})]),a("label",[a("span",[e._v("Weaver probability")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.displayedWeaverProbability,expression:"displayedWeaverProbability"}],domProps:{value:e.displayedWeaverProbability},on:{input:function(t){t.target.composing||(e.displayedWeaverProbability=t.target.value)}}})]),a("label",[a("span",[e._v("Steady probability")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.displayedSteadyProbability,expression:"displayedSteadyProbability"}],domProps:{value:e.displayedSteadyProbability},on:{input:function(t){t.target.composing||(e.displayedSteadyProbability=t.target.value)}}})]),a("ChartKillChanceVue",{attrs:{"rout-chance":e.value.killChance.routChance,"weaver-chance":e.value.killChance.weaverChance,"steady-chance":e.steadyChance}}),a("div",[e._v(" Average hits: "+e._s(e.averageHits)+" ")]),a("ChartExactHitsChanceVue",{attrs:{table:e.value.hitsChanceTable}}),a("div",[e._v(" Average wounds: "+e._s(e.averageDmg)+" ")]),a("ChartExactHitsChanceVue",{attrs:{table:e.value.dmgChanceTable}})],1)},U=[],X=(a("b680"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart-kill-chance"},[a("div",{attrs:{id:"chart"}},[a("ApexCharts",{attrs:{type:"pie",width:"380",options:e.chartOptions,series:e.series}})],1)])}),Y=[],Z=(a("a9e3"),a("1321")),ee=a.n(Z),te={name:"ChartKillChance",components:{ApexCharts:ee.a},props:{routChance:Number,weaverChance:Number,steadyChance:Number},data:function(){return{chartOptions:{chart:{width:380,type:"pie"},labels:["Rout","Weaver","Steady"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}}},computed:{series:function(){return[this.routChance,this.weaverChance,this.steadyChance]}}},ae=te,ne=Object(R["a"])(ae,X,Y,!1,null,null,null),re=ne.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart-kill-chance"},[a("div",{attrs:{id:"chart"}},[a("ApexCharts",{attrs:{type:"bar",options:e.chartOptions,series:e.series}})],1)])},ie=[],oe={name:"ChartExactHitsChance",components:{ApexCharts:ee.a},props:{table:Array},computed:{chartOptions:function(){return{labels:this.table.map((function(e,t){return t})),dataLabels:{enabled:!1}}},series:function(){return[{name:"probability",data:this.table.map((function(e){return(100*e).toFixed(2)}))}]}}},le=oe,ce=Object(R["a"])(le,ue,ie,!1,null,null,null),se=ce.exports,de={name:"Outputs",components:{ChartExactHitsChanceVue:se,ChartKillChanceVue:re},props:{value:Object},computed:{steadyChance:function(){return 1-this.value.killChance.routChance-this.value.killChance.weaverChance},displayedRoutProbability:function(){return ve(this.value.killChance.routChance)},displayedWeaverProbability:function(){return ve(this.value.killChance.weaverChance)},displayedSteadyProbability:function(){return ve(this.steadyChance)},averageHits:function(){return pe(this.value.hitsChanceTable)},averageDmg:function(){return pe(this.value.dmgChanceTable)}}};function pe(e){var t=v(e.map((function(e,t){return e*t})));return+t.toFixed(2)}function ve(e){return(100*e).toFixed(2)+" %"}var he=de,fe=Object(R["a"])(he,Q,U,!1,null,null,null),be=fe.exports,me={name:"Home",components:{InputsAttackedSide:H,InputsAttacker:N,InputsDefender:G,Outputs:be},data:function(){return{attacker:{att:12,me:4,cs:null,tc:null,elite:!1,vicious:!1,brutal:!1,hindered:!1,chargeFromHill:!1},defender:{de:4,neWeaver:13,neRout:15,rallied:null,wounds:null,inspired:!0,ensnare:!1},attackedSide:"front",outputs:{hitsChanceTable:[],dmgChanceTable:[],killChance:{weaverChance:0,routChance:0}}}},mounted:function(){this.calculate()},methods:{calculate:function(){var e=+this.attacker.att,t=+this.attacker.me,a=this.attacker.elite,n=this.attacker.vicious,r=+this.defender.de,u=+this.defender.neWeaver,i=+this.defender.neRout,o=this.defender.inspired;"flank"===this.attackedSide?e*=2:"rear"===this.attackedSide&&(e*=3);var l=(this.attacker.hindered?1:0)+(this.defender.ensnare&&"front"===this.attackedSide?1:0);t+l>6?(e=Math.round(e/2),t=6):t+=l;var c=Math.max(0,+this.attacker.tc+(this.attacker.chargeFromHill?1:0)+(this.attacker.hindered?-1:0)),s=+this.attacker.cs+c;r=Math.max(2,r-s);var d=(this.attacker.brutal?-1:0)+ +this.defender.rallied-this.defender.wounds;u+=d,i+=d,this.outputs=j({att:e,me:t,elite:a,vicious:n},{de:r,ne:{weaver:u,rout:i},inspired:o})}}},ye=me,ke=(a("cccb"),Object(R["a"])(ye,i,o,!1,null,null,null)),Ce=ke.exports;n["a"].use(u["a"]);var ge=[{path:"/",name:"Home",component:Ce},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],_e=new u["a"]({mode:"history",base:"/kow-calculator/",routes:ge}),we=_e,Pe=a("2f62");n["a"].use(Pe["a"]);var Oe=new Pe["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:we,store:Oe,render:function(e){return e(r["default"])}}).$mount("#app")},"5ced":function(e,t,a){},"85ec":function(e,t,a){},c4cb:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[]},cccb:function(e,t,a){"use strict";var n=a("5ced"),r=a.n(n);r.a}});
//# sourceMappingURL=app.765b8d29.js.map