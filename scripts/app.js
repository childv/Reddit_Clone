var app = angular.module('redditClone', []);
app.controller('MainCtrl', function($scope) {
    // $scope bridges variable "posts" to index template
    // defines a list of post titles
    $scope.firstName = "John";
    $scope.test = "Hello World!";
    $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 3},
        {title: 'post 3', upvotes: 10}
    ];
});

/*function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}

/*var button = document.getElementById("button");

function change(){
    document.body.style.background = "yellow";
}

button.addEventListener("click", change);

var app = angular.module('redditClone', []);

// controller function
app.controller('MainCtrl', function($scope){
        // $scope bridges variable "posts" to index template
        // defines a list of post titles
        $scope.test = 'Hello world!';
        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},           
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes 0}
        ];
});*/