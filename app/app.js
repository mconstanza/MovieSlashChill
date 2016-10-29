
$(document).on('ready', function(){

	$(".submit").on("click", function(){

		console.log('submit clicked')

		var user = {
			name: $('#name').val().trim();
			photo: $('#photo').val().trim();
			scores: []
		}

			for (i = 0; i < $('.movie').length; i++) {

				user.scores.push($('.movie').val())
			}
		}

		console.log(user);

		var currentURL = window.location.origin;

		$.post(currentURL + '/api/friends', user)
			.done(function(data) {
				console.log(data);

			});

		return false

	})

	
})
