var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
var num = parseInt(input[0]);
for(var i = 1; i <= num; i++){
	console.log(i);
}