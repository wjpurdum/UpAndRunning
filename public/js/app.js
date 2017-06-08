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
  .directive('donutChart', function(){
    function link(scope, el){
      var data = [23, 75, 40, 10, 3]
      var color = d3.scale.category10()
      var el = el[0]
      var width = el.clientWidth
      var height = el.clientHeight
      var min = Math.min(width, height)
      var pie = d3.layout.pie().sort(null)
      var arc = d3.svg.arc()
        .outerRadius(min/2 * 0.9)
        .innerRadius(min/2 * 0.5)
      var svg = d3.select(el).append('svg')
        .attr({width: width, height: height})
        .append('g')
          .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')')
        svg.selectAll('path').data(pie(data))
          .enter().append('path')
            .style('stroke', 'white')
            .attr('d', arc)
            .attr('fill', function(d, i){return color(i)})
    }
    return {
      link: link,
      restrict: 'E',
    }
  })

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

function FrameworkShowControllerFunction($state, $stateParams, endFactory, frameworkFactory, commentFactory){
  this.end = endFactory.get({type: $stateParams.type})
  this.framework = frameworkFactory.get({type: $stateParams.type, title: $stateParams.title})
  this.create = function(){
    let newComment = new commentFactory()
    // this.newComment.create = function(){
    newComment.link = this.newComment.link
    newComment.username = this.newComment.username
    console.log(newComment)
    newComment.$save({type: $stateParams.type, title: $stateParams.title}).then(function(){
      $state.reload
      })
    // }
  }
}
