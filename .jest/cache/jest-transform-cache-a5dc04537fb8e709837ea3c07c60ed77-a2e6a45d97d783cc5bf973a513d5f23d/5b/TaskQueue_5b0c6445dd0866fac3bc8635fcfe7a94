










'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var infoLog=require('infoLog');
var invariant=require('fbjs/lib/invariant');











var DEBUG=false;var

















TaskQueue=function(){







function TaskQueue(_ref){var onMoreTasks=_ref.onMoreTasks;_classCallCheck(this,TaskQueue);
this._onMoreTasks=onMoreTasks;
this._queueStack=[{tasks:[],popable:false}];
}_createClass(TaskQueue,[{key:'enqueue',value:function enqueue(






task){
this._getCurrentQueue().push(task);
}},{key:'enqueueTasks',value:function enqueueTasks(

tasks){var _this=this;
tasks.forEach(function(task){return _this.enqueue(task);});
}},{key:'cancelTasks',value:function cancelTasks(

tasksToCancel){

this._queueStack=this._queueStack.
map(function(queue){return _extends({},
queue,{
tasks:queue.tasks.filter(function(task){return tasksToCancel.indexOf(task)===-1;})});}).

filter(function(queue,idx){return queue.tasks.length>0||idx===0;});
}},{key:'hasTasksToProcess',value:function hasTasksToProcess()











{
return this._getCurrentQueue().length>0;
}},{key:'processNext',value:function processNext()




{
var queue=this._getCurrentQueue();
if(queue.length){
var task=queue.shift();
try{
if(task.gen){
DEBUG&&infoLog('genPromise for task '+task.name);
this._genPromise(task);
}else if(task.run){
DEBUG&&infoLog('run task '+task.name);
task.run();
}else{
invariant(
typeof task==='function',
'Expected Function, SimpleTask, or PromiseTask, but got:\n'+
JSON.stringify(task,null,2));

DEBUG&&infoLog('run anonymous task');
task();
}
}catch(e){
e.message='TaskQueue: Error with task '+(task.name||'')+': '+
e.message;
throw e;
}
}
}},{key:'_getCurrentQueue',value:function _getCurrentQueue()




{
var stackIdx=this._queueStack.length-1;
var queue=this._queueStack[stackIdx];
if(queue.popable&&
queue.tasks.length===0&&
this._queueStack.length>1){
this._queueStack.pop();
DEBUG&&infoLog('popped queue: ',{stackIdx:stackIdx,queueStackSize:this._queueStack.length});
return this._getCurrentQueue();
}else{
return queue.tasks;
}
}},{key:'_genPromise',value:function _genPromise(

task){var _this2=this;




this._queueStack.push({tasks:[],popable:false});
var stackIdx=this._queueStack.length-1;
DEBUG&&infoLog('push new queue: ',{stackIdx:stackIdx});
DEBUG&&infoLog('exec gen task '+task.name);
task.gen().
then(function(){
DEBUG&&infoLog(
'onThen for gen task '+task.name,
{stackIdx:stackIdx,queueStackSize:_this2._queueStack.length});

_this2._queueStack[stackIdx].popable=true;
_this2.hasTasksToProcess()&&_this2._onMoreTasks();
}).
catch(function(ex){
ex.message='TaskQueue: Error resolving Promise in task '+task.name+': '+ex.message;
throw ex;
}).
done();
}}]);return TaskQueue;}();



module.exports=TaskQueue;