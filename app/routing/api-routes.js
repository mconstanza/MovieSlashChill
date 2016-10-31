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

		// res.send(friend); // test code

		console.log(friend)

		var match = compatiblity(friend);

		res.send('Here is your match: ' + JSON.stringify(match));

		// loadMatch(match);
	})



// function to find the most compatible friend
	function compatiblity(user) {


		var lowestDiff = 50;
		var friendLowestDiff = {};


		for (i = 0; i < friends.length; i++) {

			// compare scores with anyone that isn't the user
			if (friends[i].name != user.name && friends[i].photo != user.photo) {

				console.log(friends[i].name)
				console.log(friends[i].scores)

				// var diff = totalDifference(user.scores, friends[i].scores);
				var diff = 0;

				for (j = 0; j < user.scores.length; j++) {
					diff += Math.abs(parseInt(user.scores[j]) - parseInt(friends[i].scores[j]));
				}

				console.log('diff: ' + diff)

				// if the difference in scores is lower than that of all prev friends, they are a match
				if (diff < lowestDiff) {

					lowestDiff = diff;

					console.log('friend ' + JSON.stringify(friends[i]))
					friendLowestDiff = friends[i];

					console.log(lowestDiff)

					console.log('friend lowest diff:' + friendLowestDiff)
				}
			}
		}
		return friendLowestDiff
	}


// CURRENTLY NOT WORKING! ONLY WORKS IN BODY OF LOOP
	function totalDifference(arr1, arr2) {

		var totalDifference = 0;

		for (i = 0; i < arr1.length; i++) {
			totalDifference += Math.abs(parseInt(arr1[i]) - parseInt(arr2[i]));
		};

		return totalDifference

	}
}