var path = require("path");
var express = require("express");
var app = express();

//static info goes
module.exports = function (app) {

    app.use(express.static(__dirname + "/../public"));

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // goes home no matter what- catchall, always put last 
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};