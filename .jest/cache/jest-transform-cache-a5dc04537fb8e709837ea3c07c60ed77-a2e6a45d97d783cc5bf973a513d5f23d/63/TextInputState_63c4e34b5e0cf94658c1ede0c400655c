














'use strict';

var Platform=require('Platform');
var UIManager=require('UIManager');

var TextInputState={



_currentlyFocusedID:null,





currentlyFocusedField:function currentlyFocusedField(){
return this._currentlyFocusedID;
},






focusTextInput:function focusTextInput(textFieldID){
if(this._currentlyFocusedID!==textFieldID&&textFieldID!==null){
this._currentlyFocusedID=textFieldID;
if(Platform.OS==='ios'){
UIManager.focus(textFieldID);
}else if(Platform.OS==='android'){
UIManager.dispatchViewManagerCommand(
textFieldID,
UIManager.AndroidTextInput.Commands.focusTextInput,
null);

}
}
},






blurTextInput:function blurTextInput(textFieldID){
if(this._currentlyFocusedID===textFieldID&&textFieldID!==null){
this._currentlyFocusedID=null;
if(Platform.OS==='ios'){
UIManager.blur(textFieldID);
}else if(Platform.OS==='android'){
UIManager.dispatchViewManagerCommand(
textFieldID,
UIManager.AndroidTextInput.Commands.blurTextInput,
null);

}
}
}};


module.exports=TextInputState;