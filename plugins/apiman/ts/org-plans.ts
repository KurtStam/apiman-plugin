/// <reference path="apimanPlugin.ts"/>
/// <reference path="services.ts"/>
module Apiman {

  export var OrgPlansController = _module.controller("Apiman.OrgPlansController", ['$scope', '$location', 'OrgSvcs',  ($scope, $location, OrgSvcs) => {
    var params = $location.search();
    OrgSvcs.get({organizationId: params.org, entityType: ''}, function(org) {
        $scope.org = org;
    } , function(error) {
        alert("ERROR=" + error);
    });    
    OrgSvcs.query({organizationId: params.org, entityType: 'members'}, function(members) {
        $scope.members = members;
    } , function(error) {
        alert("ERROR=" + error);
    });
    OrgSvcs.query({organizationId: params.org, entityType: 'plans'}, function(plans) {
        $scope.plans = plans;
    } , function(error) {
        alert("ERROR=" + error);
    });
  }])
  

}
