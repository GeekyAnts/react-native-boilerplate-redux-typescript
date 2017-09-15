











'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var EmitterSubscription=require('EmitterSubscription');
var EventSubscriptionVendor=require('EventSubscriptionVendor');

var emptyFunction=require('fbjs/lib/emptyFunction');
var invariant=require('fbjs/lib/invariant');var














EventEmitter=function(){










function EventEmitter(subscriber){_classCallCheck(this,EventEmitter);
this._subscriber=subscriber||new EventSubscriptionVendor();
}_createClass(EventEmitter,[{key:'addListener',value:function addListener(
















eventType,listener,context){

return this._subscriber.addSubscription(
eventType,
new EmitterSubscription(this,this._subscriber,listener,context));

}},{key:'once',value:function once(











eventType,listener,context){var _this=this;
return this.addListener(eventType,function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
_this.removeCurrentListener();
listener.apply(context,args);
});
}},{key:'removeAllListeners',value:function removeAllListeners(








eventType){
this._subscriber.removeAllSubscriptions(eventType);
}},{key:'removeCurrentListener',value:function removeCurrentListener()






















{
invariant(
!!this._currentSubscription,
'Not in an emitting cycle; there is no current subscription');

this.removeSubscription(this._currentSubscription);
}},{key:'removeSubscription',value:function removeSubscription(





subscription){
invariant(
subscription.emitter===this,
'Subscription does not belong to this emitter.');

this._subscriber.removeSubscription(subscription);
}},{key:'listeners',value:function listeners(








eventType){
var subscriptions=this._subscriber.getSubscriptionsForType(eventType);
return subscriptions?
subscriptions.filter(emptyFunction.thatReturnsTrue).map(
function(subscription){
return subscription.listener;
}):
[];
}},{key:'emit',value:function emit(















eventType){
var subscriptions=this._subscriber.getSubscriptionsForType(eventType);
if(subscriptions){
for(var i=0,l=subscriptions.length;i<l;i++){
var subscription=subscriptions[i];


if(subscription){
this._currentSubscription=subscription;
subscription.listener.apply(
subscription.context,
Array.prototype.slice.call(arguments,1));

}
}
this._currentSubscription=null;
}
}},{key:'removeListener',value:function removeListener(














eventType,listener){
var subscriptions=this._subscriber.getSubscriptionsForType(eventType);
if(subscriptions){
for(var i=0,l=subscriptions.length;i<l;i++){
var subscription=subscriptions[i];



if(subscription&&subscription.listener===listener){
subscription.remove();
}
}
}
}}]);return EventEmitter;}();


module.exports=EventEmitter;