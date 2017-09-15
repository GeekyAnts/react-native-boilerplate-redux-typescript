










'use strict';




var deepDiffer=function deepDiffer(one,two){
if(one===two){

return false;
}
if(typeof one==='function'&&typeof two==='function'){

return false;
}
if(typeof one!=='object'||one===null){

return one!==two;
}
if(typeof two!=='object'||two===null){


return true;
}
if(one.constructor!==two.constructor){
return true;
}
if(Array.isArray(one)){

var len=one.length;
if(two.length!==len){
return true;
}
for(var ii=0;ii<len;ii++){
if(deepDiffer(one[ii],two[ii])){
return true;
}
}
}else{
for(var key in one){
if(deepDiffer(one[key],two[key])){
return true;
}
}
for(var twoKey in two){


if(one[twoKey]===undefined&&two[twoKey]!==undefined){
return true;
}
}
}
return false;
};

module.exports=deepDiffer;