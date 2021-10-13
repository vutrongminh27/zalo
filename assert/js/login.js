// const { resolveInclude } = require("ejs");
// const { response } = require("express");
// const { url } = require("./env.config");

// const { compile } = require("ejs");

// var browserify = require('browserify');
// function userlogin(){
//     var username= document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     return [username, password]
//     // fetch("http://192.168.1.58/api/auth/login", {
//     //     method: 'POST',
//     //     mode: 'cors',
//     //     headers: new Headers({'content-type': 'application/json'}),
//     //     body: {
//     //         "username" : username,
//     //         "password" : password
//     //     }
//     // })
//     // .then(response => response.json())
//     // .then(result =>{
//     //     console.log('success: ', result);
//     // })
//     // .catch(error => {
//     //     console.error('Error: ', error);
//     // })
// }
// $(document).ready(function(){
//     let endpoint = "http://192.168.1.58/api/auth/login"
    
// });
// (function($) {
//     "use strict";
//     let endpoint = "http://192.168.1.58/api/auth/login"
//     $("#signin").submit(function(event){
//         // var username = $("#username").val();
//         // var password = $("#password").val();
//         event.preventDefault();
//         $.ajax({
//             type : "POST",
//             url : endpoint,
//             data : ({
//                 username : $("#username").val(),
//                 password : $("#password").val()
//             }),
//             success : function(result){
//                 if (result=='ok'){
//                     window.location = 'http://www.google.com/';
//                 }else{
//                     $('#result').empty().addClass('error')
//                     .append("Something is wrong");
//                 }
//             }
//         });
//     });
// })(jQuery);