// const express = require("express")
// const app = express()
// const cors = require("cors");
// const fetch = require('node-fetch');

import express from "express"
import fetch from "node-fetch";
const app = express()
// const cors = require("cors");

// const axios = require('axios');
const PORT = process.env.PORT || 5000;
// var corsOptions = {
//     origin: "*",
//     optionSuccessStatus: 200
//   };

// app.use(express.static(__dirname + '/assert'));
// app.use(cors(corsOptions), (req, res, next) =>{
//     next()
// });

function postData(url = '', data = {}){
    const response = fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
        
      });
      console.log(data)
      return response
}


app.get("/code",(req, res) => {
    // res.sendFile(path.join(__dirname+"/assert/home.html"))
    var accessToken = req.query.code; 
    var id = req.query.oa_id;
    if (!accessToken){
        res.status(500).send({ message : "No token provided"})
    }else{
        res.status(200).send({ message : "Token revolved"})
        console.log(accessToken)
        console.log(id)
        postData('http://113.161.152.35:2087/api/Fingers/ZaloAuthorization', {code : accessToken , oa_id : id})
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
    }
})
app.get("",(req, res) => {
    // res.sendFile(path.join(__dirname+"/assert/home.html"))
    res.send("Zalo token")
})
app.listen(PORT, () => {
    console.log(`Server is running on port 5000.`);
});

// async function postBack(url = "", data ={}){
//     const response = await fetch(url, {
//         method : 'POST',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data)
//     });
//     return response.json(); 
// }

// r1G7Q~AOEiV5SM~1J645utXEkV.37Tkzds7k1