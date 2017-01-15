/**
 * Created by Admin on 8/1/2017.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/home',
                views:{
                    'content@':{
                        templateUrl: 'scripts/home/home.html'
                    }
                }
            })
    });