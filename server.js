var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "first table",
        phoneNumber: 7704444444,
        email: "bob@aol.com",
        uniqueID: "damnit bobby"
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/waiting", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});