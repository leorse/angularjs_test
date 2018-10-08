var app = angular.module('debut', ["ngRoute"])
    .controller('CmtController', CmtController);
app.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl:"partials/home.html"})
    .when("comments",{templateUrl:'partials/comments.html'})
    .otherwise({redirectTo:"/"});
});

function CmtController($scope) {

    $scope.comments = [
        {
            "username": "Emma Stuart",
            "content": "Et fugiat et reprehenderit e"
        },
        {
            "username": "Kerri Raymond",
            "content": "Aliquip Lorem in irure "
        },
        {
            "username": "Patton Cox",
            "content": "Fugiat cupidatat officia eu duis magna enim"
        },
        {
            "username": "Orr Mcclure",
            "content": "Commodo irure velit ipsum in. Lorem officia"
        },
        {
            "username": "Kristine Dejesus",
            "content": "Nisi sit dolore non sunt cillum i"
        }
    ];

}