










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var invariant=require('fbjs/lib/invariant');var







EventSubscriptionVendor=function(){




function EventSubscriptionVendor(){_classCallCheck(this,EventSubscriptionVendor);
this._subscriptionsForType={};
this._currentSubscription=null;
}_createClass(EventSubscriptionVendor,[{key:'addSubscription',value:function addSubscription(








eventType,subscription){
invariant(
subscription.subscriber===this,
'The subscriber of the subscription is incorrectly set.');
if(!this._subscriptionsForType[eventType]){
this._subscriptionsForType[eventType]=[];
}
var key=this._subscriptionsForType[eventType].length;
this._subscriptionsForType[eventType].push(subscription);
subscription.eventType=eventType;
subscription.key=key;
return subscription;
}},{key:'removeAllSubscriptions',value:function removeAllSubscriptions(







eventType){
if(eventType===undefined){
this._subscriptionsForType={};
}else{
delete this._subscriptionsForType[eventType];
}
}},{key:'removeSubscription',value:function removeSubscription(







subscription){
var eventType=subscription.eventType;
var key=subscription.key;

var subscriptionsForType=this._subscriptionsForType[eventType];
if(subscriptionsForType){
delete subscriptionsForType[key];
}
}},{key:'getSubscriptionsForType',value:function getSubscriptionsForType(













eventType){
return this._subscriptionsForType[eventType];
}}]);return EventSubscriptionVendor;}();


module.exports=EventSubscriptionVendor;