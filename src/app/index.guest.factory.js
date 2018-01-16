(function() {
  'use strict';

  angular
    .module('web')
    .factory('guestFactory', GuestFactory);

  /** @ngInject */
  function GuestFactory($http) {

    var obj = {}; 

    obj.fetchGuests = function(){
      return $http.get('../assets/db/guest.json');
    }
    
    obj.saveGuest = function(guests) {
      return $http.post('../assets/db/guest.json', guests);
    }

    obj.sendEmail = function(guest) {
      return $http.post('../assets/db/guest.json', guests);
    }

    return obj;
  }
})();