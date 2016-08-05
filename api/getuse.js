// res.send(__dirname + '/obj.inc.js');
delete require.cache[__dirname + '__dirname + '/obj.inc.js];
var o = require(__dirname + '/obj.inc.js');
var v = new o(pkg, env, req, res);
v.load();

