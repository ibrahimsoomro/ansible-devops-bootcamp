module.exports = {
	apps : [
		 {
			name: "nodejs",
			script: "./nodejs/server.js",
			watch: true,
			env: {
				 "PORT": 80,
				 "NODE_ENV": "development"
			}
		 }
	]
 }