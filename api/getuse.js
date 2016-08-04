(function () { 
	var obj =  function (pkg, env, req, res) {
		this.load = function() {
			res.send(new Date().toString());
		};
		this.load();
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
