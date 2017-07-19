
(function () {
  angular.module('reddit')
    .component('posts', {
      controller: postsController,
      templateUrl: '/js/posts/posts.template.html'
    });

  postsController.$inject = ['postService'];

  function postsController(postService) {
    const vm = this;

    vm.$onInit = function OnInit() {
      vm.propertyToOrderBy = '-vote_count';
      postService.getPosts();
      vm.posts = postService.posts;
    };

    vm.addPost = function addPost(newPost) {
      postService.addPost(newPost);
      vm.showPostForm = false;
      delete vm.post;
    };
  }
}());
