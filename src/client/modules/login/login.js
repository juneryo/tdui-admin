define(['tdui', 'mmState', 'tdForm', 'tdText', 'tdPassword'], function (TD) {
	var opts = {
		$id: 'login',
		$form_opt: {
			onclicksubmited: function(ev, vm) {
				if(vm.checkValid()) {
					avalon.router.navigate('/main');
				}else {
					TD.hint('请填写用户名和密码');
				}
			}
		}
	};
	var vLogin = avalon.define(opts);

	return avalon.controller(function ($ctrl) {
        $ctrl.$onRendered = function () {

        };
        $ctrl.$onEnter = function (param, rs, rj) {
            if(avalon.vmodels['index'] && avalon.vmodels['index'].bg_cls != 'login') {
                avalon.vmodels['index'].bg_cls = 'login';
            }
        };
        $ctrl.$onBeforeUnload = function () {

        };
        $ctrl.$vmodels = [vLogin];
    });
});
