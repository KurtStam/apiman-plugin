
   var userOrgsServices = angular.module('userOrgsServices', ['ngResource']);
   userOrgsServices.factory('UserOrgs', ['$resource',
    function($resource){
      return $resource('http://127.0.0.1/apiman/users/admin/organizations');
   }]);
 
   var organizationServices = angular.module('organizationServices', ['ngResource']);
   organizationServices.factory('OrganizationEntry', ['$resource',
    function($resource){
      return $resource('http://127.0.0.1/apiman/organizations/:id');
   }]);
 

