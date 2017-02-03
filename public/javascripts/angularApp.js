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

/* Factory:
Most popular way to create and configure a service

An object to which properties can be added. Object then returned to a controller, which can access its properties.

Store data in services, objects that are wired together using DI. They organize and share code across your app
*/
// object that returns an array of posts
app.factory('posts', [function(){
    var o = {
        posts: []
    };
    return o;
    }]);
/* Controller 
Should be thin; business logic and persistent data should be stored in a service

Instantiated only when needed; discarded when not. Switch route/reload page = Angular cleans controller

Do NOT store data in: cannot be easily accessed, difficult to mock, and will be lost when controller goes out of scope
*/
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
/* Service
When you’re using Service, it’s instantiated with the ‘new’ keyword. Because of that, you’ll add properties to ‘this’ and the service will return ‘this’. When you pass the service into your controller, those properties on ‘this’ will now be available on that controller through your service.
*/

/* Providers
the only service you can pass into your .config() function. Use a provider when you want to provide module-wide configuration for your service object before making it available.
*/