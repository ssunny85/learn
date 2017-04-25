angular.module('todo').directive('todoTitle',function(){
	return {
		template : '<h1>TODO</h1>'
	}
});

angular.module('todo').directive('todoItem',function(){
	return {
		//templateUrl : 'todoItem.tpl.html'
		template : 
			'<div class="todo-item">' + 
				'<span class="todo-check"><input type="checkbox" ng-model="todo.completed" /></span>' + 
				'<span class="todo-text"><input type="text" ng-model="todo.title" /></span>' + 
				'<span class="todo-delete"><button type="button" ng-click="remove(todo);">삭제</button></span>' + 
			'</div>' + 
			'<div class="">{{todo.createdAt | date:\'yyyy-MM-dd HH:mm:ss\'}}</div>'
	}
});

angular.module('todo').directive('todoFilters',function(){
	return {
		//templateUrl : 'todoFilters.tpl.html'
		template : 
			'<div class="filter-btn">' + 
				'<button type="button" ng-click="statusFilter={completed:true}">Completed</button> ' + 
				'<button type="button" ng-click="statusFilter={completed:false}">Active</button> ' + 
				'<button type="button" ng-click="statusFilter={}">All</button>' + 
			'</div>'
	}
});

angular.module('todo').directive('todoForm',function(){
	return {
		//templateUrl : 'todoForm.tpl.html'
		template : 
			'<form name="todoForm" ng-submit="add(newTodoTitle);">' + 
				'<div class="todo-form">' + 
					'<input type="text" placeholder="새로운 Todo 입력하세요." autofocus="true" ng-model="newTodoTitle" minlength="5" />' + 
					'<button type="submit">추가</button>' + 
				'</div>' + 
				'<div class="alert-warning" ng-show="todoForm.$dirty && todoForm.$invalid">' + 
					'<span>5글자 이상 입력하세요.</span>' + 
				'</div>' + 
			'</form>'
	}
});