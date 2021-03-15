/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "homeCtrl"})
    // Pages
  // expense report
    .when("/exp-buttons", {templateUrl: "partials/exp-buttons.html", controller: "PageCtrl"})
  .when("/exp-badges", {templateUrl: "partials/exp-badges.html", controller: "PageCtrl"})
    .when("/exp-modal", {templateUrl: "partials/exp-modal.html", controller: "PageCtrl"})
    .when("/exp-alerts", {templateUrl: "partials/exp-alerts.html", controller: "PageCtrl"})
  .when("/exp-admin", {templateUrl: "partials/exp-admin.html", controller: "PageCtrl"})
    .when("/exp-progress", {templateUrl: "partials/exp-progress.html", controller: "PageCtrl"})
  .when("/exp-tabs", {templateUrl: "partials/exp-tabs.html", controller: "PageCtrl"})
  .when("/exp-collapse", {templateUrl: "partials/exp-collapse.html", controller: "PageCtrl"})
    .when("/exp-typo", {templateUrl: "partials/exp-typo.html", controller: "PageCtrl"})
  .when("/exp-colors", {templateUrl: "partials/exp-colors.html", controller: "PageCtrl"})
  .when("/exp-logos", {templateUrl: "partials/exp-logos.html", controller: "PageCtrl"})
  // danlaw 
  .when("/dnlw-logos", {templateUrl: "partials/dnlw-logos.html", controller: "PageCtrl"})
  .when("/dnlw-typo", {templateUrl: "partials/dnlw-typo.html", controller: "PageCtrl"})
  .when("/dnlw-colors", {templateUrl: "partials/dnlw-colors.html", controller: "PageCtrl"})
  // partners
   .when("/wordpress", {templateUrl: "partners/wordpress.html", controller: "PageCtrl"})
  .when("/plugins", {templateUrl: "partners/plugins.html", controller: "PageCtrl"})
   .when("/buttons", {templateUrl: "partners/buttons.html", controller: "PageCtrl"})
  .when("/typography", {templateUrl: "partners/typography.html", controller: "PageCtrl"})
  .when("/colors", {templateUrl: "partners/colors.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

tutorialWebApp.controller('homeCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});



angular.module('anchorScrollExample', [])
.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);





