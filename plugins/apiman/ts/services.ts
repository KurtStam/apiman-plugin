
   var userServices = angular.module('userServices', ['ngResource']);
   userServices.factory('UserSvcs', ['$resource',
    function($resource){
      return $resource('http://127.0.0.1/apiman/users/admin/:entityType',
	{entityType:'@entityType'});
   }]);
 
   var organizationServices = angular.module('organizationServices', ['ngResource']);
   organizationServices.factory('OrgSvcs', ['$resource',
    function($resource){
      return $resource('http://127.0.0.1/apiman/organizations/:organizationId/:entityType/:applicationId/:versionsOrActivity',
	{organizationId:'@organizationId', entityType:'@entityType', applicationId:'@applicationId',versionsOrActivity:'@versionsOrActivity'});
   }]);
