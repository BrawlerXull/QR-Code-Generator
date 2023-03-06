var QRCode = require('qrcode');
const express = require("express");
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("hello");
})

var ans = "";

app.post("/",(req,res)=>{
    QRCode.toDataURL(req.body.qr_code_text, function (err, url) {
        console.log(url)
        ans=url;
      })
    res.send({"qr_link":"ans"});
})


app.listen(6000)


