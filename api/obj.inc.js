(function () { 
	var obj =  function (pkg, env, req, res) {
		this.load = function() {
			res.send(new Date().toString() + '===');
		};
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
