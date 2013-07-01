'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ToDoModule.services']).
  controller('DashboardController', ['$scope', '$$todo', function($scope, $$todo) {
    var todos = $$todo.all();

    var grouped_todo = {};
    for(var id in todos) {
        if(typeof(grouped_todo[todos[id].category]) === 'undefined') {
            grouped_todo[todos[id].category] = [];
        }
        grouped_todo[todos[id].category].push(todos[id]);
    }
    
    $scope.grouped_todo = grouped_todo;
  }]);
