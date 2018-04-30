angular.
  module('twelveColCard').
  component('twelveColCard', {
    templateUrl:"12-Col-Card/12-Col-Card.component.html",
    controller: ['$http', function MovieCardController($http) {
            var self = this;

            $http.get('data/movies.json').then(function (response) {
                self.movies = response.data;
            });
    }
 ]
  });