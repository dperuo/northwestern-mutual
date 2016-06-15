require('./components/nwmUserList');

angular
  .module('nwmApp', [
    'nwmUserList'
  ])
  .controller('nwmCtrl', nwmCtrlFn);


function nwmCtrlFn() {

}
