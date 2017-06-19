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
  // .factory("commentFactory", [
  //   "$resource",
  //   CommentFactoryFunction
  // ])
  .factory('commentFactory', function($resource){
    return $resource("/api/ends/:type/frameworks/:title/comments/:username", {
      username: '@username'
    })
  })
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
  .directive('donutChart', function(){
    function link(scope, el){
      var data = scope.data
      var color = d3.scale.category10()
      var el = el[0]
      var width = el.clientWidth
      var height = el.clientHeight
      var min = Math.min(width, height)
      var pie = d3.layout.pie()
        .value(function(d) {return d.number;})(data);
      var arc = d3.svg.arc()
        .outerRadius(min/2 * 0.9)
        .innerRadius(min/2 * 0.5)
      var labelArc = d3.arc()
        .outerRadius(min/2 * .1)
        .innerRadius(min/2 * .5)
      var svg = d3.select(el).append('svg')
        .attr({width: width, height: height})
        .append('g')
          .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')')
        svg.selectAll('path').data(pie(data.number))
          .enter().append('path')
            .style('stroke', 'white')
            .attr('d', arc)
            .attr('fill', function(d, i){return color(i)})
            .append("text")
              .attr("transform", function(d) {return "translate(" + labelArc.centroid(d)+ ")"; })
              .text(function(d) {return d.data.name;})
              .style("fill", "#fff");
    }
    return {
      link: link,
      restrict: 'E',
      scope: {data: '='}
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
  return $resource ("/api/ends/:type/frameworks/:title/comments/", {}, {
    update: {method: "PUT"},
    query: {method: 'GET', isArray:true, params:{username: 'username'}, transformRequest: function (data) {
         // modify data then
         return angular.toJson(data);
    } },
    delete: {method: 'DELETE', params:{username: 'username'}}
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
    newComment.link = this.newComment.link
    newComment.username = this.newComment.username
    console.log(newComment)
    newComment.$save({type: $stateParams.type, title: $stateParams.title}).then(function(framework){
      $state.reload()
      })
  }
  // Delete Comment
  this.destroy=function(idx){
    console.log(this.framework)
    console.log("click registering")
    var comment_to_delete = this.framework.comments[idx]
    console.log(comment_to_delete)
    // this.framework.comments.splice(idx, 1), (function(framework){
    //   this.framework.$update({type: $stateParams.type, title: $stateParams.title}).then(function(){
    //     $state.reload()
    //   })
    // })

    // var comment_to_delete_id = comment_to_delete
    var idx = idx
    var username = comment_to_delete.username
    console.log(username)
    let comments = commentFactory.query({type: $stateParams.type, title: $stateParams.title})
    let comment = comments.$promise.then(function(data){
      data.toJSON()
    })
    console.log(comment)
    let comment = comments.$promise.then(function(data){
      return data
    })
    console.log(comment)

    comments.$delete({type: $stateParams.type, title: $stateParams.title}, function(){
      this.framework.comments.splice(idx, 1).then(function(framework){
        $state.reload()
      })
    })
  //   scope.user = User.get( {username: 'bob'}  );    // GET
  //  scope.user.$promise.then(function(data) {
  //      console.log(data);
  //  });

    comments.forEach(function(comment, index) {
      console.log("inside For Each")
      if (comment.username === username) {
        comment.$delete({type: $stateParams.type, title: $stateParams.title}, function(){
          this.framework.comments.splice(index, 1).then(function(framework){
            $state.reload()
          })
        })
      }
    })
  }

  }
}
    // let comment_to_delete = commentFactory.query()
    // var id = comment_to_delete.id
    // comment_to_delete = this.comment_to_delete
    // this.framework.comments[idx].$delete({type: $stateParams.type, title: $stateParams.title, index: index}, function (){
    //   this.framework.comments.splice(idx, 1).then(function(framework){
    //     $state.reload()
    //   })
    // })
    //   console.log("delete click registering!")
    // this.framework.comments.splice(idx, 1)

    // console.log(idx)
    // var comment_to_delete = this.framework.comments[idx]
    // var comment_link = comment_to_delete.link
    //   console.log(comment_link)
    // let deletedComment = commentFactory.query({type: $stateParams.type, title: $stateParams.title})
    //   console.log(deletedComment)
    // comment_to_delete.link = this.comment_to_delete.link
    // comment_to_delete.username = this.comment_to_delete.link
    // deletedComment.username = this.deletedComment.username
    // comment_to_delete.$delete({type: $stateParams.type, title: $stateParams.title, index: index}).then(function(framework){
    //   $state.reload()
    //     })
    //   }
  //   }
  // }
//     $scope.deletePost = function(post_id) {
//   $scope.posts.forEach(function(post, index) {
//     if (post_id === post.id) {
//       post.$delete({user:"tjb1982",action:"delete",post_id:post.id}, function() {
//         $scope.posts.splice(index, 1);
//       });
//     }
//   });
// }
