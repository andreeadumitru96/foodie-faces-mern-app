var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbConfig = require('./config/database.config.js');
var cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());

//Attach Routes
require('./server/routes/user.routes')(app);
require('./server/routes/utils/utils.routes')(app);
require('./server/routes/location.routes')(app);


//Serve static assets if in  production

if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

mongoose.Promise = global.Promise;

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/foodie-faces'

mongoose.connect(MONGODB_URL, {
    useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

app.set("port", process.env.PORT || 3001);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Server is listening on port ${app.get("port")}`);
});
