(function () {
  angular
    .module('reddit')
    .service('commentService', ['$http', function service($http) {
      const vm = this;

      vm.addComment = function (post) {
        // post the new comment to the database
        $http.post(`/api/posts/${post.id}/comments`, post).then(() => {
          // retrieve all comments for the specified post (id)
          $http.get(`/api/posts/${post.id}/comments`).then((response) => {
            // update the view to show each of the individual comments
            post.comments = response.data;
            // clear the comment form
            delete post.content;
          });
        });
      };
    }]);
}());
