










'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var PixelRatio=require('PixelRatio');
var ReactNativePropRegistry=require('ReactNativePropRegistry');
var ReactNativeStyleAttributes=require('ReactNativeStyleAttributes');
var StyleSheetValidation=require('StyleSheetValidation');

var flatten=require('flattenStyle');




var hairlineWidth=PixelRatio.roundToNearestPixel(0.4);
if(hairlineWidth===0){
hairlineWidth=1/PixelRatio.get();
}

var absoluteFillObject={
position:'absolute',
left:0,
right:0,
top:0,
bottom:0};

var absoluteFill=ReactNativePropRegistry.register(absoluteFillObject);













































module.exports={



















hairlineWidth:hairlineWidth,






absoluteFill:absoluteFill,













absoluteFillObject:absoluteFillObject,








































flatten:flatten,










setStyleAttributePreprocessor:function setStyleAttributePreprocessor(property,process){
var value=void 0;

if(typeof ReactNativeStyleAttributes[property]==='string'){
value={};
}else if(typeof ReactNativeStyleAttributes[property]==='object'){
value=ReactNativeStyleAttributes[property];
}else{
console.error(property+' is not a valid style attribute');
return;
}

if(__DEV__&&typeof value.process==='function'){
console.warn('Overwriting '+property+' style attribute preprocessor');
}

ReactNativeStyleAttributes[property]=_extends({},value,{process:process});
},




create:function create(obj){
var result={};
for(var key in obj){
StyleSheetValidation.validateStyle(key,obj);
result[key]=ReactNativePropRegistry.register(obj[key]);
}
return result;
}};