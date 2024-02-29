const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine","ejs");
app.set("views",)

app.get("/",(req,res) => {
    res.render("rollDice.ejs");
});

app.get("/",(req,res) => {
    res.render("home.ejs");
});

app.get("/rollDice",(req,res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{ diceVal });
});

app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    res.render("instagram.ejs",{ username });
});   

app.listen(port, (req,res) => {
    console.log("listening on port",port);
});
