
(function () {
  angular.module('reddit')
    .component('individual', {
      bindings: {
        post: '<'
      },
      controller: individualController,
      templateUrl: '/js/individual/individual.template.html'
    });

  individualController.$inject = ['postService'];

  function individualController(postService) {
    const vm = this;

    vm.deletePost = function deletePost(post) {
      postService.deletePost(post);
    };

    vm.increaseVote = function increaseVote(post) {
      postService.increaseVote(post);
    };

    vm.decreaseVote = function decreaseVote(post) {
      if (post.vote_count >= 1) {
        postService.decreaseVote(post);
      }
    };
  }
}());
