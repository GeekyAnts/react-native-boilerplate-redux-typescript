










'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}











var PixelRatio=require('PixelRatio');
var Platform=require('Platform');

var assetPathUtils=require('../../local-cli/bundle/assetPathUtils');
var invariant=require('fbjs/lib/invariant');




function getScaledAssetPath(asset){
var scale=AssetSourceResolver.pickScale(asset.scales,PixelRatio.get());
var scaleSuffix=scale===1?'':'@'+scale+'x';
var assetDir=assetPathUtils.getBasePath(asset);
return assetDir+'/'+asset.name+scaleSuffix+'.'+asset.type;
}




function getAssetPathInDrawableFolder(asset){
var scale=AssetSourceResolver.pickScale(asset.scales,PixelRatio.get());
var drawbleFolder=assetPathUtils.getAndroidDrawableFolderName(asset,scale);
var fileName=assetPathUtils.getAndroidResourceIdentifier(asset);
return drawbleFolder+'/'+fileName+'.'+asset.type;
}var

AssetSourceResolver=function(){







function AssetSourceResolver(serverUrl,bundlePath,asset){_classCallCheck(this,AssetSourceResolver);
this.serverUrl=serverUrl;
this.bundlePath=bundlePath;
this.asset=asset;
}_createClass(AssetSourceResolver,[{key:'isLoadedFromServer',value:function isLoadedFromServer()

{
return!!this.serverUrl;
}},{key:'isLoadedFromFileSystem',value:function isLoadedFromFileSystem()

{
return!!this.bundlePath;
}},{key:'defaultAsset',value:function defaultAsset()

{
if(this.isLoadedFromServer()){
return this.assetServerURL();
}

if(Platform.OS==='android'){
return this.isLoadedFromFileSystem()?
this.drawableFolderInBundle():
this.resourceIdentifierWithoutScale();
}else{
return this.scaledAssetPathInBundle();
}
}},{key:'assetServerURL',value:function assetServerURL()





{
invariant(!!this.serverUrl,'need server to load from');
return this.fromSource(
this.serverUrl+getScaledAssetPath(this.asset)+
'?platform='+Platform.OS+'&hash='+this.asset.hash);

}},{key:'scaledAssetPath',value:function scaledAssetPath()





{
return this.fromSource(getScaledAssetPath(this.asset));
}},{key:'scaledAssetPathInBundle',value:function scaledAssetPathInBundle()





{
var path=this.bundlePath||'';
return this.fromSource(path+getScaledAssetPath(this.asset));
}},{key:'resourceIdentifierWithoutScale',value:function resourceIdentifierWithoutScale()







{
invariant(Platform.OS==='android','resource identifiers work on Android');
return this.fromSource(assetPathUtils.getAndroidResourceIdentifier(this.asset));
}},{key:'drawableFolderInBundle',value:function drawableFolderInBundle()






{
var path=this.bundlePath||'';
return this.fromSource(
'file://'+path+getAssetPathInDrawableFolder(this.asset));

}},{key:'fromSource',value:function fromSource(

source){
return{
__packager_asset:true,
width:this.asset.width,
height:this.asset.height,
uri:source,
scale:AssetSourceResolver.pickScale(this.asset.scales,PixelRatio.get())};

}}],[{key:'pickScale',value:function pickScale(

scales,deviceScale){

for(var i=0;i<scales.length;i++){
if(scales[i]>=deviceScale){
return scales[i];
}
}




return scales[scales.length-1]||1;
}}]);return AssetSourceResolver;}();



module.exports=AssetSourceResolver;