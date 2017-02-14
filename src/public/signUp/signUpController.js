(function(){
	'use strict';

	angular.module('public')
	.controller('signUpController',SignUpController);

	SignUpController.$inject=['SignUpService'];
	function SignUpController(SignUpService){
		var signUp=this;

		signUp.submit=function(){

			var promise =SignUpService.getItem(signUp.shortname);
			promise.then(function(response){
				signUp.error=null;
				signUp.msg="Your Information Has Been Saved!";
				signUp.userInfo={
					"first_name":signUp.firstname,
					"last_name":signUp.lastname,
					"email":signUp.email,
					"phone":signUp.phone,
					"shortname":signUp.shortname
				};
				SignUpService.userInfo = signUp.userInfo;
			}).catch(function(error){
				signUp.error=error;
				signUp.msg=null;
			});
			signUp.completed=true;
		};
	}
})();