/// <reference path="apimanPlugin.ts"/>
module Apiman {

  export var NewAppController = _module.controller("Apiman.NewAppController", ['$location','$scope', 'UserOrgs', 'ApplicationEntry',  ($location,$scope, UserOrgs, ApplicationEntry) => {
    $scope.pluginName = Apiman.pluginName;
    UserOrgs.query(function(userOrgs) {
        $scope.organizations = userOrgs;
        $scope.selectedOrg = $scope.organizations[0];
    }, function(error) {
        alert("ERROR=" + error);
    });
    $scope.setOrg = function(org) {
      $scope.selectedOrg = org;
    };
    $scope.saveNewApp = function() {
        ApplicationEntry.save({organizationId: $scope.selectedOrg.id}, $scope.app, function(reply) {
           $location.path('apiman/dash.html');
        }, function(error) {
           if (error.status == 409) {
              $location.path('apiman/error-409.html');          
           } else {
              alert("ERROR=" + error.status + " " + error.statusText);
           }
        });
    };
  }]);

}
