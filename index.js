const express = require('express');
//import path from 'path';
//import webpack from 'webpack';
//import WebpackDevServer from 'webpack-dev-server';
const bodyParser = require('body-parser');
const TodoRoutes = require('./routes');

// Set up for environment variables from production
const APP_PORT = process.env.PORT || 3001;

// Create react app comes with its own webpack behind the scenes
// TODO: If I had more time I would figure out how to get babel to transpile my code from es6 to es5


const app = express();

// Serve up static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Adds routes
app.use(TodoRoutes);

// Brings in mongo connection
require("./config/connection.js");

// Start the API server
app.listen(APP_PORT, () => { 
	console.log(`App is now running on http://localhost:${APP_PORT}`); 
});
