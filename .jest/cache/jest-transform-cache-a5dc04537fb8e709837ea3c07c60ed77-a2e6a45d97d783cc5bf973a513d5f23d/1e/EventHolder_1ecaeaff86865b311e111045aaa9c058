










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var invariant=require('fbjs/lib/invariant');var

EventHolder=function(){




function EventHolder(){_classCallCheck(this,EventHolder);
this._heldEvents={};
this._currentEventKey=null;
}_createClass(EventHolder,[{key:'holdEvent',value:function holdEvent(






















eventType){
this._heldEvents[eventType]=this._heldEvents[eventType]||[];
var eventsOfType=this._heldEvents[eventType];
var key={
eventType:eventType,
index:eventsOfType.length};for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}

eventsOfType.push(args);
return key;
}},{key:'emitToListener',value:function emitToListener(









eventType,listener,context){var _this=this;
var eventsOfType=this._heldEvents[eventType];
if(!eventsOfType){
return;
}
var origEventKey=this._currentEventKey;
eventsOfType.forEach(function(eventHeld,index){
if(!eventHeld){
return;
}
_this._currentEventKey={
eventType:eventType,
index:index};

listener.apply(context,eventHeld);
});
this._currentEventKey=origEventKey;
}},{key:'releaseCurrentEvent',value:function releaseCurrentEvent()









{
invariant(
this._currentEventKey!==null,
'Not in an emitting cycle; there is no current event');

this._currentEventKey&&this.releaseEvent(this._currentEventKey);
}},{key:'releaseEvent',value:function releaseEvent(







token){
delete this._heldEvents[token.eventType][token.index];
}},{key:'releaseEventType',value:function releaseEventType(






type){
this._heldEvents[type]=[];
}}]);return EventHolder;}();


module.exports=EventHolder;