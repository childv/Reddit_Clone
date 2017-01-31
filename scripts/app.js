var app = angular.module('redditClone', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // HOME PAGE
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    // POSTS PAGE
    .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
});

app.factory('posts', [function(){
    var o = {
        posts: []
    };
    return o;
    }]);

app.controller('MainCtrl',
    function($scope, posts) {
    // $scope bridges variable "posts" to index template
    // defines a list of post titles
    $scope.posts = posts.posts;
    $scope.addPost = function() {
        // prevents empty posts
        if(!$scope.title || $scope.title === '') {
            return;
        }

        // fake comment data
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 5}
            ]
        });

        $scope.title = '';
        $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };
});

app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts){
        $scope.post = posts.posts[$stateParams.id];
        $scope.addComment = function() {
            if($scope.body === '') {return;}
            
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            });

            $scope.body = '';
        };
        $scope.incrementUpvotes = function(comment) {
            comment.upvotes += 1;
        }
}]);