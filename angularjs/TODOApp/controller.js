var app = angular.module('todo',[]);

app.controller('TodoCtrl',function($scope){
	$scope.todos = [
		{
			title : '요가 수행',
			completed : false,
			createdAt : Date.now(),
			id : 0
		},
		{
			title : 'angular 학습',
			completed : false,
			createdAt : Date.now(),
			id : 1
		},
		{
			title : '운동하기',
			completed : true,
			createdAt : Date.now(),
			id : 2
		}
	];

	$scope.remove = function(todo){
		var idx = $scope.todos.findIndex(function(item){
			return item.id === todo.id;
		});
		if(idx > -1){
			$scope.todos.splice(idx,1);
		}
	}

	$scope.add = function(newTodoTitle){
		var newTodo = {
			title : newTodoTitle,
			completed : false,
			createdAt : Date.now()
		};
		$scope.todos.push(newTodo);
		$scope.newTodoTitle = '';
	}
});