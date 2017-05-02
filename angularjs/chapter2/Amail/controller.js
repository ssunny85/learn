var aMailService = angular.module('AMail',[]);

function emailRouteConfig($routeProvider){
	$routeProvider
	.when('/',{
		controller : ListController,
		templateUrl : 'list.html'
	})
	.when('/view/:id',{
		controller : DetailController,
		templateUrl : 'detail.html'
	}).otherwise({
		redirectTo : '/'
	});
}

aMailService.config(emailRouteConfig);

messages = [
	{
		id : 0,
		sender : a@gmail.com,
		subject : '오랜만이군',
		date : '2017년 3월 20일 12:30:00',
		recipients : ['ssunny@gmail.com'],
		message : '오랜만이군. 오랜만이군. 오랜만이군. 오랜만이군. 오랜만이군. 오랜만이군. 오랜만이군'
	},
	{
		id : 1,
		sender : bb@gmail.com,
		subject : '잘지냈어??',
		date : '2017년 3월 22일 12:30:00',
		recipients : ['ssunny@gmail.com'],
		message : '잘지냈어??. 잘지냈어??. 잘지냈어??. 잘지냈어??'
	},
	{
		id : 2,
		sender : ccc@gmail.com,
		subject : '안녕 안녕',
		date : '2017년 3월 23일 12:30:00',
		recipients : ['ssunny@gmail.com'],
		message : '안녕 안녕. 안녕 안녕. 안녕 안녕. 안녕 안녕. 안녕 안녕. 안녕 안녕. 안녕 안녕'
	},
	{
		id : 3,
		sender : ddd@gmail.com,
		subject : '안녕, 난 써니야',
		date : '2017년 3월 27일 12:30:00',
		recipients : ['ssunny@gmail.com'],
		message : '안녕, 난 써니야. 오랜만이군'
	}
];

function ListController($scope){
	$scope.messages = messages;
}

function DetailController($scope, $routeParams){
	$scope.messages = messages[$routeParams.id];
}