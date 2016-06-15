angular
  .module('nwmUserList')
  .factory('nwmUserListService', nwmUserListServiceFn)

nwmUserListServiceFn.$inject = ['$q', '$http'];

function nwmUserListServiceFn($q, $http) {
  return {
    getList: function(endpoint) {
      return $q(function(resolve, reject) {
        $http
          .jsonp(endpoint)
          .then(function(success) {
            resolve(success);
          },
          function(error) {
            reject(error)
          })
      })
    }
  }
}
