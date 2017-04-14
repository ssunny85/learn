var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
input.sort(function(a,b){
	return parseInt(a) - parseInt(b);
});
console.log(input[1]);