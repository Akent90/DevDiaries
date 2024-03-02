// Importing necessary packages 
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const sequelize = require('./config/connection');
const SeauelizeStore = require('connect-session-sequelize')(session.Store);

// Automatically import index.js from controllers 
const routes = require('./controllers');