angular
  .module("upAndRunning", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("endFactory", [
    "$resource",
    EndFactoryFunction
  ])
  .factory("frameworkFactory", [
    "$resource",
    FrameworkFactoryFunction
  ])
  .controller("EndIndexController", [
    "$scope",
    "EndFactory",
    EndIndexControllerFunction
  ])
  .controller("EndShowController", [
    "$scope",
    "$http",
    "EndFactory",
    "$stateParams",
    EndShowControllerFunction
  ])
  .controller("FrameworkIndexController"), [
    "FrameworkFactory",
    FrameworkIndexControllerFunction
  ]
  .controller("FrameworkShowController", [
    "$scope",
    "$http",
    "FrameworkFactory",
    "$stateParams",
    "$resource",
    FrameworkShowControllerFunction
  ])
  function RouterFunction($stateProvider){
    $stateProvider
    .state("endIndex", {
      url: "/",
      templateUrl: "js/ng-views/ends/index.html",
      controller: "EndIndexController",
      controller as: "vm"
    })
  }
  .state("endShow", {
    url: "/ends/:id",
    templateUrl: "js/ng-views/ends/show.html",
    controller: "EndShowController",
    controllerAs: "vm"
  })
  .state("frameworkIndex", {
    url: "/ends/:id/frameworks",
    templateUrl: "js/ng-views/frameworks/index.html",
    controller: "FrameworkIndexControllerFunction",
    controllerAs: "vm"
  })
  .state("frameworkShow", {

  })
