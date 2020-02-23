// const express = require('express');
// const app = express();
// const expressLayouts = require('express-ejs-layouts');

// app.set('view engin', 'ejs')
// app.set('view', __dirname + '/views')

// npm install --save express
// npm install --save express-handlebars
// npm install --save mongoose
// npm install --save babel-cli babel-core babel-preset-env body-parser cors nodemon



// import express and path dependencies 

const app = require('express')();
const path = require('path');
const hb = require('hbs');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


//  Connection URL
const url = 'mongodb://localhost:27017';


// Database Name
const dbName = 'doctorAppointmentsDashboard';
// var mongo 
// Create a new MongoClient
// const client = mongo.MongoClient;
// const client = new MongoClient(url, { useNewUrlParser: true });

// Set views directory and views engine as Handlebars
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "hbs");
MongoClient.connect(url, function(err, db) {
    dbo = db.db(dbName);
    assert.equal(null, err);
    app.listen(5000, function() {
        console.log("start");
    });

});
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('users');
    // Insert some documents
    var user = { name: "Deema", age: 21, email: 161064, password: 12 };
    collection.insertOne(doctor, function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("one doctor inserted");
        callback(result);
        db.close();
    });
}

// app.get('/', function(req, res, next) {
//     var resultArray = [];
//     dbo.collection('doctors').find({}).toArray(function(err, users) {
//         assert.equal(null, err);
//         res.render('index.hbs', { items: users });
//     });
// cursor.forEach(function(doc, err) {

//     resultArray.push(doc);
// }, function() {
//     db.close();
//     res.render('index.hbs', { items: resultArray });
// });
// });

// app.listen(5000);