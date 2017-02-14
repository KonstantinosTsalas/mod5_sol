(function(){
	'use strict';

	angular.module('common').
	service('SignUpService',SignUpService);

	SignUpService.$inject=['$http','ApiPath'];
	function SignUpService($http,ApiPath){
		var service=this;

		// service.userInfo={};

		service.getItem=function(shortname){
			return $http.get(ApiPath + '/menu_items/' + shortname + '.json').then(function(response){
				return response;
			});
		}

	}
})();