var path= require("path");

//static info goes
module.exports= function (app){
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

//goes home no matter what- catchall, always put last 
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};