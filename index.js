const express = require("express");
const app = express();
const PORT= process.env.PORT || 5000;

app.listen(PORT, function (){
    console.log("Server is running...");
})

app.use(express.static("public"));
app.set("view engine","ejs");

var counter = 0;
app.get("/ass13",function (req,res){

    // res.sendFile(__dirname+"/views/assingment 13.1.html");
    let title = "Dự báo thời tiết";
    counter++;
    res.render("ass13", {
        title: title,
        counter:counter
    });
});
const fs = require("fs");
app.get("/danh-muc",function (req,res) {
    let cats = fs.readFileSync("data/data.json","UTF-8");
    cats = JSON.parse(cats);
    res.render("labs10", {
        cats:cats,
    });
});
app.get("/chi-tiet/:id",function (req,res){
    let ID = req.param.id;
    let cats = fs.readFileSync("data/data.json","UTF-8");
    cats = JSON.parse(cats);
    let count = 0;
    cats.map(e=>{
        count++;
        if(e.id == ID){
            res.render("chitiet",{
                cat:e
            });
            count = 0
        }
    })
    if(count  >= cats.length){
        res.send("khong tim thay");
    }
})


