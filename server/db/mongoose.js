const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ,{useMongoClient: true})
.catch(function(e){
    console.log('Failed to connect to MongoDB server');
});

module.exports = {mongoose};
