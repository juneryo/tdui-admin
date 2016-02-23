//webpack dev server启动文件(命令：node app-dev)
var webpack = require('webpack'),	WebpackDevServer = require('webpack-dev-server'), webpackConfig = require('./webpack.config');

webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:8090', "webpack/hot/dev-server");
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

var server = new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(8090, function (err, result) {
  if(err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:8090');
});
