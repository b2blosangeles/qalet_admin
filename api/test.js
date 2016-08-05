// res.send(new Date().toString() + '==CC==' + dirname);
			delete require.cache[env.space_path + 'inc/jiaoyouList.inc.js'];
			var JYclass = require(env.space_path  + 'inc/jiaoyouList.inc.js');
			var o = new JYclass();
			var fs = require('fs');
			res.send(o.getData());

//res.send(env);
