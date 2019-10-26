const express = require ('express');
const mongoose = require ('mongoose');
const cors = require('cors')
const keys = require ('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require ('./models/User');
require ('./models/Streams');
require ('./services/passport');






const app = express ();

app.use(cors())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect (keys.mongoURI);

require ('./routes/authRoutes') (app);

app.get ('/', (req, res) => {
  res.send ({hello: 'world?'});
});

app.get('/streams', (req,res)=>{ 
  res.json({msg: 'Good STUFF!'})


  // streams.find({}, (err, streams)=>{
  //   if (err){
  //     res.send('trouble')
  //   }
  //   streams.json()
  // })
})



const PORT = process.env.PORT || 5000;
app.listen (PORT);
