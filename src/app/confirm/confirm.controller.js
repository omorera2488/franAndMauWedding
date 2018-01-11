(function() {
  'use strict';

  angular
    .module('web')
    .controller('ConfirmController', ConfirmController);

  /** @ngInject */
  function ConfirmController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.classAnimation = '';
    vm.showToastr = showToastr;

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

  }
})();
