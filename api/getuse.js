
(function () { 
	var obj =  function (pkg, env, req, res) {
		this.call = function() {
			delete require.cache[ __dirname +'/inc/jiaoyouList.inc.js'];
			var JYclass = require( __dirname +'/inc/jiaoyouList.inc.js');
			var o = new JYclass();
			res.send(o.getData());
		};
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
