var template = require('html!./userListTemplate.html');

angular
  .module('userList')
  .directive('nwmUserList', nwmUserListFn);

function nwmUserListFn() {
  return {
    restrict: 'E',
    scope: {
      listTitle: '@',
      listData: '='
    },
    template: template,
    link: nwmUserListLinkFn
  }
}

function nwmUserListLinkFn(scope) {
  var vm = scope;
}
