var app = angular.module('redditClone', []);
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