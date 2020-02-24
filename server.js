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
const User = require('./lib/User')
var express = require('express');
var router = express.Router();

//  Connection URL
const url = 'mongodb://localhost:27017/';


// Database Name
const dbName = 'doctorAppointmentsDashboard';
// var mongo 
// Create a new MongoClient
// const client = mongo.MongoClient;
// const client = new MongoClient(url, { useNewUrlParser: true });

// Set views directory and views engine as Handlebars
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "hbs");
const client = new MongoClient(url);
client.connect(function(err, db) {
    // var dbo = db.db(dbName); 
    if (err) throw err;
    const dbclient = client.db(dbName);
    app.listen(5000, function() {
        console.log("start");
    });

    insertDocuments(dbclient, function() {
        // findDocuments(db, function() {
        //     client.close();
        // });
        // updateDocument(db, function() {
        // removeDocument(dbo, function() {
        //     client.close();
        // });
        // });
        // indexCollection(db, function() {
        //     client.close();
        //   });
        // });
        client.close();
    });
    // assert.equal(null, err);


});
// MongoClient.connect(url, function(err, db) {


// });
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('users');
    // Insert some documents
    var user = { name: "Deema", phone: 21, email: 161064, password: 12 };
    db.collection('users').insertOne(user, function(err, result) {
        if (err) throw err;
        console.log("1 document inserted");
        // db.close();
        // assert.equal(err, null);
        // assert.equal(3, result.result.n);
        // assert.equal(3, result.ops.length);
        // console.log("one doctor inserted");
        callback(result);
        // db.close();
    });
}

// app.get('/', function(req, res, next) {
//     var resultArray = [];
//     dbo.collection('doctors').find({}).toArray(function(err, users) {
//         assert.equal(null, err);
//         res.render('index.hbs', { items: users });
//     });
//     cursor.forEach(function(doc, err) {

//         resultArray.push(doc);
//     }, function() {
//         db.close();
//         res.render('index.hbs', { items: resultArray });
//     });
// });
router.get('/', function(req, res) {
    res.render('views/Register.hbs', { title: 'Welcome' })
})
router.post('/register', function(req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;
    var phone = req.body.phone;

    var newUser = User();
    newUser.email = email;
    newUser.name = name;

    newUser.password = password;
    newUser.phone = phone;
    newUser.save(function(err, savedUser) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
    })
});



// app.listen(5000);