/// <reference path="apimanPlugin.ts"/>
module Apiman {

  export var Page1Controller = _module.controller("Apiman.Page1Controller", ['$scope', ($scope) => {
    $scope.target = "World!";
  }]);

}
