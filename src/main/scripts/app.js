/**
 * Created by Admin on 8/1/2017.
 */
angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) { // khai bao router,...
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('site', {
               views: {
                   'navbar@':{
                       templateUrl: 'scripts/component/navbar/navbar.html'
                   },
                   'footer@':{
                       templateUrl: 'scripts/component/footer/footer.html'
                   }
               }
            })
    })
    .run(function () { //khai bao bien toan cuc, bla..bla

    });
