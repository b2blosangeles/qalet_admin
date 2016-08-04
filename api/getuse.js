(function () { 
	var obj =  function (pkg, env, req, res) {
		this.load = function() {
			res.send('x');
		};	
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
