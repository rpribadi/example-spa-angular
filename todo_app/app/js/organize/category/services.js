'use strict';

/* Services */

angular.module('CategoryModule.services', []).factory('$$category', [function() {
    var factory = {};
    var categories = {
        1: {name: 'Must Do'},
        2: {name: 'Must Read'}
    };
    var latest_id = Object.keys(categories).length + 1;

    factory.all = function() {
        return categories;
    };

    factory.get = function(id) {
        if (categories.hasOwnProperty(id)) {
            return categories[id]; 
        }
        
        return {};
    };

    factory.save = function(id, category) {
        alert("" + id);
        if (id === null) {
            id = latest_id;
            latest_id += 1;        
        }
        
        categories[id] = category;

        return id;
    };

    factory.del = function(id) {
        if (categories.hasOwnProperty(id)) {
            delete categories[id];
            return true
        }
        return false
    };

    return factory;
  }]);
