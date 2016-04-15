'use strict';

/**
 * @ngdoc function
 * @name metubeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the metubeApp
 */
angular.module('metubeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
