let ipcRenderer = require('electron').ipcRenderer;
window.onload = function (){
    var target = 0
    var base_url = 'http://81.70.224.19:2020';
    var register_form = jQuery("#register_form");
    var btn_register = this.document.querySelector('#register_btn');
    var cancel_login = this.document.querySelector("#cancel_login")
    var one_psw = this.document.querySelector("#one_psw")
    var two_psw = this.document.querySelector("#two_psw")
    const {dialog} = require('electron').remote

    cancel_login.onclick = function (){
        ipcRenderer.send("cancel_login")
    }

    btn_register.onclick = function () {
        target ++;
        if (target > 1){
            return;
        }
        btn_register.setAttribute("value","注册中")
        if (one_psw.value !== two_psw.value){
            showMessage("两次密码不一致")
            btn_register.setAttribute("value","注册")
            return;
        }
        var data = serializeJson(register_form);
        jQuery.ajax({
            url:base_url+register_form.attr("action"),
            contentType:'application/json;charset=UTF-8',
            data:data,
            dataType:'json',
            type:'post',
            success:function (data){
                if (data.success){
                    ipcRenderer.send("cancel_login")
                }else {
                    showMessage(data.message)
                }
                btn_register.setAttribute("value","注册")
                target = 0
            },
            error:function (){
                showMessage('服务连接错误，请稍后重试')
                btn_register.setAttribute("value","注册")
                target = 0
            }
        })
    }

    function serializeJson(ele) {
        var serializeObj = {};
        $(ele.serializeArray()).each(function () {
            serializeObj[this.name] = this.value;
        });
        return JSON.stringify(serializeObj)
    }

    function showMessage(msg){
        dialog.showMessageBox({
            type:'warning',
            title:'行为检测软件',
            message:msg,
        }).then(result=>{
            console.log(result)
        }).catch(err=>{
            console.log(err)
        })
    }
}