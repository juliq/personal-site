myApp.controller("AppController", ['$location', function($location){
	const self = this;

    self.getClass = function(pathName) {
        if($location.path() === pathName) {
            return 'active';
        } else {
            return '';
        }
    }
}]);