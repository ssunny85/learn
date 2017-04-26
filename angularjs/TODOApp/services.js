angular.module('todo').factory('todoStorage',function(){
	var storage = {
		todos : [
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
		],
		get : function(){
			return storage.todos;
		}
	};
	return storage;
});