require('mmState');

//状态配置
avalon.state('INDEX', {
  url: '/',
  views: {
    '': {
      templateProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('text!../modules/login/login.html'));});});
      },
      controllerProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('../modules/login/login.js'));});});
      },
      ignoreChange: function (changeType) {
        if(changeType) return true;
      }
    }
  }
});
avalon.state('ERR404', {
  url: '/error/404',
  views: {
    '': {
      templateProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('text!../modules/common/error/404.html'));});});
      },
      ignoreChange: function (changeType) {
        if(changeType) return true;
      }
    }
  }
});
