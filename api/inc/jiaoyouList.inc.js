(function () { 
	var obj =  function () {
		this.getData = function() {
			return {id:1};
		};
	};
	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	}
	
})();
