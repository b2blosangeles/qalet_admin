(function () { 
	var obj =  function (pkg, env, req, res) {
		this.call = function() {
			res.send(new Date().toString() + '==AAA==');
		};
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
