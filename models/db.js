var chalk = require('chalk');
var mongoose = require( 'mongoose' );

 //var dbURI = 'mongodb://127.0.0.1/employee';
var dbURI = mongodb://sandhya:Enjoy123@ds115071.mlab.com:15071/nodejs


mongoose.Promise = global.Promise;
mongoose.connect(dbURI);

//mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log(chalk.green('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(chalk.red('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.red('Mongoose disconnected'));
});

var employeeSchema = new mongoose.Schema({
  email: {type: String},
  name: {type: String},
  dob: {type: Date},
  gender:{type:String},
  department:{type:String},
  age:{type:Number}
});

mongoose.model( 'Employee', employeeSchema );


