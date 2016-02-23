//模块项目主页 https://github.com/mafintosh/mongojs
var mongojs = require("mongojs"), config = require("../config/mongodb-config.json");
var url = [config.username, ":", config.password, "@", config.host, ":", config.port, "/", config.dbname].join("");

module.exports = mongojs(url);
