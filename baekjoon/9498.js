var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
var n = parseInt(input[0]);
if(90 <= n && n <= 100){
	console.log('A');
}else if(80 <= n && n <= 89){
	console.log('B');
}else if(70 <= n && n <= 79){
	console.log('C');
}else if(60 <= n && n <= 69){
	console.log('D');
}else{
	console.log('F');
}