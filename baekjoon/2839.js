const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
}); 
rl.on('line', function(line) {
	var n = parseInt(line);
	var num5 = 5;
	var num3 = 3;
	var cnt5, cnt3, rest5, rest3;
	var total;

	cnt5 = Math.floor(n/num5);
	rest5 = n%num5;
	cnt3 = Math.floor(rest5/num3); 
	rest3 = rest5%num3;

	while(cnt5 != 0){
		if(rest3 == 0){
			break;
		}
		cnt5--;
		rest5 = n - (num5 * cnt5);		
		cnt3 = Math.floor(rest5/num3); 		
		rest3 = rest5%num3;
	}
	
	if(rest3 == 0){
		total = cnt5 + cnt3;
		console.log(total);
	}else{
		console.log(-1);
	}	
	rl.close();
});