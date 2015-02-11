/// <reference path="apimanPlugin.ts"/>
/// <reference path="services.ts"/>
module Apiman {

  export var OrgMembersController = _module.controller("Apiman.OrgMembersController", ['$scope', '$location', 'OrganizationEntry',  ($scope, $location, OrganizationEntry) => {
    var params = $location.search();
    OrganizationEntry.get({organizationId: params.org, entityType: ''}, function(org) {
        $scope.org = org;
    } , function(error) {
        alert("ERROR=" + error);
    });    
    OrganizationEntry.query({organizationId: params.org, entityType: 'members'}, function(members) {
        $scope.members = members;
    } , function(error) {
        alert("ERROR=" + error);
    });
  }])
  

}
