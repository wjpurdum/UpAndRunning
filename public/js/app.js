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
