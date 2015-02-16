var app = angular.module('userAPP', []);

app.controller('ListCtrl', function($scope) {

  var customer_array = [];

  ASA.init('CustomerDataReadWrite', '0000000x0');
  ASA.request('GET:;@CustomerDataReadWrite', function (data, error) {
    if (error) {
      console.error('Opps! We have a glitch with ASA server connection' + error);
    }
    if (data.response_code === 1) { // success
      customer_array = JSON.parse(data.response);
    } else {
      console.error('ASA Error[' + data.response_code + ']:' + data.response);
    }
  });

  $scope.customers = customer_array;
  
});


