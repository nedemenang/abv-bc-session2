

		let Client = require('node-rest-client').Client;
		 
		let client = new Client();
		 
		client.get("http://jsonplaceholder.typicode.com/posts/1", function (data, response) {
		    console.log(data);
		   // console.log(response);
		});