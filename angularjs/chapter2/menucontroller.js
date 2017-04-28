var app = angular.module('myapp',[]);

var menus = [
	{'name':'menu item1','id':'1'},
	{'name':'menu item2','id':'2'},
	{'name':'menu item3','id':'3'},
	{'name':'menu item4','id':'4'},
	{'name':'menu item5','id':'5'}
];
app.controller('MenuController',function($scope){
	$scope.menus = menus;
	$scope.showMenu = false;
	$scope.toggleMenu = function(){
		$scope.showMenu = !$scope.showMenu;
	}
});