/**
 * Created by rachelkoldenhoven on 4/6/16.
 */
app.controller('MovieController', ['$scope', "MovieSearchService", function($scope, MovieSearchService) {
  $scope.view = {};
  $scope.greeting = "Hello World!";
  $scope.message = "Views are working!";


  $scope.movieSearch = function(title) {
    console.log(title);
    MovieSearchService.movieSearchResults(title).then(function(data) {
      $scope.view.searchResults = data.data.Search;
      console.log($scope.view.searchResults);
    })
  }

}]);



//app.controller('PokemonController', ["$scope", "PokemonService", function($scope, PokemonService) {
//  $scope.view = {};
//  $scope.view.display = "";
//  $scope.newPokemon = {};
//  $scope.newMove = {};
//
//  $scope.getNewPokemon = function() {
//    $scope.loading = true;
//    PokemonService.generatePokemon().then(function(data){
//      $scope.newPokemon = data.data;
//      $scope.loading = false;
//      console.log($scope.newPokemon);
//    });
//  };
//
//  $scope.getNewMove = function() {
//    PokemonService.generateMove().then(function(data){
//      $scope.newMove = data.data;
//      console.log($scope.newMove.name);
//    });
//  };
//
//
//}]);