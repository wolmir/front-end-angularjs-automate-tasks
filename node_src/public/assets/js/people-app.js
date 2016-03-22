'use strict';

var people_app = angular.module('people-app', ['ngRoute', 'ngResource']);


people_app.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when('/peopleList', {
        templateUrl: 'people_list.html',
        controller: 'peopleListCtrl'
    })

    .otherwise({
        redirectTo: '/peopleList'
    });
}]);


people_app.service('PeopleService', ['$resource', function($resource) {
    var peopleResource = $resource('http://localhost:8090/rest/people/:personId');

    return {
        fetchAll: function(callback) {
            var data = peopleResource.query(function() {
                callback(data);
            });
        }
    };
}]);


people_app.controller('peopleListCtrl', ['$scope', 'PeopleService',
    function($scope, PeopleService) {
        $scope.people = [];

        PeopleService.fetchAll(function(data) {

            _(data).each(function(person) {
                $scope.people.push(person);
            });

        });
    }
]);
