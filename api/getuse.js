
(function () { 
	var obj =  function (pkg, env, req, res) {
		this.call = function() {
			var JYclass = require( __dirname +'/inc/jiaoyouList.inc.js');
			var o = new JYclass(pkg, env, req, res);
			res.send(o.call());
		};
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
