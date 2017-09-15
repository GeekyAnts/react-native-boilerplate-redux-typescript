










'use strict';

var invariant=require('fbjs/lib/invariant');

var ensurePositiveDelayProps=function ensurePositiveDelayProps(props){
invariant(
!(props.delayPressIn<0||props.delayPressOut<0||
props.delayLongPress<0),
'Touchable components cannot have negative delay properties');

};

module.exports=ensurePositiveDelayProps;