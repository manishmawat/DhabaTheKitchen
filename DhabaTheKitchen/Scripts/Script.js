/// <reference path="angular.js" />
/// <reference path="angular-route.js" />
var app = angular.module("myKitchenModule", ["ngRoute"])
                 .config(function ($routeProvider) {
                     $routeProvider
                     .when("/menu", {
                         templateUrl: "Templates/Menu.html",
                         controller: "menuController"
                     })
                     .when("/branches", {
                         templateUrl: "Templates/Branches.html",
                         controller: "branchesController"
                     })
                     .when("/aboutUs", {
                         templateUrl: "Templates/AboutUs.html",
                         controller: "aboutUsController"
                     })
                     .otherwise({
                         redirectTo: "/menu"
                     })
                 })
                .controller("menuController", function ($scope) {
                    var menuItems = [{ item: "Dal Makhni", rate: 400 },
                                     { item: "Shahi Paneer", rate: 420 },
                                     { item: "Kadhai Paneer", rate: 450 }];
                    $scope.menuItems = menuItems;
                    $scope.message = "Menu";
                })
                .controller("branchesController", function ($scope) {
                    var bracnhes = [{ city: "Delhi", address: "123 street, Delhi" },
                                    { city: "Ludhiana", address: "123 street, Ludhiana" },
                                    { city: "Gurgaon", address: "123 street, Gurgaon" }];
                    $scope.branches = bracnhes;
                })
                .controller("aboutUsController", function ($scope) {
                    var aboutMe = "We are the best in the food industry. We have the experience of 15 years of serving your hunger with full respect.";
                    $scope.aboutUs = aboutMe;
                })
                 .config(['$locationProvider', function ($locationProvider) {
                     $locationProvider.hashPrefix('');
                 }]);