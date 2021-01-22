// 1 引入模块
const net = require("net");
const readline = require("readline");
// 2 创建套接字和输入输出命令行
let rl = readline.createInterface({
  // 调用std接口
  input: process.stdin,
  output: process.stdout,
});
let client = new net.Socket();
// 3 链接
client.connect(800, "localhost");

client.setEncoding("utf8");
// 绑定输io流事件,获取输入输出字符
// rl.on('line',(mes)=>{
// client.write(mes);
// })

client.on('data', (data) => {
  alert(data)
});

client.on("error", (e) => {
  alert(e);
});

function csend(mes) {
  client.write(mes);
}


