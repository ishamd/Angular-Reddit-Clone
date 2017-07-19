
(function () {
  angular.module('reddit')
    .component('edit', {
      controller: editController,
      templateUrl: '/js/edit/edit.template.html'
    });

  editController.$inject = ['$stateParams', 'postService', '$state'];

  function editController($stateParams, postService, $state) {
    const vm = this;

    vm.$onInit = function onInit() {
      const post_id = $stateParams.id;
      postService.getPostById(post_id);
      vm.stringified = postService.stringified;
    };

    vm.editPost = function editPost(post) {
      postService.editPost(post);
      $state.go('posts');
    };
  }
}());
