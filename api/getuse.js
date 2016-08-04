(function () { 
	var obj =  function (pkg, env, req, res) {
		this.load = function() {
			var myFunction = new Function("a", "b", "return a * b");

			var x = myFunction(4, 3);
			res.send(x);
		};	
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
