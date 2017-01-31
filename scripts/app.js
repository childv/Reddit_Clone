/*Angular code for Reddit Clone frontend */

// ui.router is an app dependency 
var app = angular.module('redditClone', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                // set up home route '/home' controlled by MainCtrl
                $stateProvider.state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                });
                //redirect undefined urls!!
                $urlRouterProvider.otherwise('home');
}]);

// state where indiviual post can be accessed
app.state('posts', {
    url: '/posts/{id}', //{id} is a route parameter for controller
    templateUrl: './posts.html',
    controller: 'PostsCtrl'
});

/* Factory:
Most popular way to create and configure a service

An object to which properties can be added. Object then returned to a controller, which can access its properties.

Store data in services, objects that are wired together using DI. They organize and share code across your app
*/

// object that returns an array of posts
app.factory('posts', [function() { 
    var o = {
        posts: []
    };
    return o;
}])

/* Controller 
Should be thin; business logic and persistent data should be stored in a service

Instantiated only when needed; discarded when not. Switch route/reload page = Angular cleans controller

Do NOT store data in: cannot be easily accessed, difficult to mock, and will be lost when controller goes out of scope
*/

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {
        // $scope bridges variable "posts" to index template
        // access "posts" factory services
        $scope.posts = posts.posts;
        $scope.addPost = function() {
            // prevents empty posts
            if(!$scope.title || $scope.title === '') {
                return;
            }
            $scope.posts.push({title: 'A new post!', upvotes: 0, comments: []});
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
                comments: [
                    {author: 'Joe', body: 'Nice one!', upvotes: 0},
                    {author: 'Jane', body: 'Why no votes?', upvotes: 0}
                ]
            });
            $scope.title = '';
            $scope.link = '';
        };
        $scope.incrementUpvotes = function(post){
            post.upvotes += 1;
        };
}]);

// controller for posts
app.controller('PostsCtrl', [
    '$scope', '$stateParams', 'posts',
    function($scope, $stateParams, posts){ 
        // use id route param for specific post's page to get post variable
        $scope.post = post.posts[$stateParams.id]; 
    }
]);

/* Service
When you’re using Service, it’s instantiated with the ‘new’ keyword. Because of that, you’ll add properties to ‘this’ and the service will return ‘this’. When you pass the service into your controller, those properties on ‘this’ will now be available on that controller through your service.
*/

/* Providers
the only service you can pass into your .config() function. Use a provider when you want to provide module-wide configuration for your service object before making it available.
*/