const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.on('line', function(line) {
	var n = parseInt(line);
	var sum = 0;
	for(var i = 0; i <= n; i++){
		sum += i;
	}
	console.log(sum);
	rl.close();
});