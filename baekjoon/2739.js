var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
var n = parseInt(input[0]);
for(var i = 1; i <= 9; i++){
	var mul = n * i;
	console.log(n + ' * ' + i + ' = ' + mul);
}
