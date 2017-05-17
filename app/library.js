'use strict';

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
	},

	Car: (name, model, type) =>
	{
	   this.name = name;
	   this.model = model;
	   this.numOfWheels = 4;
	   this.isSaloon = true;
	   this.speed = '0 km/h';
	   this.numberOfDoors = 4;
	   
	   if(name === "")
	   {
	     this.name = 'General';
	     this.model = 'GM';
	   }
	   if (name === "Porshe" || name ==="Koenigsegg")
	   {
	     this.numberOfDoors = 2;
	   }
	   
	   if(type === "trailer")
	   {
	     this.numOfWheels = 8;
	     this.isSaloon = false;
	   }
	},

	drive : function(gear) 
	{
	     if(this.type === "trailer")
	     {
	       let s = gear * 7;
	       this.speed = s + " km/h" ;
	     }
	     else
	     {
	       let s = gear * 50;
	       this.speed = s + " km/h" ;
	     }
	}
}
