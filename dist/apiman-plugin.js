

/// <reference path="../../includes.ts"/>
var Apiman;
(function (Apiman) {
    Apiman.pluginName = "hawtio-assembly";
    Apiman.log = Logger.get(Apiman.pluginName);
    Apiman.templatePath = "plugins/apiman/html";
})(Apiman || (Apiman = {}));

/// <reference path="../../includes.ts"/>
/// <reference path="apimanGlobals.ts"/>
var Apiman;
(function (Apiman) {
    Apiman._module = angular.module(Apiman.pluginName, []);
    var tab = undefined;
    Apiman._module.config(['$locationProvider', '$routeProvider', 'HawtioNavBuilderProvider', function ($locationProvider, $routeProvider, builder) {
        tab = builder.create().id(Apiman.pluginName).title(function () { return "Apiman"; }).href(function () { return "/apiman"; }).subPath("Page 1", "page1", builder.join(Apiman.templatePath, 'page1.html')).build();
        builder.configureRouting($routeProvider, tab);
        $locationProvider.html5Mode(true);
    }]);
    Apiman._module.run(['HawtioNav', function (HawtioNav) {
        HawtioNav.add(tab);
        Apiman.log.debug("loaded");
    }]);
    hawtioPluginLoader.addModule(Apiman.pluginName);
})(Apiman || (Apiman = {}));

/// <reference path="apimanPlugin.ts"/>
var Apiman;
(function (Apiman) {
    Apiman.Page1Controller = Apiman._module.controller("Apiman.Page1Controller", ['$scope', function ($scope) {
        $scope.target = "World!";
    }]);
})(Apiman || (Apiman = {}));

angular.module("apiman-plugin-templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("plugins/apiman/html/page1.html","<div class=\"row\">\n  <div class=\"col-md-12\" ng-controller=\"Apiman.Page1Controller\">\n    <h1>Page 1</h1>\n    <p>Hello {{target}}</p>\n  </div>\n</div>\n");}]); hawtioPluginLoader.addModule("apiman-plugin-templates");
