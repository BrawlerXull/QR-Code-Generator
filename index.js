var QRCode = require('qrcode');
const express = require("express");
const app = express();
app.use(express.json());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("hello");
});

app.post("/",async(req,res)=>{
    QRCode.toDataURL(req.body.qr_code_text, function (err, url) {
        console.log(url)
        res.send({"qr_link":url});
      })
});


app.listen(6000)


