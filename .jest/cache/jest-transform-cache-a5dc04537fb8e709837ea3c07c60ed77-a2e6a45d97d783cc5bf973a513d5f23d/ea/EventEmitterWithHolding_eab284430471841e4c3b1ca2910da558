










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

















EventEmitterWithHolding=function(){













function EventEmitterWithHolding(emitter,holder){_classCallCheck(this,EventEmitterWithHolding);
this._emitter=emitter;
this._eventHolder=holder;
this._currentEventToken=null;
this._emittingHeldEvents=false;
}_createClass(EventEmitterWithHolding,[{key:'addListener',value:function addListener(




eventType,listener,context){
return this._emitter.addListener(eventType,listener,context);
}},{key:'once',value:function once(




eventType,listener,context){
return this._emitter.once(eventType,listener,context);
}},{key:'addRetroactiveListener',value:function addRetroactiveListener(






















eventType,listener,context){
var subscription=this._emitter.addListener(eventType,listener,context);

this._emittingHeldEvents=true;
this._eventHolder.emitToListener(eventType,listener,context);
this._emittingHeldEvents=false;

return subscription;
}},{key:'removeAllListeners',value:function removeAllListeners(




eventType){
this._emitter.removeAllListeners(eventType);
}},{key:'removeCurrentListener',value:function removeCurrentListener()




{
this._emitter.removeCurrentListener();
}},{key:'listeners',value:function listeners(




eventType){
return this._emitter.listeners(eventType);
}},{key:'emit',value:function emit(




eventType){var _emitter;for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}
(_emitter=this._emitter).emit.apply(_emitter,[eventType].concat(_toConsumableArray(args)));
}},{key:'emitAndHold',value:function emitAndHold(
















eventType){var _eventHolder,_emitter2;for(var _len2=arguments.length,args=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}
this._currentEventToken=(_eventHolder=this._eventHolder).holdEvent.apply(_eventHolder,[eventType].concat(_toConsumableArray(args)));
(_emitter2=this._emitter).emit.apply(_emitter2,[eventType].concat(_toConsumableArray(args)));
this._currentEventToken=null;
}},{key:'releaseCurrentEvent',value:function releaseCurrentEvent()




{
if(this._currentEventToken){
this._eventHolder.releaseEvent(this._currentEventToken);
}else if(this._emittingHeldEvents){
this._eventHolder.releaseCurrentEvent();
}
}},{key:'releaseHeldEventType',value:function releaseHeldEventType(





eventType){
this._eventHolder.releaseEventType(eventType);
}}]);return EventEmitterWithHolding;}();


module.exports=EventEmitterWithHolding;