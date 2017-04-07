var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
var n = parseInt(input[0]);
var star = '';
for(var i = 1; i <= n; i++) {
	star += '*';
	console.log(star);
}