// Contains the routes for routing the user to the app's api pages

// Dependencies ///////////////////////////////////////////////////
var friends = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends' , function(req, res) {
		res.json(friends);
	})

	app.post('/api/friends', function(req, res) {

		var friend = req.body;

		friends.push(friend);

		res.send(friend);

		// compatiblity(friend);
	})

	function compatiblity(user) {

	}
}