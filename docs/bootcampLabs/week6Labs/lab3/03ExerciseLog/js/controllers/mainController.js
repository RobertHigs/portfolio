exerciseApp.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      name: 'Pushups',
      count: 20
    },
    {
      name: 'Squats',
      count: 15
    },
    {
      name: 'Pullups',
      count: 10
    },
    {
      name: 'Rows',
      count: 10
    },
    {
      name: 'Lunges',
      count: 10
    },
    {
      name: 'Step Ups',
      count: 10
    },
    {
      name: 'Sit Ups',
      count: 15
    }
  ];

// Set $scope.increase equal to a function that takes the index of the exercise that was clicked and adds one to that exercise’s count property
$scope.increase = function(index) {
  $scope.exercises[index].count += 1;
};

// Set $scope.decrease equal to a function that takes the index of the exercise that was clicked and adds one to that exercise’s count property
$scope.decrease = function(index) {
  $scope.exercises[index].count -= 1;
};
  

}]);