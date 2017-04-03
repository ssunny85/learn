const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var cnt = 0;
var total = 0;
rl.on('line', function(line) {
	cnt++;
	total += parseInt(line);
	if(cnt == 2){
		console.log(total);
		rl.close();
	}
});
