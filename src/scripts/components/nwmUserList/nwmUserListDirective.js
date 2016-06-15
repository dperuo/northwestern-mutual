var nwmUserListService = require('./nwmUserListService.js');
var nwmUserListTemplate = require('html!./nwmUserListTemplate.html');

angular
  .module('nwmUserList')
  .directive('nwmUserList', nwmUserListFn);

nwmUserListFn.$inject = ['nwmUserListService'];

function nwmUserListFn(nwmUserListService) {
  return {
    restrict: 'E',
    scope: {
      listTitle: '@',
      listData: '='
    },
    template: nwmUserListTemplate,
    link: function (scope, elem, attr) {
      var vm = scope;

      console.log(nwmUserListService)
    }
  }
}
