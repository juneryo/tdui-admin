define(['tdui', 'mmState', 'tdTree'], function (TD) {
	var dat = [
		{id:'1', text: '示例', expand:true, checked:true, disabled:true, icon:'glyphicon glyphicon-th-large', children: [
			{id:'1-1', text: '示例01', expand:false, checked:false, disabled:false, href:'#!/main/example/01', children: []},
			{id:'1-2', text: '示例02', expand:false, checked:false, disabled:false, href:'#!/main/example/02', children: []}
		]}
	];

	var opts = {
		$id: 'main',
		main_view: '',
		path: '',
		left: '',
		loading: true,
		height: document.documentElement.clientHeight - 90,
		login_user: 'admin',
		login_role: '管理员',
		toggleMenu: function(ev) {
			if(vMain.left === 0) {
				vMain.left = '';
			}else {
				vMain.left = 0;
			}
		},
		logout: function(ev) {
			TD.confirm('确认要退出系统吗？', function() {
				avalon.router.navigate('/');
			}, function() {
				TD.hint('取消退出');
			});
		},
		isFullScreen: false,
		fullScreen: function(ev) {
			var ele = document.documentElement;
			if(vMain.isFullScreen == false) {
				if(ele.requestFullscreen) {
					ele.requestFullscreen();
				}else if(ele.mozRequestFullScreen) {
					ele.mozRequestFullScreen();
				}else if(ele.webkitRequestFullscreen) {
					ele.webkitRequestFullscreen();
				}else if(ele.msRequestFullscreen) {
					ele.msRequestFullscreen();
				}
			}else {
				if(document.exitFullscreen) {
					document.exitFullscreen();
				}else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				}else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
			}
		},
		$index_tree: {
			data: dat
		}
	};
	var vMain = avalon.define(opts);

	avalon.bind(window, 'resize', function() {
		vMain.height = document.documentElement.clientHeight - 90;
		if(window.outerHeigth==screen.heigth && window.outerWidth==screen.width) {
			vMain.isFullScreen = true;
		}else {
			vMain.isFullScreen = false;
		}
	});

	return avalon.controller(function ($ctrl) {
    $ctrl.$onRendered = function () {
        avalon.router.navigate('/main/home');
    };
    $ctrl.$onEnter = function (param, rs, rj) {
        if(avalon.vmodels['index'] && avalon.vmodels['index'].bg_cls != 'main') {
            avalon.vmodels['index'].bg_cls = 'main';
        }
        //avalon.router.navigate('/error/404'); return false;
    };
    $ctrl.$onBeforeUnload = function () {
        
    };
    $ctrl.$vmodels = [vMain];
  });
});
