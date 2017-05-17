

		let Client = require('node-rest-client').Client;
		 
		let client = new Client();
		 
		client.get("http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AAAPL,GOOG", function (data, response) {

		    console.log(data);
		    console.log(response);
		});