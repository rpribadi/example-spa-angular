'use strict';

/* Services */

angular.module('ToDoModule.services', []).factory('$$todo', [function() {
    var factory = {};
    var todos = {
        1: {name: 'Pay Rent',
            category: 'Must Do',
            status: false
           },
        2: {name: 'Go to talk.js',
            category: 'Must Do',
            status: false
           },
        3: {name: 'AngularJS Tutorial http://docs.angularjs.org/tutorial',
            category: 'Must Read',
            status: false
           },
    };
    var latest_id = Object.keys(todos).length + 1;

    factory.all = function() {
        return todos;
    };

    factory.get = function(id) {
        if (todos.hasOwnProperty(id)) {
            return todos[id]; 
        }
        
        return {};
    };

    factory.save = function(id, todo) {
        if (id === null) {
            id = latest_id;
            latest_id += 1;        
        }
        
        todos[id] = todo;

        return id;
    };

    factory.del = function(id) {
        if (todos.hasOwnProperty(id)) {
            delete todos[id];
            return true
        }
        return false
    };

    return factory;
  }]);
