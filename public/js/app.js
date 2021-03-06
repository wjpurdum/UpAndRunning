angular
  .module("upAndRunning", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
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
    // "$scope",
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
  // Get this working for gold:
  // .directive('donutChart', function(){
  //   function link(scope, el){
  //     var data = scope.data
  //     var color = d3.scale.category10()
  //     var el = el[0]
  //     var width = el.clientWidth
  //     var height = el.clientHeight
  //     var min = Math.min(width, height)
  //     var pie = d3.layout.pie()
  //       .value(function(d) {return d.number;})(data);
  //     var arc = d3.svg.arc()
  //       .outerRadius(min/2 * 0.9)
  //       .innerRadius(min/2 * 0.5)
  //     var labelArc = d3.arc()
  //       .outerRadius(min/2 * .1)
  //       .innerRadius(min/2 * .5)
  //     var svg = d3.select(el).append('svg')
  //       .attr({width: width, height: height})
  //       .append('g')
  //         .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')')
  //       svg.selectAll('path').data(pie(data.number))
  //         .enter().append('path')
  //           .style('stroke', 'white')
  //           .attr('d', arc)
  //           .attr('fill', function(d, i){return color(i)})
  //           .append("text")
  //             .attr("transform", function(d) {return "translate(" + labelArc.centroid(d)+ ")"; })
  //             .text(function(d) {return d.data.name;})
  //             .style("fill", "#fff");
  //   }
  //   return {
  //     link: link,
  //     restrict: 'E',
  //     scope: {data: '='}
  //   }
  // })


// In Angular, the $location service parses the URL in the address bar and makes changes to your application and vice versa.
  function RouterFunction($stateProvider, $locationProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true)
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
  $urlRouterProvider.otherwise("/ends")
}
// link to API - because these are all nested, we could just use one factory
function EndFactoryFunction($resource){
  return $resource("/api/ends/:type")
}

function FrameworkFactoryFunction($resource) {
  return $resource ("/api/ends/:type/frameworks/:title")
}

function CommentFactoryFunction($resource) {
  return $resource ("/api/ends/:type/frameworks/:title/comments/:link", {}, {
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
  // Create Comment
  this.create = function(){
    let newComment = new commentFactory()
    newComment.link = this.newComment.link
    newComment.username = this.newComment.username
    console.log(newComment)
    newComment.$save({type: $stateParams.type, title: $stateParams.title}).then(function(framework){
      $state.reload()
      })
  }
  // Delete Comment
  this.destroy = function(idx){
    console.log(commentFactory)
    var comment_to_delete = this.framework.comments[idx]

    commentFactory.delete({type: $stateParams.type, title: $stateParams.title, link: comment_to_delete.link}, function(res){
      console.log(res)
      $state.reload()
    })
  }
}
