var app = angular.module('myapp',[]);

var students = [
	{'name':'Mary contrary','id':'1'},
	{'name':'Jack Spart','id':'2'},
	{'name':'Jill Hill','id':'3'}
]; 
app.controller('studentsListController',function($scope){
	$scope.students = students;	

	$scope.add = function(){
		var addStudent = {'name':'Tom','id':'4'};
		$scope.students.push(addStudent);
	}
});
