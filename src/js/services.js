/**
 * Created by rachelkoldenhoven on 4/6/16.
 */
app.service('MovieSearchService', ['$http', function ($http) {
  return {
    movieSearchResults: function (title) {
      return $http.get('http://www.omdbapi.com/?s=' + title);
    },
    getMovieDetails: function() {
      return $http.get('http://www.omdbapi.com/?');
    }
  }
}]);