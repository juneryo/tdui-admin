require('mmState');
require('./routers/router-common');
require('./routers/router-menu');
//引入全局css，未通过require引入的css除特殊情况外，都应通过cdn引入
require('css!./assets/animation/css/waves.min.css');
require('css!./assets/tdui/css/td.base.css');
// 定义一个顶层的vmodel，用来放置全局共享数据
var vIndex = avalon.define({
	$id: 'index',
	bg_cls: 'login',  //login.js main.js中控制
	index_view: ''
});

//状态全局配置
avalon.state.config({
	onError: function() {
		avalon.log('###STATE ERROR###')
		avalon.log(arguments);
	},
	onBeforeUnload: function(from, to) {

	},
	onAbort: function(from, to) {

	},
	onUnload: function(from, to) {
    if(avalon.vmodels['main']) {
      avalon.vmodels['main'].loading = true;
    }
	},
	onBegin: function(from, to) {

	},
	onLoad: function() {
    if(avalon.vmodels['main']) {
      avalon.vmodels['main'].loading = false;
			avalon.vmodels['main'].path = mmState.currentState.url.replace('/main', '').replace(/\//g, ' / ').toUpperCase();
    }
	},
	onViewEnter: function(newNode, oldNode) {

	}
});

avalon.history.start({
  fireAnchor: false
});
