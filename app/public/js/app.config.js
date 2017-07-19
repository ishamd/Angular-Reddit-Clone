
(function () {
  angular.module('reddit').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'posts',
        url: '/',
        component: 'posts'
      })
      .state({
        name: 'comments',
        url: '/comments/:id',
        component: 'comments'
      })
      .state({
        name: 'edit',
        url: '/posts/:id/edit',
        component: 'edit'
      });
  }
}());
