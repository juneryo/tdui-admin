var express = require("express"), http = require("http"), path = require("path");
var app = express();

//设置可通过url地址访问资源的目录
//打包文件目录(如：url通过"/common.js" 访问 "dist/client/common.js")
app.use(express.static(path.join(__dirname, "dist/client")));
//静态资源目录(如：url通过"/src/client/assets/xxx/xxx" 访问 "src/client/assets/xxx/xxx" 目录下的文件)
app.use("/src/client/assets/bootstrap/css", express.static(path.join(__dirname, "src/client/assets/bootstrap/css")));
app.use("/src/client/assets/bootstrap/fonts", express.static(path.join(__dirname, "src/client/assets/bootstrap/fonts")));
app.use("/src/client/assets/animation/css", express.static(path.join(__dirname, "src/client/assets/animation/css")));
app.use("/src/client/assets/tdui-admin/css", express.static(path.join(__dirname, "src/client/assets/tdui-admin/css")));
app.use("/src/client/assets/tdui-admin/img", express.static(path.join(__dirname, "src/client/assets/tdui-admin/img")));
app.use("/src/client/assets/animation/js", express.static(path.join(__dirname, "src/client/assets/animation/js")));
//for ie8
app.use("/src/client/assets/iehack", express.static(path.join(__dirname, "src/client/assets/iehack")));
app.use("/src/client/assets/avalon", express.static(path.join(__dirname, "src/client/assets/avalon")));

//路由配置 以/xxx开头的请求全部交由xxx.js处理
app.use("/userAct", require("./src/server/routers/router-user-act.js"));
app.use("/data", require("./src/server/routers/router-data.js"));

//设置主页
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./dist/client/index.html"));
});
app.set("port", process.env.PORT || 3000);

http.createServer(app).listen(app.get("port"), function(){
	console.log("Express server listening on port " + app.get("port"));
});

module.exports = app;
