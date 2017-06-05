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
    "$state",
    "endFactory",
    EndIndexControllerFunction
  ])
  .controller("EndShowController", [
    "$state",
    "$stateParams",
    "endFactory",
    EndShowControllerFunction
  ])

  // .controller("FrameworkIndexController"), [
  //   "FrameworkFactory",
  //   FrameworkIndexControllerFunction
  // ]
  // .controller("FrameworkShowController", [
  //   "$scope",
  //   "$http",
  //   "FrameworkFactory",
  //   "$stateParams",
  //   "$resource",
  //   FrameworkShowControllerFunction
  // ])
  function RouterFunction($stateProvider){
    $stateProvider
    .state("endIndex", {
      url: "/ends",
      templateUrl: "/assets/js/ng-views/ends/index.html",
      controller: "EndIndexController",
      controllerAs: "vm"
    })
  .state("endShow", {
    url: "/ends/:type",
    templateUrl: "/assets/js/ng-views/ends/show.html",
    controller: "EndShowController",
    controllerAs: "vm"
  })


  // .state("frameworkIndex", {
  //   url: "/ends/:type/frameworks",
  //   templateUrl: "js/ng-views/frameworks/index.html",
  //   controller: "FrameworkIndexControllerFunction",
  //   controllerAs: "vm"
  // })
  // .state("frameworkShow", {
  //   url: "/ends/:type/frameworks/:title",
  //   templateUrl: "js/ng-views/frameworks/show.html",
  //   controller: "FrameworkShowController",
  //   controllerAs: "vm"
  // })
}
// link to API
function EndFactoryFunction($resource){
  return $resource("/api/ends/:type")
}

function FrameworkFactoryFunction($resource) {
  return $resource ("/api/ends/:type/frameworks/:title")
}

function EndIndexControllerFunction($state, endFactory){
  console.log("the End Index is firing");
  this.ends = endFactory.query();
}

function EndShowControllerFunction($state, $stateParams, endFactory){
  this.end = endFactory.get({type: $stateParams.type})
}

function FrameworkIndexControllerFunction($resource) {
  return $resource ("/api/ends/:type/frameworks/:title")
}

function FrameworkShowControllerFunction($state, $stateParams, frameworkFactory){
  this.framework = frameworkFactory.get({end: $stateParams.end, title: $stateParams.title})
}
