'use strict';

angular.module('myApp', ['myApp.controllers', 'CategoryModule.controllers', 'ToDoModule.controllers']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when(
        '/dashboard',
        {templateUrl: 'partials/dashboard.html',
         controller: 'DashboardController'
        });

    $routeProvider.when(
        '/organize/category/index',
        {templateUrl: 'partials/organize/category/index.html',
         controller: 'CategoryIndexController'
        });

    $routeProvider.when(
        '/organize/category/save',
        {templateUrl: 'partials/organize/category/save.html',
         controller: 'CategorySaveController'
        });

    $routeProvider.when(
        '/organize/category/save/:id',
        {templateUrl: 'partials/organize/category/save.html',
         controller: 'CategorySaveController'
        });


    $routeProvider.when(
        '/organize/todo/index',
        {templateUrl: 'partials/organize/todo/index.html',
         controller: 'ToDoIndexController'
        });

    $routeProvider.when(
        '/organize/todo/save',
        {templateUrl: 'partials/organize/todo/save.html',
         controller: 'ToDoSaveController'
        });

    $routeProvider.when(
        '/organize/todo/save/:id',
        {templateUrl: 'partials/organize/todo/save.html',
         controller: 'ToDoSaveController'
        });


    $routeProvider.otherwise({redirectTo: '/dashboard'});

    
  }]);
