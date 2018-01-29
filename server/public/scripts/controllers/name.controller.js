myApp.controller("CONTROLLERNAME", ['SERVICENAME', function(SERVICENAME){
	console.log('CONTROLLERNAME loaded');
	
	const self = this;

	//Verify service is working and shared with the views
	self.message = SERVICENAME.message;

}]);