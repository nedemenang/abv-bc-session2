
module.exports = {

	fizzBuzz: (number) =>
	{
		let output = number;
		
		if (number % 3 === 0 || number % 5 === 0) 
			{
				output = "";
				if (number % 3 === 0) 
					{
						output = output + "Fizz";
					}
				if (number % 5 === 0) 
					{
						output = output + "Buzz";
					}
			}
		return output;	
	}
}

