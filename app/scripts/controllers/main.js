'use strict';

/**
 * @ngdoc function
 * @name metubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the metubeApp
 */
angular.module('metubeApp')
  .controller('MainCtrl', function ($scope) {

    $scope.showtunes = [
      {
        title: 'Satisfied',
        musical: 'Hamilton',
        url: 'https://www.youtube.com/watch?v=f0EqxnWxlvY'
      },
      {
        title: 'Not Getting Married Today',
        musical: 'Company',
        url: 'https://www.youtube.com/watch?v=3yW66pScmEs'
      },
      {
        title: 'Finishing the Hat',
        musical: 'Sunday in the Park with George',
        url: 'https://www.youtube.com/watch?v=Sko2kjyrToc'
      },
      {
        title: 'Being Alive',
        musical: 'Company',
        url: 'https://youtu.be/vC-6TYlMnlo?t=1m25s'
      },
      {
        title: 'Jet Song',
        musical: 'West Side Story',
        url: 'https://www.youtube.com/watch?v=tlzdyUa-wx0'
      },
      {
        title: 'Wait for It',
        musical: 'Hamilton',
        url: 'https://www.youtube.com/watch?v=ReTP6x_sDiM'
      }
    ];
  });
