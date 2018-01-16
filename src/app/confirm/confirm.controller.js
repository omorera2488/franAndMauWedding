(function() {
  'use strict';

  angular
    .module('web')
    .controller('ConfirmController', ConfirmController);

  /** @ngInject */
  function ConfirmController($timeout, guestFactory) {

    var vm = this;
    vm.showSuccess = false;
    vm.confirm = confirm;
    vm.guests = null;

    guestFactory.fetchGuests().success(function(response){
        vm.guests=response;
    });

    function confirm(){
      //vm.guests.push(vm.guest);
      guestFactory.saveGuest(vm.guests).success(function(response){
        vm.showSuccess = true;
      });
    }

  }
})();
