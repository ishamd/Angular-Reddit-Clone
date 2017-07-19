
(function () {
  angular.module('reddit')
    .component('comments', {
      bindings: {
        post: '<'
      },
      controller: commentsController,
      templateUrl: '/js/comments/comments.template.html'
    });

  commentsController.$inject = ['commentService'];

  function commentsController(commentService) {
    const vm = this;

    vm.addComment = function (post) {
      commentService.addComment(post);
    };
  }
}());
