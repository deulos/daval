(function(e){function t(t){for(var i,n,l=t[0],o=t[1],d=t[2],c=0,v=[];c<l.length;c++)n=l[c],a[n]&&v.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],i=!0,l=1;l<r.length;l++){var o=r[l];0!==a[o]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var i={},a={app:0},s=[];function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=i,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-daval/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1101:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.form-control,.form-control.is-invalid,.form-control.is-valid{border-width:4px\n}",""])},1368:function(e,t,r){var i=r("1806");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("988ce6de",i,!0,{sourceMap:!1,shadowMode:!1})},"14a7":function(e,t,r){"use strict";var i=r("1368"),a=r.n(i);a.a},1806:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"",""])},"2e1d":function(e,t,r){var i=r("1101");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("e560cb7a",i,!0,{sourceMap:!1,shadowMode:!1})},"33dd":function(e,t,r){var i=r("9611");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("37977b75",i,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,r){"use strict";r.r(t);var i={};r.r(i),r.d(i,"type",function(){return M}),r.d(i,"required",function(){return I}),r.d(i,"regexp",function(){return S}),r.d(i,"min",function(){return T}),r.d(i,"max",function(){return B}),r.d(i,"minlen",function(){return z}),r.d(i,"maxlen",function(){return L}),r.d(i,"length",function(){return W}),r.d(i,"equals",function(){return A}),r.d(i,"is",function(){return D}),r.d(i,"isnot",function(){return F}),r.d(i,"isin",function(){return U});r("cadf"),r("551c"),r("097d");var a=r("2b0e"),s=r("9f7b"),n=(r("f9e3"),r("2dd8"),r("a70e")),l=r.n(n),o=r("4dd1"),d=r.n(o),u=(r("a052"),r("fb22")),c=r.n(u),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("h1",[e._v("vue-daval")]),r("examples-index")],1)},f=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.examples,function(t){return r(t,{key:t,tag:"component",staticClass:"example",attrs:{"get-input-class":e.getInputClass}})}))},p=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Basic"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:e.getInputClass(e.$vd.email),domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.email.$error,expression:"$vd.email.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.email.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.email.$validate()}}},[e._v("Validate email")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nemail: { required: true, type: 'email' }\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.email.$errors = "+e._s(e.$vd.email.$errors)+";\n\t\t\t\t")])],1)])])},$=[],g=(r("456d"),r("ac6a"),r("f751"),r("f400"),r("c665")),b=r("aa9a"),y=(r("28a5"),r("6bde"));function w(e){return"string"===typeof e}function _(e){return Array.isArray(e)}function k(e){return null!==e&&!Array.isArray(e)&&"object"===Object(y["a"])(e)}function C(e){return("object"===Object(y["a"])(e)||"function"===typeof e)&&"function"===typeof e.then}function x(e){return"function"===typeof e}function O(e,t){var r;w(e)&&(e=e.split("."));try{r=e.reduce(function(e,t){return e[t]},t)}catch(t){console.warn("Not a valid path for "+e)}return r}var E=function(){function e(t){return Object(g["a"])(this,e),this.prop=t,console.error("Rules not defined for "+t),new Proxy(this,this)}return Object(b["a"])(e,[{key:"get",value:function(t,r){return"$"===r[0]?"":new e(this.prop+"."+r)}}]),e}(),j=r("9393"),N=(r("ac4d"),r("8a81"),r("8615"),function(){function e(t,r,i){var a=this;Object(g["a"])(this,e),this.$vm=t,this.$vd=t.$vd,this.promise=new Promise(function(e,t){a.onSuccess=e,a.onError=t}),this.dataPath=r,this.revalidate=i,this.validations=new Map,this.validated=0,this.finished=!1,this.valid=!0,this.addValidation(this.dataPath),this.updateTime()}return Object(b["a"])(e,[{key:"addValidation",value:function(e){var t=this;e.$hasRules()&&this.validations.set(e.$toString(),e),Object.values(e.$childs).forEach(function(e){t.addValidation(e)})}},{key:"updateTime",value:function(){this.time=Date.now()}},{key:"run",value:function(){var e=this.$vd.$getConfig("skipValidationsOnError"),t=this.time,r=!0,i=!1,a=void 0;try{for(var s,n=this.validations.entries()[Symbol.iterator]();!(r=(s=n.next()).done);r=!0){var l=Object(j["a"])(s.value,2),o=(l[0],l[1]);if(e&&!1===this.valid){this.validated=this.validations.size;break}this.checkValidation(o,t)}}catch(e){i=!0,a=e}finally{try{r||null==n.return||n.return()}finally{if(i)throw a}}this.checkValidationsFinished()}},{key:"checkValidation",value:function(e,t){var r=this;if(!1===this.revalidate&&!0===e.$validated)return this.validated++,void(e.$error&&(this.valid=!1));e.$reset(!1),e.$getRules().forEach(function(i){e.$validated||t<r.time||r.checkValidationRule(e,i)})}},{key:"checkValidationRule",value:function(e,t){var r=this,i=!1,a=e.$rules[t],s=this.$vd.$getValidator(t),n=e.$data;"required"===t||void 0!==n&&null!==n||"required"in e!==!1&&!1!==e.required?void 0!==s?(x(a)&&(a=a.call($vm)),i=s.call(this.$vm,a,n,e)):x(a)?(s=e.$rules[t],i=s.call(this.$vm,n,e)):(console.warn("Rule "+t+" not valid"),i=!0):i=!0,!0!==C(i)?this.addValidationRuleResult(e,t,i):i.then(function(){r.addValidationRuleResult(e,t,!0)}).catch(function(i){r.addValidationRuleResult(e,t,i.statusText||i)})}},{key:"addValidationRuleResult",value:function(e,t,r){e.$result.add(t,r),!0!==r&&(this.valid=!1),e.$validated&&(this.validated++,this.checkValidationsFinished())}},{key:"checkValidationsFinished",value:function(){this.validations.size>this.validated||this.finished||(this.finished=!0,this.valid?this.onSuccess():this.onError(),this.$vm.$forceUpdate(),this.$vd.$removeTask(this))}}]),e}()),V=function(){function e(t){return Object(g["a"])(this,e),this.$vm=t,this.$paths={},this.$tasks=new Map,new Proxy(this,this)}return Object(b["a"])(e,[{key:"get",value:function(e,t){return t in e?this[t]:this.$paths[""][t]}},{key:"$getConfig",value:function(e){return this.$vm.$options.vdConfig[e]}},{key:"$getValidator",value:function(e){return this.$vm.$options.vdValidators[e]}},{key:"$getMessage",value:function(e){return this.$vm.$options.vdMessages[e]}},{key:"$addTask",value:function(e,t){var r=e.$toString(),i=this.$tasks.get(r);return void 0===i?(i=new N(this.$vm,e,t),this.$tasks.set(r,i)):i.updateTime(),i.run(),i}},{key:"$removeTask",value:function(e){var t=e.dataPath.$toString();this.$tasks.delete(t)}}]),e}(),R=(r("6762"),r("20d6"),r("6b54"),r("a481"),function(){function e(t){Object(g["a"])(this,e),this.vd=t.$vd,this.dataPath=t,this.reset()}return Object(b["a"])(e,[{key:"add",value:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];w(r)&&(t=r,r=!1),r||(t=this.getMessage(e,t)),this.rules[e]=t,r||this.error||(this.error=t),(Object.keys(this.rules).length===this.numRules||this.error&&this.vd.$getConfig("skipRulesOnError"))&&(this.validated=!0)}},{key:"getMessage",value:function(e,t){if(t||(t=this.dataPath.$rules["message"]),t||(t=this.vd.$getMessage(e)),!t)return this.vd.$getMessage("undefined");var r=this.dataPath.$rules["field"]||this.dataPath.$key;return t=t.replace("{field}",r),e=this.dataPath.$rules[e].toString(),e=e.split(".").slice(-1)[0],t=t.replace("{rule}",e),t}},{key:"hasError",value:function(){return void 0!==this.error}},{key:"getErrors",value:function(){return Object.values(this.rules).filter(function(e){return e})}},{key:"reset",value:function(){this.error=void 0,this.rules={},this.numRules=this.dataPath.$getRules().length,this.validated=!1}}]),e}()),P=function(){function e(t,r,i,a,s){return Object(g["a"])(this,e),this.$vm=t,this.$vd=t.$vd,this.$key=r,this.$data=i,this.$rules=a,this.$parent=s,this.$childs={},this.$proxy=new Proxy(this,this),this.$target=this,this.$vd.$getConfig("validateOnType")&&this.$createWatcher(),!1===this.$createChilds()&&(this.$result=new R(this)),this.$proxy}return Object(b["a"])(e,[{key:"get",value:function(e,t){if(t in e)return this[t];if(this.$hasRules()){if("$validated"===t)return this.$result.validated;if("$hasError"===t)return this.$result.hasError();if("$error"===t)return this.$result.error;if("$errors"===t)return this.$result.getErrors();if(t in this.$rules)return this.$rules[t]}else if("$errors"===t){var r,i={};return Object.values(this.$childs).forEach(function(e){r=e.$errors,Object.keys(r).length>0&&(i[e.$key]=r)}),i}return t in this.$childs?this.$childs[t]:new E(t)}},{key:"$getTarget",value:function(){return this.$target}},{key:"$createChilds",value:function(){var t,r=this;return k(this.$data)?Object.keys(this.$rules).forEach(function(i){i in r.$data&&(t=new e(r.$vm,i,r.$data[i],r.$rules[i],r),r.$childs[i]=t)}):_(this.$data)&&this.$data.forEach(function(i,a){t=new e(r.$vm,a,i,r.$rules,r),r.$childs[a]=t}),void 0!==t}},{key:"$updateChilds",value:function(){var t,r,i=this,a=Object.values(this.$childs),s={};a.forEach(function(e){e.$deleteWatcher(!0)}),this.$data.forEach(function(n,l){t=a.findIndex(function(e){return e.$data===n}),-1!==t?(r=a.splice(t,1)[0],r.$key=l,r.$createWatcher(!0)):r=new e(i.$vm,l,n,i.$rules,i),s[l]=r}),this.$childs=s}},{key:"$createWatcher",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$watcher&&this.$watcher(),""!==this.$key&&(t&&Object.values(this.$childs).forEach(function(e){e.$createWatcher()}),this.$watcher=this.$vm.$watch(this.$toString(),function(t,r){if(_(e.$data)){var i=Object.keys(e.$childs).length!==e.$data.length;return!1===i&&(i=e.$data.some(function(t,i){var a=e.$childs[i].$getTarget();return k(a.$data)||_(a.$data)?a.$data!==t:t!==r[i]})),void(i&&e.$updateChilds())}e.$data=t,e.$validate(!0)}))}},{key:"$deleteWatcher",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&Object.values(this.$childs).forEach(function(e){e.$deleteWatcher(!0)}),"$watcher"in this&&x(this.$watcher)&&(this.$watcher(),this.$watcher=void 0)}},{key:"$hasRules",value:function(){return"$result"in this}},{key:"$getRules",value:function(){var e=Object.keys(this.$rules),t=["message","field","links","linksThen","linksCatch"];return e.filter(function(e){return!1===t.includes(e)})}},{key:"$reset",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&Object.values(this.$childs).forEach(function(e){e.$reset()}),void 0!==this.$result&&this.$result.reset()}},{key:"$validate",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.$vd.$addTask(this.$proxy,t).promise;return r.then(function(){e.$validateLinks(e.$rules.linksThen)}).catch(function(){e.$validateLinks(e.$rules.linksCatch)}).finally(function(){e.$validateLinks(e.$rules.links)}),r}},{key:"$validateLinks",value:function(e){var t,r=this;void 0!==e&&(e=_(e)?e:[e],e.forEach(function(e){t=O(e,r.$vd),void 0!==t&&t.$validate(!0)}))}},{key:"$toString",value:function(){var e="";return this.$parent&&""!==this.$parent.$key&&(e+=this.$parent.$toString()+"."),e+this.$key}},{key:"$delete",value:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];Object.values(this.$childs).forEach(function(e){e.$delete()}),this.$deleteWatcher(),this.$parent&&delete this.$parent.$childs[this.$key]}}]),e}(),q=(r("3b2b"),{boolean:function(e){return"boolean"===typeof e},number:function(e){return"number"===typeof e},integer:function(e){return"number"===typeof e&&parseInt(e,10)===e},float:function(e){return"number"===typeof e&&parseInt(e,10)!==e},string:function(e){return"string"===typeof e},url:function(e){return new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i").test(e)},email:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},date:function(e){return"function"===typeof e.getTime&&"function"===typeof e.getMonth&&"function"===typeof e.getYear}});function M(e,t){return!1!==q[e](t)}function I(e,t){if(!1===e)return!0;var r=Object(y["a"])(t);return"undefined"!==r&&"null"!==r&&(!1!==/(string|array|number)/.test(r)&&0!==t.toString().length)}function S(e,t){return!1!==new RegExp(e).test(t)}function T(e,t){return"number"===typeof t&&!(t<e)}function B(e,t){return"number"===typeof t&&!(t>e)}function z(e,t){return!1!==/(string|array)/.test(Object(y["a"])(t))&&!(t.length<e)}function L(e,t){return!1!==/(string|array)/.test(Object(y["a"])(t))&&!(t.length>e)}function W(e,t){var r=Object(y["a"])(t);return!1!==/(string|array|number)/.test(r)&&(("array"!==r||t.length===e)&&t.toString().length===e)}function A(e,t){var r=O(e,this.$vd).$data;return(void 0!==r||void 0===t)&&r.toString()===t.toString()}function D(e,t){return e==t}function F(e,t){return e!=t}function U(e,t){return-1!==e.indexOf(t)}var G={beforeMount:function(){var e=this;this.$vd=new V(this);var t=Object.assign({},this.$data);this._computedWatchers&&Object.keys(this._computedWatchers).forEach(function(r){t[r]=e[r]}),this.$vd.$paths[""]=new P(this,"",t,this.$options.vdRules)},beforeDestroy:function(){this.$vd.$paths[""].$delete()},vdConfig:{validateOnType:!0,skipValidationsOnError:!1,skipRulesOnError:!1},vdRules:{},vdValidators:i,vdMessages:{type:"This is not a valid {rule}",required:"This field is required",regexp:"This is not a valid value",min:"Minimun value is {rule}",max:"Maximun value is {rule}",minlen:"Minimun length is {rule}",maxlen:"Maximun length is {rule}",length:"Length must be {rule}",equals:"Must equal the field {rule}",is:"Must be {rule}",isnot:"Must not be {rule}",isin:"Must be one of {rule}",undefined:"Undefined error"}},J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{staticClass:"mb-4",attrs:{"header-bg-variant":"dark","header-text-variant":"white"}},[r("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.title))]),e._t("default")],2)},Z=[],Y={name:"BCardExample",props:{title:String}},H=Y,K=(r("14a7"),r("2877")),Q=Object(K["a"])(H,J,Z,!1,null,null,null);Q.options.__file="BCardExample.vue";var X=Q.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{header:e.title,"header-bg-variant":"info","header-text-variant":"white"}},[r("highlight-code",{attrs:{lang:"javascript"}},[e._t("default")],2)],1)},te=[],re={name:"BCardCode",props:{title:String}},ie=re,ae=(r("5a8d"),Object(K["a"])(ie,ee,te,!1,null,null,null));ae.options.__file="BCardCode.vue";var se=ae.exports,ne={name:"BasicValidation",components:{BCardExample:X,BCardCode:se},mixins:[G],data:function(){return{email:void 0}},props:["getInputClass"],vdRules:{email:{required:!0,type:"email"}}},le=ne,oe=Object(K["a"])(le,m,$,!1,null,null,null);oe.options.__file="BasicValidation.vue";var de=oe.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Groups"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("h5",[e._v("Login")]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],class:e.getInputClass(e.$vd.login.email),domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.login.email.$error,expression:"$vd.login.email.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.login.email.$error))])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],class:e.getInputClass(e.$vd.login.password),attrs:{type:"password"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.login.password.$error,expression:"$vd.login.password.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.login.password.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.login.$validate()}}},[e._v("Validate login")]),r("h5",{staticClass:"mt-3"},[e._v("Register")]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],class:e.getInputClass(e.$vd.register.email),domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.register.email.$error,expression:"$vd.register.email.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.register.email.$error))])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],class:e.getInputClass(e.$vd.register.password),attrs:{type:"password"},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.register.password.$error,expression:"$vd.register.password.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.register.password.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.register.$validate()}}},[e._v("Validate register")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nlogin: {\n   email: { required: true, type: 'email' },\n   password: { required: true, minlen: 5 }\n},\n\nregister: {\n   email: { required: true, type: 'email' },\n   password: { required: true, minlen: 5, regexp: /^[a-z0-9 ]+$/ig }\n}\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.login.$errors = "+e._s(e.$vd.login.$errors)+";\n\n$vd.register.$errors = "+e._s(e.$vd.register.$errors)+";\n\t\t\t\t")])],1)])])},ce=[],ve={name:"GroupsValidation",components:{BCardExample:X,BCardCode:se},mixins:[G],data:function(){return{login:{email:void 0,password:void 0},register:{email:void 0,password:void 0}}},props:["getInputClass"],vdRules:{login:{email:{required:!0,type:"email"},password:{required:!0,minlen:5}},register:{email:{required:!0,type:"email"},password:{required:!0,minlen:5,regexp:/^[a-z0-9 ]+$/gi}}},mounted:function(){}},fe=ve,he=Object(K["a"])(fe,ue,ce,!1,null,null,null);he.options.__file="GroupsValidation.vue";var pe=he.exports,me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Nested"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[e._l(e.persons,function(t,i){return r("b-card",{key:i,staticClass:"mb-4"},[r("div",{staticClass:"form-group mb-0",attrs:{slot:"header"},slot:"header"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"person.name"}],class:e.$vd.persons[i]?e.getInputClass(e.$vd.persons[i].name):"",attrs:{placeholder:"Name"},domProps:{value:t.name},on:{input:function(r){r.target.composing||e.$set(t,"name",r.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.persons[i].name.$error,expression:"$vd.persons[i].name.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.persons[i].name.$error))])]),r("div",{staticClass:"form-group mb-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"person.address"}],class:e.$vd.persons[i]?e.getInputClass(e.$vd.persons[i].address):"",attrs:{placeholder:"Address"},domProps:{value:t.address},on:{input:function(r){r.target.composing||e.$set(t,"address",r.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.persons[i].address.$error,expression:"$vd.persons[i].address.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.persons[i].address.$error))])])])}),r("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(t){e.$vd.persons.$validate()}}},[e._v("Validate persons")])],2),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\npersons: {\n   name: { required: true, minlen: 5 },\n   address: { required: true }\n}\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.persons.$errors = "+e._s(e.$vd.persons.$errors)+";\n\t\t\t\t")])],1)])])},$e=[],ge={name:"NestedValidations",components:{BCardExample:X,BCardCode:se},mixins:[G],data:function(){return{persons:[{name:void 0,address:void 0},{name:void 0,address:void 0}]}},props:["getInputClass"],vdRules:{persons:{name:{required:!0,minlen:5},address:{required:!0}}}},be=ge,ye=Object(K["a"])(be,me,$e,!1,null,null,null);ye.options.__file="NestedValidations.vue";var we=ye.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Dynamic"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[e._l(e.urls,function(t,i){return r("b-card",{key:i,staticClass:"mb-4"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.urls[i],expression:"urls[i]"}],class:e.$vd.urls[i]?e.getInputClass(e.$vd.urls[i]):"",attrs:{placeholder:"URL"},domProps:{value:e.urls[i]},on:{input:function(t){t.target.composing||e.$set(e.urls,i,t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.urls[i].$error,expression:"$vd.urls[i].$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.urls[i].$error))])]),r("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(t){e.removeUrl(i)}}},[e._v("Remove")])],1)}),r("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(t){e.$vd.urls.$validate()}}},[e._v("Validate urls")]),r("b-button",{staticClass:"ml-2",attrs:{variant:"secondary",size:"sm"},on:{click:function(t){e.addUrl()}}},[e._v("Add url")])],2),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nurls: { required: true, type: 'url' }\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.urls.$errors = "+e._s(e.$vd.urls.$errors)+";\n\t\t\t\t")])],1)])])},ke=[],Ce={name:"DynamicValidations",components:{BCardExample:X,BCardCode:se},mixins:[G],data:function(){return{urls:["http://www.url1.com",""]}},props:["getInputClass"],vdRules:{urls:{required:!0,type:"url"}},methods:{addUrl:function(){this.urls.push("")},removeUrl:function(e){this.urls.splice(e,1)}}},xe=Ce,Oe=Object(K["a"])(xe,_e,ke,!1,null,null,null);Oe.options.__file="DynamicValidation.vue";var Ee=Oe.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Custom"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Full name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],class:e.getInputClass(e.$vd.fullName),domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.fullName.$error,expression:"$vd.fullName.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.fullName.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.fullName.$validate()}}},[e._v("Validate full name")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nfullName: {\n   required: true,\n   checkFullName(fullName) {\n      let error;\n\n      if (!fullName || fullName.indexOf(' ') === -1)\n         error = 'Invalid full name';\n\n      return error || true;\n   }\n}\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.fullName.$errors = "+e._s(e.$vd.fullName.$errors)+";\n\t\t\t\t")])],1)])])},Ne=[],Ve={name:"CustomValidation",components:{BCardExample:X,BCardCode:se},mixins:[G],data:function(){return{fullName:void 0}},props:["getInputClass"],vdRules:{fullName:{required:!0,checkFullName:function(e){var t;return e&&-1!==e.indexOf(" ")||(t="Invalid full name"),t||!0}}}},Re=Ve,Pe=Object(K["a"])(Re,je,Ne,!1,null,null,null);Pe.options.__file="CustomValidation.vue";var qe=Pe.exports,Me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-example",{attrs:{title:"Links"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",[e._v("Field 1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.field1,expression:"field1"}],class:e.getInputClass(e.$vd.field1),domProps:{value:e.field1},on:{input:function(t){t.target.composing||(e.field1=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.field1.$error,expression:"$vd.field1.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.field1.$error))])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password repeat")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.field2,expression:"field2"}],class:e.getInputClass(e.$vd.field2),attrs:{type:"field1"},domProps:{value:e.field2},on:{input:function(t){t.target.composing||(e.field2=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vd.field2.$error,expression:"$vd.field2.$error"}],staticClass:"invalid-feedback"},[e._v(e._s(e.$vd.field2.$error))])]),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.$vd.$validate()}}},[e._v("Validate field1s")])],1),r("div",{staticClass:"col-sm-8"},[r("b-card-code",{attrs:{title:"Rules"}},[e._v("\nfield1: { required: true, minlen: 5, linksThen: 'field2' },\nfield2: { required: true, type: 'email' }\n\t\t\t\t")]),r("b-card-code",{attrs:{title:"Errors"}},[e._v("\n$vd.$errors = "+e._s(e.$vd.$errors)+";\n\t\t\t\t")])],1)])])},Ie=[],Se={name:"Links",components:{BCardExample:X,BCardCode:se},mixins:[G],data:function(){return{field1:void 0,field2:void 0}},props:["getInputClass"],vdRules:{field1:{required:!0,minlen:5,linksThen:"field2"},field2:{required:!0,type:"email"}}},Te=Se,Be=Object(K["a"])(Te,Me,Ie,!1,null,null,null);Be.options.__file="Links.vue";var ze=Be.exports,Le={name:"ExamplesIndex",components:{BasicValidation:de,GroupsValidation:pe,NestedValidations:we,DynamicValidation:Ee,CustomValidation:qe,Links:ze},data:function(){return{examples:["BasicValidation","GroupsValidation","NestedValidations","DynamicValidation","CustomValidation","Links"]}},methods:{getInputClass:function(e){var t="form-control";return void 0===e?t:(e["$error"]?t+=" is-invalid":e["$validated"]&&(t+=" is-valid"),t)}}},We=Le,Ae=(r("e949"),Object(K["a"])(We,h,p,!1,null,null,null));Ae.options.__file="index.vue";var De=Ae.exports,Fe={name:"app",components:{ExamplesIndex:De}},Ue=Fe,Ge=(r("5c0b"),Object(K["a"])(Ue,v,f,!1,null,null,null));Ge.options.__file="App.vue";var Je=Ge.exports;a["a"].use(s["a"]),l.a.registerLanguage("javascript",d.a),a["a"].use(c.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(Je)}}).$mount("#app")},"5a8d":function(e,t,r){"use strict";var i=r("33dd"),a=r.n(i);a.a},"5c0b":function(e,t,r){"use strict";var i=r("2e1d"),a=r.n(i);a.a},"805e":function(e,t,r){var i=r("841d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=r("499e").default;a("e27096d0",i,!0,{sourceMap:!1,shadowMode:!1})},"841d":function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"",""])},9611:function(e,t,r){t=e.exports=r("2350")(!1),t.push([e.i,"\n.col-sm-8 .card{margin-bottom:1rem\n}\n.col-sm-8 .card:last-child{margin-bottom:0\n}\n.col-sm-8 .card-header{padding:.35rem .62rem\n}\n.col-sm-8 .card-body{padding:0\n}\n.col-sm-8 pre{margin-bottom:0\n}",""])},e949:function(e,t,r){"use strict";var i=r("805e"),a=r.n(i);a.a}});
//# sourceMappingURL=app.63c74eb7.js.map