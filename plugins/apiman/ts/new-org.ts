/// <reference path="apimanPlugin.ts"/>
module Apiman {

  export var NewOrgController = _module.controller("Apiman.NewOrgController", ['$location','$scope', 'OrganizationEntry',  ($location,$scope, OrganizationEntry) => {

    $scope.saveNewOrg = function() {
        
        OrganizationEntry.save($scope.org, function(reply) {
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
