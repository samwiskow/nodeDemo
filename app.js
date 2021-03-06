const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const _ = require('underscore');
const helmet = require('helmet');
const session = require('express-session');

const app = express();

// Helmet is used here to secure headers & prevent attackers from using common attacks like cross-site scripting (XSS)
app.use(helmet());

// using the express session middleware
app.use(session({
	secret: 'SQLBlockers', // secret string used in the signing of the session ID that is stored in the cookie
	name: 'BlocksOnTop', // set a unique name to remove the default connect.sid
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true, // minimize risk of XSS attacks by restricting the client from reading the cookie
		secure: true, // only send cookie over https
		maxAge: 60000*60*24 // set cookie expiry length in ms
	}
}));

// Here we supply the config information to connect to the mysql database
const con = mysql.createConnection({
	host: 'localhost',
	user: 'blockuser',
	password: 'bl0cks99',
	port: 4000,
	database: 'SQLBlocks'
});

// Connect to the DB
con.connect(function(err) {
	if (err) {
		console.log('error connecting to db!');
		throw err;
	}
	console.log('Connected!');
});

let tableArr = [];
let columnArr = [];
// get the column names from the table schema
con.query('select distinct Column_Name from information_schema.columns where table_schema = \'SQLBlocks\'',
	function (err, result, fields) {
		if (err) {
			console.log(err);
		}else {
			//console.log(result);
			result.forEach(function(item){
				columnArr.push(item.COLUMN_NAME);
			});
			//console.log(columnArr);
		}
	});

// get the table names from the schema
con.query('select distinct table_name from information_schema.columns where table_schema = \'SQLBlocks\'',
	function (err, result, fields) {
		if (err) {
			console.log(err);
		}else {
			//console.log(result);
			result.forEach(function(item){
				tableArr.push(item.TABLE_NAME);
			});
			//console.log(tableArr);
		}
	});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// The get functions determine what is rendered and sent to the front end based on the request
app.get('/', (req,res) => {
	res.render('index', {title: 'SQL Blocks', tables: tableArr, columns: columnArr});
});

app.get('/help', (req,res) => {
	res.render('help', {title: 'SQL Blocks', tables: tableArr, columns: columnArr});
});

app.get('/schema', (req,res) => {
	res.render('schema', {title: 'SQL Blocks', tables: tableArr, columns: columnArr});
});

// This handles the sql query to the databse
app.get('/query', (req,res) => {
	let input = _.unescape(req.query.query);
	console.log(req.query);
	console.log(input);
	con.query(input, function (err, result, fields) {
		if (err) {
			res.json({error: err});
		}else {
			//console.log(result);
			res.json({result: result, headers: fields});
			//con.destroy();
		}
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
