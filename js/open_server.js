const fs = require('fs');
const child_process = require('child_process');

var workerProcess = child_process.exec('python '+__dirname+'/python/s.py', function (error, stdout, stderr) {
    if (error) {
        alert(error.stack);
        alert('Error code: '+error.code);
        alert('Signal received: '+error.signal);
    }
});

workerProcess.on('exit', function (code) {
    alert('子进程已退出，退出码 '+code);
});