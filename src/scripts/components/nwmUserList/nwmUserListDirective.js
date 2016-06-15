var nwmUserListEndpoints = require('json!./nwmUserListEndpoints.json');
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
      listData: '@'
    },
    template: nwmUserListTemplate,
    link: function (scope, elem, attr) {
      var vm = scope;

      vm.title = vm.listTitle;

      nwmUserListService
        .getList(nwmUserListEndpoints[vm.listData])
        .then(function(success) {
          vm.results = success.data.results;
          console.log(vm.results);
        })
    }
  }
}
