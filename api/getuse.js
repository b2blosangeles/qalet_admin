(function () { 
	var obj =  function (pkg, env, req, res) {
		this.call = function() {
		res.send('8899');
		};	
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
