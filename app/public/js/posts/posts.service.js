
(function () {
  angular
    .module('reddit')
    .service('postService', ['$http', function service($http) {
      const vm = this;

      // local array to be used for viewing/rendering posts
      vm.posts = [];
      vm.stringified = {};

      vm.getPosts = function () {
        vm.posts = [];
        $http.get('/api/posts').then((response) => {
          // looping through results due to rendering/display lag
          response.data.forEach((element) => {
            vm.posts.push(element);
          });
        });
      };

      vm.getPostById = function (id) {
        vm.posts.forEach((e) => {
          if (e.id === Number.parseInt(id)) {
            vm.stringified = e;
          }
        });
      };

      vm.addPost = function (newPost) {
        $http.post('/api/posts', newPost).then((response) => {
          response.data.comments = [];
          vm.posts.push(response.data);
        });
      };

      vm.editPost = function (post) {
        $http.patch(`/api/posts/${post.id}`, post).then(() => {
          vm.posts.forEach((e) => {
            if (e.id === post.id) {
              const index = vm.posts.indexOf(e);
              vm.posts[index] = post;
            }
          });
        });
      };

      vm.deletePost = function (post) {
        $http.delete(`/api/posts/${post.id}`).then(() => {
          vm.posts.forEach((e) => {
            if (e.id === post.id) {
              const index = vm.posts.indexOf(e);
              delete vm.posts[index];
            }
          });
        });
      };

      vm.increaseVote = function (post) {
        // increase vote count by 1 when clicked
        $http.post(`/api/posts/${post.id}/votes`, post).then(() => {
          vm.posts.forEach((e) => {
            if (e.id === post.id) {
              const index = vm.posts.indexOf(e);
              vm.posts[index].vote_count += 1;
            }
          });
        });
      };

      vm.decreaseVote = function (post) {
        // decrease vote count by 1 when clicked, vote count can't be negative
        if (post.vote_count >= 1) {
          $http.delete(`/api/posts/${post.id}/votes`, post).then(() => {
            vm.posts.forEach((e) => {
              if (e.id === post.id) {
                const index = vm.posts.indexOf(e);
                if (vm.posts[index].vote_count >= 1) {
                  vm.posts[index].vote_count -= 1;
                }
              }
            });
          });
        }
      };
    }]);
}());
