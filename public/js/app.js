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
  .factory("commentFactory", [
    "$resource",
    CommentFactoryFunction
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
  .controller("FrameworkShowController", [
    "$state",
    "$stateParams",
    "frameworkFactory",
    "commentFactory",
    FrameworkShowControllerFunction
  ])

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

  .state("frameworkShow", {
    url: "/ends/:type/frameworks/:title",
    templateUrl: "/assets/js/ng-views/frameworks/show.html",
    controller: "FrameworkShowController",
    controllerAs: "vm"
  })
}
// link to API
function EndFactoryFunction($resource){
  return $resource("/api/ends/:type")
}

function FrameworkFactoryFunction($resource) {
  return $resource ("/api/ends/:type/frameworks/:title")
}

function CommentFactoryFunction($resource) {
  return $resource ("/api/ends/:type/frameworks/:title/comments", {}, {
    update: {method: "PUT"}
  })
}

// Controller Functions

function EndIndexControllerFunction($state, endFactory){
  this.ends = endFactory.query();
}

function EndShowControllerFunction($state, $stateParams, endFactory){
  this.end = endFactory.get({type: $stateParams.type})
}

function FrameworkIndexControllerFunction($resource) {
  return $resource ("/api/ends/:type/frameworks/:title")
}

function FrameworkShowControllerFunction($state, $stateParams, frameworkFactory, commentFactory){
  this.framework = frameworkFactory.get({type: $stateParams.type, title: $stateParams.title})
  this.newComment = new commentFactory()
  this.create = function () {
    this.newComment.$save().then(function(framework){
      console.log(this.newComment)
      $state.go("frameworkShow", {type: $stateParams.type})
    })
  }
}
