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
    "endFactory",
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
  return $resource ("/api/ends/:type/frameworks/:title", {}, {
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

function FrameworkShowControllerFunction($state, $stateParams, endFactory, frameworkFactory, commentFactory){
  this.end = endFactory.get({type: $stateParams.type})
  this.framework = frameworkFactory.get({type: $stateParams.type, title: $stateParams.title})
  this.create = function(){
    console.log("click submitting")
    let newComment = new commentFactory()
    // this.newComment.create = function(){
    newComment.link = this.newComment.link
    newComment.username = this.newComment.username
    console.log(newComment)
    newComment.$save({type: $stateParams.type, framework: $stateParams.title}).then(function(){
      $state.reload
      })
    // }
  }
}
