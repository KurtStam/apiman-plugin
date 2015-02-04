/// <reference path="apimanPlugin.ts"/>
/// <reference path="services.ts"/>
module Apiman {

  export var UserOrgsController = _module.controller("Apiman.UserOrgsController", ['$scope', 'UserOrgs',  ($scope, UserOrgs) => {
    UserOrgs.query(function(userOrgs) {
	$scope.organizations = userOrgs;
   }, function(error) {  
        alert("ERROR=" + error);
   });
  }])
  

}
