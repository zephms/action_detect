let ipcRenderer = require('electron').ipcRenderer;

window.onload = function () {
    var target = 0
    var base_url = 'http://81.70.224.19:2020';
    var login_form = jQuery("#login_form");
    var btn_login = this.document.querySelector('#login_btn');
    var btn_exit = this.document.querySelector("#exit_btn");
    var to_register =  this.document.querySelector("#to_register")
    var cancel_login = this.document.querySelector("#cancel_login")
    const {dialog} = require('electron').remote

    btn_exit.onclick = function () {
        ipcRenderer.send('login-close');
    }

    to_register.onclick = function (){
        ipcRenderer.send("register_open")
    }

    btn_login.onclick = function () {
        target ++;
        if (target > 1){
            return
        }
        btn_login.setAttribute("value","登录中")
        var data = serializeJson(login_form);
        jQuery.ajax({
            url:base_url+login_form.attr("action"),
            contentType:'application/json;charset=UTF-8',
            data:data,
            dataType:'json',
            type:'post',
            success:function (data){
                if (data.success){
                    ipcRenderer.send('login-success',data.data);
                }else {
                    showMessage(data.message)
                }
                btn_login.setAttribute("value","登录")
                target = 0
                btn_login.setAttribute("focus",'false')
            },
            error:function (data){
                showMessage('服务连接错误，请稍后重试')
                btn_login.setAttribute("value","登录")
                btn_login.setAttribute("focus",'false')
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