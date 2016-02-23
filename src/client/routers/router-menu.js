require('mmState');

//状态配置
avalon.state('MAIN', {
  url: '/main',
  views: {
    '': {
      templateProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('text!../modules/main/main.html'));});});
      },
      controllerProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('../modules/main/main.js'));});});
      },
      ignoreChange: function (changeType) {
        if(changeType) return true;
      }
    }
  }
}).state('MAIN.HOME', {
  url: '/home',  //注意此处的URL,不能是/main/home
  views: {
    '': {
      templateProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('text!../modules/home/home.html'));});});
      },
      controllerProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('../modules/home/home.js'));});});
      },
      ignoreChange: function (changeType) {
        if(changeType) return true;
      }
    }
  }
}).state('MAIN.EXAMPLE01', {
  url: '/example/01',
  views: {
    '': {
      templateProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('text!../modules/example/01/example01.html'));});});
      },
      controllerProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('../modules/example/01/example01'));});});
      },
      ignoreChange: function (changeType) {
        if(changeType) return true;
      }
    }
  }
}).state('MAIN.EXAMPLE02', {
  url: '/example/02',
  views: {
    '': {
      templateProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('text!../modules/example/02/example02.html'));});});
      },
      controllerProvider: function () {
        return new Promise(function (rs) {require.ensure([], function () {rs(require('../modules/example/02/example02'));});});
      },
      ignoreChange: function (changeType) {
        if(changeType) return true;
      }
    }
  }
});
