var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
var n = parseInt(input[0]);
var sum = 0;
for(var i = 0; i <= n; i++){
	sum += i;
}
console.log(sum);