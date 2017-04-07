var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
var num = parseInt(input[0]);
for(var i = num; i >= 1; i--){
	console.log(i); 
}