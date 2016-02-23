# tdui-admin
使用webpack整合打包tdui、mmstate的SPA项目示例。  
npm install安装依赖模块。
  
安装前可设置使用淘宝镜像：  
`npm config set registry https://registry.npm.taobao.org`  
设置全局模块安装目录和缓存目录：  
`npm config set prefix "xxx"`  
`npm config set cache "yyy"`  
  
模块安装后可将模块link至项目模块目录：  
`npm link --local 模块名`  

打包命令：  
`webpack`  
打包并压缩命令：  
`webpack -p`  

调试启动命令：  
`node app-dev`  
Express启动命令：  
`node app`  
