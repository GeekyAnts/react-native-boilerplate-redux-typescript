










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var Dimensions=require('Dimensions');var


















PixelRatio=function(){function PixelRatio(){_classCallCheck(this,PixelRatio);}_createClass(PixelRatio,null,[{key:'get',value:function get()


















{
return Dimensions.get('window').scale;
}},{key:'getFontScale',value:function getFontScale()












{
return Dimensions.get('window').fontScale||PixelRatio.get();
}},{key:'getPixelSizeForLayoutSize',value:function getPixelSizeForLayoutSize(






layoutSize){
return Math.round(layoutSize*PixelRatio.get());
}},{key:'roundToNearestPixel',value:function roundToNearestPixel(







layoutSize){
var ratio=PixelRatio.get();
return Math.round(layoutSize*ratio)/ratio;
}},{key:'startDetecting',value:function startDetecting()


{}}]);return PixelRatio;}();


module.exports=PixelRatio;