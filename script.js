function convertToRoman(num) {
  	const symbols = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
let roman = '';
	for(let i = 0; i<symbols.length; i++){
while(num>=symbols[i][1]){
	roman += symbols[i][0];
	num -= symbols[i][1];
}
		if(i%2==0 && i<symbols.length-2){
const next = symbols[i+2][0];
			const nextVal = symbols[i+2][1];
			if(num>=symbols[i][1] -nextVal){
				roman+=next+symbols[i][0];
				num-=symbols[i][1]-nextVal;
			}
		}
	}
return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
