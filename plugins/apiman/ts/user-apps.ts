/// <reference path="apimanPlugin.ts"/>
/// <reference path="services.ts"/>
module Apiman {

  export var UserAppsController = _module.controller("Apiman.UserAppsController", ['$scope', 'UserApps',  ($scope, UserApps) => {
    $scope.pluginName = Apiman.pluginName;
    UserApps.query(function(userApps) {
	$scope.applications = userApps;
   }, function(error) {  
        alert("ERROR=" + error);
   });
  }])
  

}
