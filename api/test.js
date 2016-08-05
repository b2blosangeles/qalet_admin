// res.send(new Date().toString() + '==CC==' + dirname);
			delete require.cache[env.space_path + 'inc/jiaoyouList.inc.js'];
			var JYclass = require(env.space_path  + 'inc/jiaoyouList.inc.js');
			var o = new JYclass();
			var fs = require('fs');
			
			
			pkg.fs.readFile(env.space_path + 'inc/jiaoyouList.inc.js', 'utf8', function(err, code) {
									res.send(code);
								});						
			
		//	res.send(o.getData());

//res.send(env);
