const express = require("express")
const app = express()
const cors = require("cors");
const path = require("path");
var server = require("http").createServer(app);
const PORT = process.env.PORT || 5000;
var corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
  };
app.use(express.static(__dirname + '/assert'));
app.use(cors(corsOptions), function(req, res, next){
next()
});

async function postBack(url = "", data ={}){
    const response = await fetch(url, {
        method : 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json(); 
}

app.post("/api/token", function(req, res){
    var token = req.body.AUTORIZATION_CODE;
    var oa_id = req.body.OA_ID;
    if (!token){
        res.status(500).send({ message : "No token provided"})
    }else{
        res.status(200).send({ message : "Token revolved"})
        console.log(token)
    }
});

app.get("", function(req, res){
    // res.sendFile(path.join(__dirname+"/assert/home.html"))
    res.send("Zalo token")
})

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});
    