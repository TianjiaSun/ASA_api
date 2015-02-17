'use strict';


var apiApp = angular.module('apiApp',[]);

apiApp.controller('ASA_API_Ctrl', function($scope, $http) {

  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id', service_app_name:'ServiceAppDataRead', request_string: "GET:;"})
  };

  $http(req).success(function(data) {
    console.log('done');
    console.log(data.response);
    $scope.apps = angular.fromJson(data.response);
  });

  $scope.showInfo = function(app, index) {
      $scope.app=app;
      $scope.selected = index;
  }
  $scope.orderProp = 'customer_id';

  $scope.clearInfo = function(app) {
      $scope.app=$scope.initial;
  }

});
