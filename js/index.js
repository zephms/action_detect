var searchInfo = this.document.querySelector("#searchInfo")
var  updateInfo= this.document.querySelector("#updateInfo")
var  updatePassword= this.document.querySelector("#updatePassword")
var  online_check_in= this.document.querySelector("#online_check_in")
var  offline_check_in= this.document.querySelector("#offline_check_in")
var  online_check_behavior= this.document.querySelector("#online_check_behavior")
var  offline_check_behavior_danger= this.document.querySelector("#offline_check_behavior_danger")
var  offline_check_behavior_state= this.document.querySelector("#offline_check_behavior_state")
var ipcRenderer = require('electron').ipcRenderer;
var exit_a = this.document.querySelector("#exit_a")

exit_a.onclick = function (){
    ipcRenderer.send('main-close');
}
//线上点名
online_check_in.onclick = function (){
    csend('online_check_in');
}
//线下点名
offline_check_in.onclick = function (){
    csend('offline_check_in');
}
//线上行为检测
online_check_behavior.onclick = function (){
    csend('online_check_behavior');
}
//线下危险行为检测
offline_check_behavior_danger.onclick = function (){
    csend('offline_check_behavior_danger');
}
//线下状态检测
offline_check_behavior_state.onclick = function (){
    csend('offline_check_behavior_state');
}