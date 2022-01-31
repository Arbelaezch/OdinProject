const reverseString = function(string) {
	let reversed = ""

	const array = string.split('');
	let i = array.length;
	i -= 1;

	for(i; i>=0; i--){
		reversed += array[i];
	}

	return reversed;




};

module.exports = reverseString;
