function CartController($scope){
	$scope.items = [
		{
			title : '페인트 그릇',
			quantity : 8,
			price : 3.95
		},
		{
			title : '땡땡이 리본',
			quantity : 17,
			price : 12.95
		},
		{
			title : '공깃돌',
			quantity : 5,
			price : 6.95
		}
	];
	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}
}