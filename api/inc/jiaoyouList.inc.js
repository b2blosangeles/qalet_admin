(function () { 
	var obj =  function (pkg, env, req, res) {
		this.call = function() {
			return {id:1};
		};
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
