// Contains the routes for routing the user to the app's api pages

// Dependencies ///////////////////////////////////////////////////
var friends = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends' , function(req, res) {
		res.json(friends);
	})

	app.post('/api/friends', function(req, res) {

		res.send(req.body);

	})

	function compatiblity(user) {

	}
}