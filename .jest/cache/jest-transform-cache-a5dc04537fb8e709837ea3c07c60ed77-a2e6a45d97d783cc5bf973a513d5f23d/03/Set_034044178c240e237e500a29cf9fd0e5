














'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var Map=require('Map');

var _shouldPolyfillES6Collection=require('_shouldPolyfillES6Collection');
var toIterator=require('toIterator');

module.exports=function(global){





if(!_shouldPolyfillES6Collection('Set')){
return global.Set;
}var










































Set=function(){










function Set(iterable){_classCallCheck(this,Set);
if(this==null||
typeof this!=='object'&&typeof this!=='function'){
throw new TypeError('Wrong set object type.');
}

initSet(this);

if(iterable!=null){
var it=toIterator(iterable);
var next;
while(!(next=it.next()).done){
this.add(next.value);
}
}
}_createClass(Set,[{key:'add',value:function add(









value){
this._map.set(value,value);
this.size=this._map.size;
return this;
}},{key:'clear',value:function clear()






{
initSet(this);
}},{key:'delete',value:function _delete(










value){
var ret=this._map.delete(value);
this.size=this._map.size;
return ret;
}},{key:'entries',value:function entries()






{
return this._map.entries();
}},{key:'forEach',value:function forEach(








callback){
var thisArg=arguments[1];
var it=this._map.keys();
var next;
while(!(next=it.next()).done){
callback.call(thisArg,next.value,next.value,this);
}
}},{key:'has',value:function has(









value){
return this._map.has(value);
}},{key:'values',value:function values()






{
return this._map.values();
}}]);return Set;}();



Set.prototype[toIterator.ITERATOR_SYMBOL]=Set.prototype.values;


Set.prototype.keys=Set.prototype.values;

function initSet(set){
set._map=new Map();
set.size=set._map.size;
}

return Set;
}(Function('return this')());