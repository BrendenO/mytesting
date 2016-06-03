"use strict";

let mongodb = require("mongodb");
let client = mongodb.MongoClient;
let _db;

module.exports = {
	connect() {
		client.connect('mongodb://localhost:27017/mytesting', (error, database) => {
			if(error) {
				console.log("Error connecting to Mongo. Make sure MongoD is running.");
				process.exit(1);
			}
			_db = database;
			console.log("You are connected to Mongo!");
		});
	},
	testings(){
		return _db.collection('mytesting');
	}
}