const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo.js');
const {User} = require('./../../models/user.js');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'test@example.com',
    password: 'password123',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
},{
    _id: userTwoId,
    email: 'test2@example.com',
    password: 'anotherpassword',
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
},{
    _id: new ObjectID(),
    text :'Second test todo',
    completed: true,
    completedAt: 123456789
}];

const populateTodos = function(done){
    Todo.remove({}).then(function(){
        return Todo.insertMany(todos);
    }).then(function(){
        done();
    });
};

const populateUsers = function(done){
    User.remove({}).then(function(){
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo]);
    }).then(function(){
        done();
    });
}
module.exports = {todos, populateTodos, users, populateUsers};