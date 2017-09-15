










'use strict';

var Platform=require('Platform');
var invariant=require('fbjs/lib/invariant');





var HMRClient={
enable:function enable(platform,bundleEntry,host,port){
invariant(platform,'Missing required parameter `platform`');
invariant(bundleEntry,'Missing required paramenter `bundleEntry`');
invariant(host,'Missing required paramenter `host`');




var WebSocket=require('WebSocket');

var wsHostPort=port!==null&&port!==''?
host+':'+port:
host;


var wsUrl='ws://'+wsHostPort+'/hot?'+('platform='+
platform+'&')+('bundleEntry='+
bundleEntry.replace('.bundle','.js'));

var activeWS=new WebSocket(wsUrl);
activeWS.onerror=function(e){
var error='Hot loading isn\'t working because it cannot connect to the development server.\n\nTry the following to fix the issue:\n- Ensure that the packager server is running and available on the same network';






if(Platform.OS==='ios'){
error+='\n- Ensure that the Packager server URL is correctly set in AppDelegate';



}else{
error+='\n- Ensure that your device/emulator is connected to your machine and has USB debugging enabled - run \'adb devices\' to see a list of connected devices\n- If you\'re on a physical device connected to the same machine, run \'adb reverse tcp:8081 tcp:8081\' to forward requests from your device\n- If your device is on the same Wi-Fi network, set \'Debug server host & port for device\' in \'Dev settings\' to your machine\'s IP address and the port of the local dev server - e.g. 10.0.1.1:8081';





}

error+='\n\nURL: '+


host+':'+port+'\n\nError: '+

e.message;


throw new Error(error);
};
activeWS.onmessage=function(_ref){var data=_ref.data;

var HMRLoadingView=require('HMRLoadingView');

data=JSON.parse(data);

switch(data.type){
case'update-start':{
HMRLoadingView.showMessage('Hot Loading...');
break;
}
case'update':{var _data$body=





data.body,modules=_data$body.modules,sourceMappingURLs=_data$body.sourceMappingURLs,sourceURLs=_data$body.sourceURLs,inverseDependencies=_data$body.inverseDependencies;

if(Platform.OS==='ios'){
var RCTRedBox=require('NativeModules').RedBox;
RCTRedBox&&RCTRedBox.dismiss&&RCTRedBox.dismiss();
}else{
var RCTExceptionsManager=require('NativeModules').ExceptionsManager;
RCTExceptionsManager&&RCTExceptionsManager.dismissRedbox&&RCTExceptionsManager.dismissRedbox();
}

modules.forEach(function(_ref2,i){var id=_ref2.id,code=_ref2.code;
code=code+'\n\n'+sourceMappingURLs[i];




var injectFunction=typeof global.nativeInjectHMRUpdate==='function'?
global.nativeInjectHMRUpdate:
eval;

code=[
'__accept(',
id+',',
'function(global,require,module,exports){',''+
code,
'\n},',''+
JSON.stringify(inverseDependencies),
');'].
join('');

injectFunction(code,sourceURLs[i]);
});

HMRLoadingView.hide();
break;
}
case'update-done':{
HMRLoadingView.hide();
break;
}
case'error':{
HMRLoadingView.hide();
throw new Error(data.body.type+' '+data.body.description);
}
default:{
throw new Error('Unexpected message: '+data);
}}

};
}};


module.exports=HMRClient;