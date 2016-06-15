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
          var withFullName = success.data.results.map(function(value, index, array) {
            var first = value.name.first.charAt(0).toUpperCase() + value.name.first.slice(1);
            var last = value.name.last.charAt(0).toUpperCase() + value.name.last.slice(1);
            value.fullName = [last, first].join(', ');
            return value;
          })

          vm.results = angular.copy(withFullName);
        })
    }
  }
}
