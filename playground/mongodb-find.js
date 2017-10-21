
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db){
    if(err){
        return console.log('Unable to connect to MongoDB server.')
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59eaedcb416305dab537a0c1')
    // })
    // .toArray().then(function(docs){
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, function(err){
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then(function(count){
    //     console.log(`Todos count: ${count}`);
    // }, function(err){
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Caleb'})
    .toArray().then(function(docs){
        console.log('User(s)');
        console.log(JSON.stringify(docs, undefined, 2));
    }, function(err){
        console.log('Unable to fetch user(s)', err);
    });

    //db.close();
});