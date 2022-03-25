const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}
	
	else if (mathSymbol === "-"){
		console.log(num1 - num2);
	}
	else if (mathSymbol === "*"){
		console.log(num1 * num2);
	}
	else if (mathSymbol === "/"){
		console.log(num1 / num2);
	}
	else if (mathSymbol === "sqrt"){
		console.log( Math.sqrt(num1,num2));
	}
	//Squaring a number
	else if (mathSymbol === "**"){
		console.log(num1 ** num2);
	}

	//Finding the power of a number
	else if (mathSymbol === "pow"){ 
		console.log( Math.pow(num1, num2));
	}
	//Cubing a number
		if (mathSymbol === "^3"){
			console.log(num1 * num1 * num1);
		}
	//modulus for finding the remainder of number
	else if (mathSymbol === "%"){
		console.log((num1 % num2)); 
	}
	

	// This line closes the connection to the command line interface.
	reader.close()

});


