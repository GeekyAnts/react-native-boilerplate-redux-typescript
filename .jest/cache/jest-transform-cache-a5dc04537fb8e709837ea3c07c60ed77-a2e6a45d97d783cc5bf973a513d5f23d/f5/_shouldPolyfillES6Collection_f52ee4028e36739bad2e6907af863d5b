











'use strict';





function shouldPolyfillES6Collection(collectionName){
var Collection=global[collectionName];
if(Collection==null){
return true;
}





if(typeof global.Symbol!=='function'){
return true;
}

var proto=Collection.prototype;




return Collection==null||
typeof Collection!=='function'||
typeof proto.clear!=='function'||
new Collection().size!==0||
typeof proto.keys!=='function'||
typeof proto.forEach!=='function';
}

module.exports=shouldPolyfillES6Collection;