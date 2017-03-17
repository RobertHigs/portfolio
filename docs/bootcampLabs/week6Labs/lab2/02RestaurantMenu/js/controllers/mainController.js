//JavaScript file

menuApp.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread, garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Pepperoni Pizza',
      description: 'Pepperoni, marinara sauce, mozzerella, fresh oregano',
      price: 6.95
    },
    {
      name: 'Meat Lasagna',
      description: 'Layered lasagna pasta with ground beef, marinara sauce and cheese',
      price: 10.95
    },
    {
      name: 'Five Cheese Ravioli',
      description: 'Ravioli pasta stuffed with mushroom, spinach and five cheeses',
      price: 7.95
    }
    ];
    
    $scope.sides = [
      {
        name: 'Breadsticks',
        description: 'Served with marinara sauce',
        price: 4.95
      },
      {
        name: 'Soup of the Day',
        description: 'Take a chance',
        price: 4.95
      },
      {
        name: 'salad',
        description: 'Field greens, balsamic vinigrette, asiago',
        price: 4.95
      }
      ];

}]);