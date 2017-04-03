const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
}); 
rl.on('line', function(line) {
	var num = line.split(' ');
	var a = parseInt(num[0]);
	var b = parseInt(num[1]);
	console.log(a * b);
	rl.close();
});