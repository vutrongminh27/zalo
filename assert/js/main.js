(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {
	  console.log("Toggle")
	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

	$("#login-button").click(function(){
        // var password = $("#in-password").val();
		let endpoint = process.env.API_URL + "/api/auth/signin";
		console.log("singin");
        console.log("Data: ", $("#in-username").val())
        $.ajax({
            type : "POST",
            url : endpoint,
			dataType : 'json',
            data : ({
                username : $("#exampleInputUsername").val(),
                password : $("#exampleInputPassword").val()
            }),
            success : function(data){
				console.log("Success", data);
				// $(location).attr(href,"https://www.google.com/");;
				window.location.href = "/" + data.username;
            }, 
			error: function(xhr, status, err) {
				console.log("err", err);
			  }
        });
    });
})(jQuery);
