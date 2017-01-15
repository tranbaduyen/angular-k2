/**
 * Created by Admin on 8/1/2017.
 */

angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('product', {
                parent: 'site',
                url: '/product',
                views: {
                    'content@':{
                        templateUrl: 'scripts/product/product.html'
                    }
                }
            })
    });