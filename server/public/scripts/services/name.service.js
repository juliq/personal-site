myApp.service('SERVICENAME', ['$http', function($http){
	console.log('SERVICENAME loaded');

	const self = this;
	
	self.message = "Hello from the SERVICENAME!";

}]);