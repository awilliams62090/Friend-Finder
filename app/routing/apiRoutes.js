//bringing data back to user all logic fo math will go here

var friends = require("../data/friends")
var user = require("../data/user")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })

    app.get("/api/user", function (req, res) {
        res.json(user);
    });

    app.post("/api/user", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            difference: 100
        };
        // send user data as an object
        var userInput = req.body;
        var totalDiff;

        for (var i = 0; i < friends.length; i++) {
            totalDiff = 0;
            for (x = 0; x < friends[i].scores.length; x++) {
                totalDiff += Math.abs(parseInt(userInput.scores[x]) - parseInt(friends[i].scores[x]));
            };
            if (totalDiff <= bestMatch.difference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.difference = totalDiff
            }
        };
        user.push(userInput);
        console.log(user);
        res.json(bestMatch);
        console.log(bestMatch)

    })
}