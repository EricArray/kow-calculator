(function(e){function t(t){for(var a,o,c=t[0],l=t[1],s=t[2],d=0,v=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"76a84839"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var s=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}n[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"08ed":function(e,t,r){},"1abe":function(e,t,r){"use strict";var a=r("08ed"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],o=(r("034f"),r("2877")),c={},l=Object(o["a"])(c,n,i,!1,null,null,null),s=l.exports,d=(r("d3b7"),r("8c4f")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"inputs",attrs:{id:"inputs-attacker"}},[r("h3",[e._v("Attacker")]),r("label",[r("span",[e._v("Me")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attacker.me,expression:"attacker.me"}],attrs:{type:"number"},domProps:{value:e.attacker.me},on:{input:function(t){t.target.composing||e.$set(e.attacker,"me",t.target.value)}}})]),r("label",[r("span",[e._v("Att")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attacker.att,expression:"attacker.att"}],attrs:{type:"number"},domProps:{value:e.attacker.att},on:{input:function(t){t.target.composing||e.$set(e.attacker,"att",t.target.value)}}})]),r("br"),r("label",[r("span",[e._v("Crushing Strength")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attacker.cs,expression:"attacker.cs"}],attrs:{type:"number"},domProps:{value:e.attacker.cs},on:{input:function(t){t.target.composing||e.$set(e.attacker,"cs",t.target.value)}}})]),r("label",[r("span",[e._v("Thunderous Charge")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attacker.tc,expression:"attacker.tc"}],attrs:{type:"number"},domProps:{value:e.attacker.tc},on:{input:function(t){t.target.composing||e.$set(e.attacker,"tc",t.target.value)}}})]),r("br"),r("label",[r("span",[e._v("Hindered")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attacker.hindered,expression:"attacker.hindered"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.attacker.hindered)?e._i(e.attacker.hindered,null)>-1:e.attacker.hindered},on:{change:function(t){var r=e.attacker.hindered,a=t.target,n=!!a.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);a.checked?o<0&&e.$set(e.attacker,"hindered",r.concat([i])):o>-1&&e.$set(e.attacker,"hindered",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.attacker,"hindered",n)}}})]),r("label",[r("span",[e._v("Charge from hill")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attacker.chargeFromHill,expression:"attacker.chargeFromHill"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.attacker.chargeFromHill)?e._i(e.attacker.chargeFromHill,null)>-1:e.attacker.chargeFromHill},on:{change:function(t){var r=e.attacker.chargeFromHill,a=t.target,n=!!a.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);a.checked?o<0&&e.$set(e.attacker,"chargeFromHill",r.concat([i])):o>-1&&e.$set(e.attacker,"chargeFromHill",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.attacker,"chargeFromHill",n)}}})]),r("label",[r("span",[e._v("Brutal/Shattering")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.attacker.brutal,expression:"attacker.brutal"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.attacker.brutal)?e._i(e.attacker.brutal,null)>-1:e.attacker.brutal},on:{change:function(t){var r=e.attacker.brutal,a=t.target,n=!!a.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);a.checked?o<0&&e.$set(e.attacker,"brutal",r.concat([i])):o>-1&&e.$set(e.attacker,"brutal",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.attacker,"brutal",n)}}})])]),r("div",{staticClass:"inputs",attrs:{id:"inputs-defender"}},[r("h3",[e._v("Defender")]),r("label",[r("span",[e._v("De")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.defender.de,expression:"defender.de"}],attrs:{type:"number"},domProps:{value:e.defender.de},on:{input:function(t){t.target.composing||e.$set(e.defender,"de",t.target.value)}}})]),r("label",[r("span",[e._v("Ne")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.defender.ne.weaver,expression:"defender.ne.weaver"}],attrs:{type:"number"},domProps:{value:e.defender.ne.weaver},on:{input:function(t){t.target.composing||e.$set(e.defender.ne,"weaver",t.target.value)}}}),e._v(" / "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.defender.ne.route,expression:"defender.ne.route"}],attrs:{type:"number"},domProps:{value:e.defender.ne.route},on:{input:function(t){t.target.composing||e.$set(e.defender.ne,"route",t.target.value)}}})]),r("br"),r("label",[r("span",[e._v("Rallied")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.defender.rallied,expression:"defender.rallied"}],attrs:{type:"number"},domProps:{value:e.defender.rallied},on:{input:function(t){t.target.composing||e.$set(e.defender,"rallied",t.target.value)}}})]),r("br"),r("label",[r("span",[e._v("Inspired")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.defender.inspired,expression:"defender.inspired"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.defender.inspired)?e._i(e.defender.inspired,null)>-1:e.defender.inspired},on:{change:function(t){var r=e.defender.inspired,a=t.target,n=!!a.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);a.checked?o<0&&e.$set(e.defender,"inspired",r.concat([i])):o>-1&&e.$set(e.defender,"inspired",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.defender,"inspired",n)}}})]),r("label",[r("span",[e._v("Ensnare/Stealthy")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.defender.ensnare,expression:"defender.ensnare"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.defender.ensnare)?e._i(e.defender.ensnare,null)>-1:e.defender.ensnare},on:{change:function(t){var r=e.defender.ensnare,a=t.target,n=!!a.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);a.checked?o<0&&e.$set(e.defender,"ensnare",r.concat([i])):o>-1&&e.$set(e.defender,"ensnare",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.defender,"ensnare",n)}}})])]),r("button",{attrs:{id:"calculate",type:"button"},on:{click:e.calculate}},[e._v("Calculate")]),e.result?r("div",{attrs:{id:"results"}},[r("label",[r("span",[e._v("Weaver probability")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.displayedWeaverProbability,expression:"displayedWeaverProbability"}],domProps:{value:e.displayedWeaverProbability},on:{input:function(t){t.target.composing||(e.displayedWeaverProbability=t.target.value)}}})]),r("label",[r("span",[e._v("Route probability")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.displayedRouteProbability,expression:"displayedRouteProbability"}],domProps:{value:e.displayedRouteProbability},on:{input:function(t){t.target.composing||(e.displayedRouteProbability=t.target.value)}}})])]):e._e()])},v=[],p=(r("b680"),r("d81d"),r("13d5"),r("ddb0"),r("b85c")),f=r("2909");function m(e){return e<=1?1:m(e-1)*e}function h(e){return e.reduce((function(e,t){return e+t}),0)}function b(e){return Array(e+1).keys()}function y(e,t){return Object(f["a"])(Array(t-e+1).keys()).map((function(t,r){return r+e}))}function k(e,t,r){var a=e-r,n=m(e)/m(r)/m(a),i=Math.pow((7-t)/6,r)*Math.pow((t-1)/6,a);return n*i}function g(e,t){var r,a=[],n=Object(p["a"])(b(e));try{for(n.s();!(r=n.n()).done;){var i=r.value;a[i]=k(e,t,i)}}catch(o){n.e(o)}finally{n.f()}return a}function _(e,t){var r,a=[],n=Object(p["a"])(b(e));try{for(n.s();!(r=n.n()).done;){var i=r.value;a[i]=g(i,t)}}catch(o){n.e(o)}finally{n.f()}return a}function w(e,t,r){var a,n=g(e,t),i=n.length-1,o=_(i,r),c=[],l=Object(p["a"])(o.keys());try{for(l.s();!(a=l.n()).done;){var s,d=a.value,u=n[d],v=o[d],f=Object(p["a"])(v.keys());try{for(f.s();!(s=f.n()).done;){var m,h=s.value,b=v[h];c[h]=(null!==(m=c[h])&&void 0!==m?m:0)+b*u}}catch(y){f.e(y)}finally{f.f()}}}catch(y){l.e(y)}finally{l.f()}return c}function P(e){if(e>12)return 0;var t=[0,0,1,2,3,4,5,6,5,4,3,2,1];return h(y(e,12).map((function(e){return t[e]})))/36}function x(e,t,r){var a=P(Math.max(3,e.route-t)),n=P(Math.max(3,e.weaver-t))-a;return e.route-t>12&&e.weaver>12&&(n=P(12)),r&&(a=Math.pow(a,2),n+=a*n),{route_chance:a,weaver_chance:n}}function A(e,t){var r,a=w(e.att,e.me,t.de),n=a.map((function(e,r){return x(t.ne,r,t.inspired)})),i={route_chance:0,weaver_chance:0},o=Object(p["a"])(n.keys());try{for(o.s();!(r=o.n()).done;){var c=r.value;i.route_chance+=n[c].route_chance*a[c],i.weaver_chance+=n[c].weaver_chance*a[c]}}catch(l){o.e(l)}finally{o.f()}return i}var $={name:"Home",data:function(){return{attacker:{att:12,me:4,cs:null,tc:null,hindered:!1,chargeFromHill:!1,brutal:!1},defender:{de:4,ne:{weaver:13,route:15},rallied:null,inspired:!0,ensnare:!1},result:{weaver_chance:0,route_chance:0}}},methods:{calculate:function(){var e=+this.attacker.att,t=+this.attacker.me,r=+this.defender.de,a=+this.defender.ne.weaver,n=+this.defender.ne.route,i=(this.attacker.hindered?1:0)+(this.defender.ensnare?1:0);t+i>6?(e=Math.round(e/2),t=6):t+=i;var o=Math.max(0,+this.attacker.tc+(this.attacker.chargeFromHill?1:0)+(this.attacker.hindered?-1:0)),c=+this.attacker.cs+o;r=Math.max(2,r-c);var l=(this.attacker.brutal?-1:0)+ +this.defender.rallied;a+=l,n+=l,this.result=A({att:e,me:t},{de:r,ne:{weaver:a,route:n}})}},computed:{displayedWeaverProbability:function(){return j(this.result.weaver_chance)},displayedRouteProbability:function(){return j(this.result.route_chance)}}};function j(e){return(100*e).toFixed(2)+" %"}var O=$,N=(r("1abe"),Object(o["a"])(O,u,v,!1,null,"6883abe9",null)),H=N.exports;a["a"].use(d["a"]);var M=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],F=new d["a"]({mode:"history",base:"/",routes:M}),C=F,S=r("2f62");a["a"].use(S["a"]);var R=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:C,store:R,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.a03251f5.js.map