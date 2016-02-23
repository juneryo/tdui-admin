//引用各依赖
var webpack = require("webpack"), path = require("path"), del = require("del");
var ExtractTextPlugin = require("extract-text-webpack-plugin");  //样式提取
var	HtmlWebpackPlugin = require("html-webpack-plugin");  //html模板
var buildPath = "./dist/client/";  //打包文件基础目录

//删除上一次的打包文件(index.html, common.(min.)js, bundle.(min.)js, *.chunk.*.js, style.(min.)css, *.map)
del([buildPath + '*.html', buildPath + '*.js', buildPath + '*.css', buildPath + '*.map']).then(paths => {
  console.log('Delete client bundle files successfully.\n', paths.join('\n'));
});

module.exports = {
	debug: true,
	entry: ["./src/client/index.js"],  //项目入口
	output: {
		path: path.join(__dirname, buildPath + ""),  //打包目录
		filename: "bundle.js",  //打包文件
		publicPath: "",
    chunkFilename: "[name].chunk.[chunkhash:8].js" //给require.ensure用
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
			{test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
			{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
			{test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
		],
    preLoaders: [
			{test: /\.js$/, loader: "require-css-preloader"}
		]
	},
	resolve: {
		extensions: ["", ".js", ".css"],  //require时省略的扩展名，如：require('module') 不需要module.js
		alias: {  //依赖别名
			//avalon相关
			avalon: path.join(__dirname, 'src/client/assets/avalon/avalon'),
			mmRequest: path.join(__dirname, 'src/client/assets/mmRequest/mmRequest'),
			mmPromise: path.join(__dirname, 'src/client/assets/mmPromise/mmPromise'),
			mmHistory: path.join(__dirname, 'src/client/assets/mmRouter/mmHistory'),
			mmRouter: path.join(__dirname, 'src/client/assets/mmRouter/mmRouter'),
			mmState: path.join(__dirname, 'src/client/assets/mmRouter/mmState'),
			//jQuery
			jquery: path.join(__dirname, 'src/client/assets/jquery/jquery.min'),
			//webUploader
			webupload: path.join(__dirname, 'src/client/assets/webuploader/webuploader.min'),
			//echarts图表
			echarts: path.join(__dirname, 'src/client/assets/echarts/echarts.common.min'),
			//加解密
			md5: path.join(__dirname, 'src/client/assets/encrypt/md5.min'),
			//TDUI基础
			tdui: path.join(__dirname, 'src/client/assets/tdui/js/td.base'),
			//TDUI容器类
			tdAccordion: path.join(__dirname, 'src/client/assets/tdui/js/td.accordion'),
			tdDialog: path.join(__dirname, 'src/client/assets/tdui/js/td.dialog'),
			tdPanel: path.join(__dirname, 'src/client/assets/tdui/js/td.panel'),
			tdTab: path.join(__dirname, 'src/client/assets/tdui/js/td.tab'),
			//TDUI组件类
			tdButton: path.join(__dirname, 'src/client/assets/tdui/js/td.button'),
			tdDatagrid: path.join(__dirname, 'src/client/assets/tdui/js/td.datagrid'),
			tdNavbar: path.join(__dirname, 'src/client/assets/tdui/js/td.navbar'),
			tdTree: path.join(__dirname, 'src/client/assets/tdui/js/td.tree'),
			tdUpload: path.join(__dirname, 'src/client/assets/tdui/js/td.upload'),
			//TDUI表单类
			tdForm: path.join(__dirname, 'src/client/assets/tdui/js/td.form'),
			tdAutocomplete: path.join(__dirname, 'src/client/assets/tdui/js/td.autocomplete'),
			tdCheckbox: path.join(__dirname, 'src/client/assets/tdui/js/td.checkbox'),
			tdCheckboxgroup: path.join(__dirname, 'src/client/assets/tdui/js/td.checkboxgroup'),
			tdDatepicker: path.join(__dirname, 'src/client/assets/tdui/js/td.datepicker'),
			tdPassword: path.join(__dirname, 'src/client/assets/tdui/js/td.password'),
			tdRadio: path.join(__dirname, 'src/client/assets/tdui/js/td.radio'),
			tdRadiogroup: path.join(__dirname, 'src/client/assets/tdui/js/td.radiogroup'),
			tdRate: path.join(__dirname, 'src/client/assets/tdui/js/td.rate'),
			tdSelect: path.join(__dirname, 'src/client/assets/tdui/js/td.select'),
			tdSpinner: path.join(__dirname, 'src/client/assets/tdui/js/td.spinner'),
			tdSwitch: path.join(__dirname, 'src/client/assets/tdui/js/td.switch'),
			tdText: path.join(__dirname, 'src/client/assets/tdui/js/td.text'),
			tdTextarea: path.join(__dirname, 'src/client/assets/tdui/js/td.textarea')
		}
	},
	plugins: [
    //将avalon提取出来作为全局变量 无需每次都require
    new webpack.ProvidePlugin({
        avalon: "avalon"
    }),
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('common.js'),
  	//指定模板及参数
  	new HtmlWebpackPlugin({
      title: "TDUI-ADMIN",
      template: "src/client/template/index.html",
      filename: "index.html",
      hash: true
    }),
  	//提取样式至style.css中
    new ExtractTextPlugin("style.css", {
      allChunks: true,
      disable: false
  	})
  ],
	devtool: '#source-map'
}
