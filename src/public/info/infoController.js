(function(){
	'use strict';

	angular.module('common')
	.controller('InfoController',InfoController);

	InfoController.$inject=['SignUpService','ApiPath']
	function InfoController(SignUpService,ApiPath){
		var info=this;

		info.basePath=ApiPath;

		if(SignUpService.userInfo){
			info.userInfo = SignUpService.userInfo;


			var promise=SignUpService.getItem(info.userInfo.shortname);

			promise.then(function(response){
				info.userInfo.itemName=response.data.name;
				info.userInfo.itemDescription=response.data.description;
			});
		}else{
			info.empty="empty";
		}

		
	}
})();