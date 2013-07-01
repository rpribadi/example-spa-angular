'use strict';

/* Controllers */

angular.module('CategoryModule.controllers', ['CategoryModule.services']).
  controller('CategoryIndexController', ['$scope', '$$category', function($scope, $$category) {
    $scope.categories = $$category.all();

    $scope.del = function(id) {
        $$category.del(id);
        $scope.flash = "Category Deleted.";
    };

  }])
  .controller('CategorySaveController', ['$scope', '$routeParams', '$$category', function($scope, $routeParams, $$category) {
    var id = $routeParams.id || null;
    if (id !== null) {
        var category = $$category.get(id);
        $scope.inputCategoryName = category.name;
    }
    
    $scope.save = function() {
        $$category.save(id, {'name': $scope.inputCategoryName});
        $scope.inputCategoryName = '';
        $scope.flash = "Category saved.";
    };

  }]);


