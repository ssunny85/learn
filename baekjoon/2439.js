var input = require("fs").readFileSync("/dev/stdin").toString().split(' ');
var n = parseInt(input[0]);
var star = '';
var space = ' ';
for(var i = 1; i <= n; i++) {
	star += '*';
	space = '';
	for(var j = 1; j <= n-i; j++){
		space += ' ';
	}
	console.log(space + star);
}