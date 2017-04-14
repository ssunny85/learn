const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var input = [];
rl.on('line', function(line) {
	input.push(line);

	if(input.length == 2) {
		var line1 = input[0].split(' ');
		var line2 = input[1].split(' ');
		var result = '';
		for(number in line2){
			if(parseInt(line2[number]) < parseInt(line1[1])) {
				result += line2[number] + ' ';
			}
		}
		console.log(result);
		rl.close();
	}
});