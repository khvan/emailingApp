const express = require ('express');
const mongoose = require ('mongoose');
const keys = require ('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const
require ('./models/User');
require ('./services/passport');

const app = express ();

mongoose.connect (keys.mongoURI);

require ('./routes/authRoutes') (app);

app.get ('/', (req, res) => {
  res.send ({hello: 'world?'});
});

const PORT = process.env.PORT || 5000;
app.listen (PORT);
