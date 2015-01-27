angular.module('rbtv.shows')
    .controller('ShowsController', ['$scope', 'Restangular', '$state', 'shows', function($scope, restangular, $state, showsService) {
        showsService.list().then(function(shows){
            $scope.shows = shows;
            console.log('shows controller hat die shows!', shows);
        });
        $scope.showDetail = function(show){
            $state.go('rbtv.show', {show: show.url})
        };
    }]);