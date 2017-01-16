var app = angular.module('redditClone', []);
app.controller('MainCtrl', function($scope) {
    // $scope bridges variable "posts" to index template
    $scope.test = "Hello World!";
    // defines a list of post titles
    $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 3},
        {title: 'post 3', upvotes: 10}
    ];
    $scope.addPost = function() {
        // prevents empty posts
        if(!$scope.title || $scope.title === '') {
            return;
        }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };
});