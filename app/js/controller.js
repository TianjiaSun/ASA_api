'use strict';


var apiApp = angular.module('apiApp',[]);

apiApp.controller('ASA_API_Ctrl', function($scope, $http) {

  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id', service_app_name:'ServiceAppInfo', request_string: "Get"})
  };

  $http(req).success(function(data) {
    console.log('done');
    console.log(data.response);
    $scope.apps = angular.fromJson(data.response);
  });

  $scope.showInfo = function(app, index) {
      $scope.app=app;
      $scope.selected = index;
      $scope.message = $scope.app.example_1; // assign the default message is the example
  }
  $scope.orderProp = 'customer_id';

  $scope.clearInfo = function(app) {
      $scope.app=$scope.initial;
  }

  $scope.ASAsend = function(app, message) {
    var req = {
      method: 'POST',
      url: 'http://asa.gausian.com',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: $.param({
        user_app_id:'app_id',
        service_app_name: $scope.app.app_name,
        request_string: $scope.message
      })
    };
    $http(req).success(function(data) {
      console.log('Sent to ASA.');
      console.log('ASA response_code is:');
      console.log(data.response_code);
      console.log('ASA response is:');
      console.log(data.response);
      $scope.asa_response = angular.fromJson(data.response);
    });
  };

});
