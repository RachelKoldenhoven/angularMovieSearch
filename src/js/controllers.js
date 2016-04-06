/**
 * Created by rachelkoldenhoven on 4/6/16.
 */
app.controller('MovieController', ['$scope', "MovieSearchService", function($scope, MovieSearchService) {
  $scope.view = {};
  $scope.greeting = "Hello World!";
  $scope.message = "Views are working!";
  $scope.view.searchResults = [];


  $scope.movieSearch = function(title) {
    MovieSearchService.movieSearchResults(title).then(function(data) {
      var results = data.data.Search[0];
      $scope.view.searchResults.push(results);
      console.log($scope.view.searchResults);
      return $scope.view.searchResults;

    })
  }

}]);


