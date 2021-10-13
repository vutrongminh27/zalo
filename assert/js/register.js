(function($){
    "use strict";
    $("#register-button").click(function(){
        console.log("Customer register")
        let endpoint = process.env.API_REQUEST_URL;
        $.ajax({
            type: "POST",
            url: endpoint,
            dataType: 'json',
            data: ({
                name : $("#exampleInputName").val(),
                email : $("#exampleInputEmailID").val(),
                password: $("#exampleInputPassword").val(),
                address: $("#exampleAddress").val(),
                phone: $("#examplePhone").val(),
            }),
            success : function(data){
                console.log("success", data);
                window.locationhref = "/" + data.username;
            },
            error : function(xhr,status, err){
                console.log(err);
            }
        })
    })
})(jQuery);
