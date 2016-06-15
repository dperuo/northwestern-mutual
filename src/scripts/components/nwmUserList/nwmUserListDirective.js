var nwmUserListEndpoints = require('json!./nwmUserListEndpoints.json');
var nwmUserListService = require('./nwmUserListService.js');
var nwmUserListTemplate = require('html!./nwmUserListTemplate.html');

angular
  .module('nwmUserList')
  .directive('nwmUserList', nwmUserListFn);

nwmUserListFn.$inject = ['$filter', 'nwmUserListService'];

function nwmUserListFn($filter, nwmUserListService) {
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
      vm.isReversed = false;

      getList();

      vm.sortList = function sortListFn(isReversed) {
        vm.isReversed = (angular.isUndefined(isReversed)) ? false : true;
        setResults();
      }

      function getList() {
        nwmUserListService
          .getList(nwmUserListEndpoints[vm.listData])
          .then(function(success) {
            var withFullName = success.data.results.map(function(value, index, array) {
              var first = value.name.first.charAt(0).toUpperCase() + value.name.first.slice(1);
              var last = value.name.last.charAt(0).toUpperCase() + value.name.last.slice(1);
              value.fullName = [last, first].join(', ');
              return value;
            })

            setResults(withFullName)
          })
      }

      function setResults(array) {
        var collection = (angular.isDefined(array)) ? angular.copy(array) : angular.copy(vm.results);
        vm.results = $filter('orderBy')(collection, 'fullName', vm.isReversed)
      }
    }
  }
}
