/**
 * Created by rachelkoldenhoven on 4/6/16.
 */
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      controller: "MovieController"
    }).when('/show', {
    templateUrl: "templates/show.html",
    controller: "MovieController"
  }).when('/results', {
    templateUrl: "templates/results.html",
    controller: "MovieController"
  }).otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});