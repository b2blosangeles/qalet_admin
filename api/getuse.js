var o = (function () { 
	var obj =  function (pkg, env, req, res) {
		this.load = function() {
			res.send(new Date().toString());
		};
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
var v = new o(pkg, env, req, res);
v.load();
