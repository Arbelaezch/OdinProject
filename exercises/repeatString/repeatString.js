const repeatString = function(string, repetitions) {
	let output = "";

	
	if(repetitions >= 0){
		for(let i = 0; i < repetitions; i++){
			output += string;
		}
	} else {
		return "ERROR"
	}
	

	return output;
	
};

module.exports = repeatString;
