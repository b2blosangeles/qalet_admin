(function () { 
	var obj =  function (pkg, env, req, res) {
		this.load = function() {
		res.send('18899');
		};	
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
