const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
}); 
rl.on('line', function(line) {
	var num = line.split(' ');
	var a = parseInt(num[0]);
	var b = parseInt(num[1]);
	var c = parseInt(num[2]);
	console.log((a+b)%c);
	console.log((a%c + b%c)%c);
	console.log((a*b)%c);
	console.log((a%c * b%c)%c);
	rl.close();
});