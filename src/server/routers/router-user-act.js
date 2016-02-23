var express = require("express"), db = require("../database/mongodb.js");
var userActRouter = express.Router();

//处理get请求 /userAct/findOne
userActRouter.get("/findOne", function(req, res, next) {
  db.collection('test_user').findOne(function(err, docs) {
    var result = {};
    if(err) {
      result.rspcod = 300;
      result.rspmsg = "fail";
    }else {
      result.rspcod = 200;
      result.rspmsg = "success";
      result.detail = docs;
    }
    res.send(result);
  });
});

userActRouter.get("/addMore", function(req, res, next) {
  var arr = [];
  for(var i = 0; i < 100000; i ++) {
    var flag = i % 10, user = {};
    switch (flag) {
      case 1:
        user = {"chinese_name": "罗总", "english_name": "yangluo", "gender": "male", "age": 30, "address": "上海市浦东新区玉兰香苑x期xx号", "mobile": "13900001111", "recreational": ["游戏", "足球", "篮球", "唱歌", "旅游"], "status": 1};
        break;
      case 2:
        user = {"chinese_name": "贱晕", "english_name": "yun", "gender": "male", "age": 30, "address": "上海市浦东新区玉兰香苑1期", "mobile": "13822221111", "recreational": ["游戏", "桌球", "唱歌", "吉他", "旅游"], "status": 1};
        break;
      case 3:
        user = {"chinese_name": "洞", "english_name": "dong", "gender": "male", "age": 31, "address": "上海市浦东新区玉兰香苑3期", "mobile": "13911112222", "recreational": ["游戏", "桌球", "羽毛球", "唱歌", "旅游"], "status": 1};
        break;
      case 4:
        user = {"chinese_name": "算算", "english_name": "suansuan", "gender": "male", "age": 31, "address": "浙江省金华市某某区某某路某某号", "mobile": "13923232121", "recreational": ["吃饭", "旅游"], "status": 1};
        break;
      case 5:
        user = {"chinese_name": "小云", "english_name": "xiaoyun", "gender": "male", "age": 31, "address": "上海市浦东新区唐镇某某路某某号", "mobile": "13723232121", "recreational": ["唱歌", "篮球", "麻将", "旅游"], "status": 1};
        break;
      case 6:
        user = {"chinese_name": "安子", "english_name": "anzi", "gender": "male", "age": 32, "address": "不知道", "mobile": "13623232121", "recreational": ["吃饭", "工作", "旅游"], "status": 1};
        break;
      case 7:
        user = {"chinese_name": "斌斌", "english_name": "binbin", "gender": "male", "age": 32, "address": "不知道", "mobile": "13911112121", "recreational": ["吃饭", "游戏", "旅游"], "status": 1};
        break;
      case 8:
        user = {"chinese_name": "波波", "english_name": "bobo", "gender": "male", "age": 33, "address": "不知道", "mobile": "13311112121", "recreational": ["游戏", "马杀鸡"], "status": 1};
        break;
      case 9:
        user = {"chinese_name": "萍姐", "english_name": "pingjie", "gender": "female", "age": 35, "address": "不知道", "mobile": "13011112121", "recreational": ["麻将", "唱歌", "旅游"], "status": 0};
        break;
      default:
        user = {"chinese_name": "小余", "english_name": "junyu", "gender": "male", "age": 31, "address": "上海市浦东新区银山路xxx弄xx号", "mobile": "13916632000", "recreational": ["游戏", "羽毛球", "唱歌", "旅游"], "status": 1};
    }
    arr.push(user);
  }
  var time_start = new Date().getTime();
  db.collection('test_user').insert(arr, function(err, docs) {
    var time_end = new Date().getTime();
    var result = {};
    if(err) {
      result.rspcod = 300;
      result.rspmsg = "fail";
    }else {
      result.rspcod = 200;
      result.rspmsg = "success";
      result.detail = {total: docs.length, time: time_end - time_start};
    }
    res.send(result);
  });
})

module.exports = userActRouter;
