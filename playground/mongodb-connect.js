//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if(err){
        return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false

    // }, function(err, res){
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Caleb',
    //     age: 18,
    //     location: 'Dayton'
    // }, function(err, res){
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    // });





    db.close();
});