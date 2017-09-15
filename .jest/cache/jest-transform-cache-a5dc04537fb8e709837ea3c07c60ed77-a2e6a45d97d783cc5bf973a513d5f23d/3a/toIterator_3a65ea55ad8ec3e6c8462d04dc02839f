









'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}











var KIND_KEY='key';
var KIND_VALUE='value';
var KIND_KEY_VAL='key+value';

var ITERATOR_SYMBOL=typeof Symbol==='function'?typeof Symbol==='function'?
Symbol.iterator:'@@iterator':
'@@iterator';

var toIterator=function(){
if(!(Array.prototype[ITERATOR_SYMBOL]&&
String.prototype[ITERATOR_SYMBOL])){

return function(){var
ArrayIterator=function(){

function ArrayIterator(array,kind){_classCallCheck(this,ArrayIterator);
if(!Array.isArray(array)){
throw new TypeError('Object is not an Array');
}
this._iteratedObject=array;
this._kind=kind;
this._nextIndex=0;
}_createClass(ArrayIterator,[{key:'next',value:function next()


{
if(!this instanceof ArrayIterator){
throw new TypeError('Object is not an ArrayIterator');
}

if(this._iteratedObject==null){
return createIterResultObject(undefined,true);
}

var array=this._iteratedObject;
var len=this._iteratedObject.length;
var index=this._nextIndex;
var kind=this._kind;

if(index>=len){
this._iteratedObject=undefined;
return createIterResultObject(undefined,true);
}

this._nextIndex=index+1;

if(kind===KIND_KEY){
return createIterResultObject(index,false);
}else if(kind===KIND_VALUE){
return createIterResultObject(array[index],false);
}else if(kind===KIND_KEY_VAL){
return createIterResultObject([index,array[index]],false);
}
}},{key:


'@@iterator',value:function iterator(){
return this;
}}]);return ArrayIterator;}();var


StringIterator=function(){

function StringIterator(string){_classCallCheck(this,StringIterator);
if(typeof string!=='string'){
throw new TypeError('Object is not a string');
}
this._iteratedString=string;
this._nextIndex=0;
}_createClass(StringIterator,[{key:'next',value:function next()


{
if(!this instanceof StringIterator){
throw new TypeError('Object is not a StringIterator');
}

if(this._iteratedString==null){
return createIterResultObject(undefined,true);
}

var index=this._nextIndex;
var s=this._iteratedString;
var len=s.length;

if(index>=len){
this._iteratedString=undefined;
return createIterResultObject(undefined,true);
}

var ret;
var first=s.charCodeAt(index);

if(first<0xD800||first>0xDBFF||index+1===len){
ret=s[index];
}else{
var second=s.charCodeAt(index+1);
if(second<0xDC00||second>0xDFFF){
ret=s[index];
}else{
ret=s[index]+s[index+1];
}
}

this._nextIndex=index+ret.length;

return createIterResultObject(ret,false);
}},{key:


'@@iterator',value:function iterator(){
return this;
}}]);return StringIterator;}();



function createIterResultObject(value,done){
return{value:value,done:done};
}

return function(object,kind){
if(typeof object==='string'){
return new StringIterator(object);
}else if(Array.isArray(object)){
return new ArrayIterator(object,kind||KIND_VALUE);
}else{
return object[ITERATOR_SYMBOL]();
}
};
}();
}else{
return function(object){
return object[ITERATOR_SYMBOL]();
};
}
}();





_extends(toIterator,{
KIND_KEY:KIND_KEY,
KIND_VALUE:KIND_VALUE,
KIND_KEY_VAL:KIND_KEY_VAL,
ITERATOR_SYMBOL:ITERATOR_SYMBOL});


module.exports=toIterator;