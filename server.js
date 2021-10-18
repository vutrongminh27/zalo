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
app.use(cors(corsOptions), (req, res, next) =>{
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

app.post("/", (req, res) =>{
    var token = req.query.code;
    var oa_id = req.query.oa_id;
    if (!token){
        res.status(500).send({ message : "No token provided"})
    }else{
        res.status(200).send({ message : "Token revolved"})
        console.log(token)
        console.log(oa_id)
    }
});

app.get("/",(req, res) => {
    // res.sendFile(path.join(__dirname+"/assert/home.html"))
    var token = req.query.code;
    var oa_id = req.query.oa_id;
    if (!token){
        res.status(500).send({ message : "No token provided"})
    }else{
        res.status(200).send({ message : "Token revolved"})
        console.log(token)
        console.log(oa_id)
    }
    res.send("Zalo token")
})

app.get("",(req, res) => {
    // res.sendFile(path.join(__dirname+"/assert/home.html"))
    res.send("Zalo token")
})
app.listen(PORT, () => {
    console.log(`Server is running on port 5000.`);
});
    

// r1G7Q~AOEiV5SM~1J645utXEkV.37Tkzds7k1