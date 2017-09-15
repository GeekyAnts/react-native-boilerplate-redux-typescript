











'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var mixInEventEmitter=require('mixInEventEmitter');var










DocumentSelectionState=function(){




function DocumentSelectionState(anchor,focus){_classCallCheck(this,DocumentSelectionState);
this._anchorOffset=anchor;
this._focusOffset=focus;
this._hasFocus=false;
}_createClass(DocumentSelectionState,[{key:'update',value:function update(








anchor,focus){
if(this._anchorOffset!==anchor||this._focusOffset!==focus){
this._anchorOffset=anchor;
this._focusOffset=focus;
this.emit('update');
}
}},{key:'constrainLength',value:function constrainLength(







maxLength){
this.update(
Math.min(this._anchorOffset,maxLength),
Math.min(this._focusOffset,maxLength));

}},{key:'focus',value:function focus()

{
if(!this._hasFocus){
this._hasFocus=true;
this.emit('focus');
}
}},{key:'blur',value:function blur()

{
if(this._hasFocus){
this._hasFocus=false;
this.emit('blur');
}
}},{key:'hasFocus',value:function hasFocus()




{
return this._hasFocus;
}},{key:'isCollapsed',value:function isCollapsed()




{
return this._anchorOffset===this._focusOffset;
}},{key:'isBackward',value:function isBackward()




{
return this._anchorOffset>this._focusOffset;
}},{key:'getAnchorOffset',value:function getAnchorOffset()




{
return this._hasFocus?this._anchorOffset:null;
}},{key:'getFocusOffset',value:function getFocusOffset()




{
return this._hasFocus?this._focusOffset:null;
}},{key:'getStartOffset',value:function getStartOffset()




{
return(
this._hasFocus?Math.min(this._anchorOffset,this._focusOffset):null);

}},{key:'getEndOffset',value:function getEndOffset()




{
return(
this._hasFocus?Math.max(this._anchorOffset,this._focusOffset):null);

}},{key:'overlaps',value:function overlaps(






start,end){
return(
this.hasFocus()&&
this.getStartOffset()<=end&&start<=this.getEndOffset());

}}]);return DocumentSelectionState;}();


mixInEventEmitter(DocumentSelectionState,{
'blur':true,
'focus':true,
'update':true});


module.exports=DocumentSelectionState;