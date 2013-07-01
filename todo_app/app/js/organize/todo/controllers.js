'use strict';

/* Controllers */

angular.module('ToDoModule.controllers', ['ToDoModule.services', 'CategoryModule.services']).
  controller('ToDoIndexController', ['$scope', '$$todo', function($scope, $$todo) {
    $scope.todos = $$todo.all();

    $scope.del = function(id) {
        $$todo.del(id);
        $scope.flash = "ToDo Deleted.";
    };

  }])
  .controller('ToDoSaveController', ['$scope', '$routeParams', '$$todo', '$$category', function($scope, $routeParams, $$todo, $$category) {
    var id = $routeParams.id || null;

    $scope.inputToDoStatus = false;
    
    $scope.categories = $$category.all();
    
    if (id !== null) {
        var todo = $$todo.get(id);
        $scope.inputToDoName = todo.name;
        $scope.inputToDoCategory = todo.category;
        $scope.status = todo.status;
    }
    
    $scope.save = function() {
        $$todo.save(id, {'name': $scope.inputToDoName,
                         'category': $scope.inputToDoCategory,
                         'status': $scope.inputToDoStatus,
                        });

        $scope.inputToDoName = '';
        $scope.inputToDoCategory = '';
        $scope.inputToDoStatus = false;

        $scope.flash = "ToDo saved.";
    };

  }]);


