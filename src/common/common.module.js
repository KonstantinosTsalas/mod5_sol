(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://kostis-rest-app.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
