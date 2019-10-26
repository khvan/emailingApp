const express = require ('express');
const mongoose = require ('mongoose');
const {Schema} = mongoose;

const streamSchema = new Schema ({
  title: String,
  description: String,
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

const streams = mongoose.model ('streams', streamSchema);

module.exports = app => {
  app.get ('/streams', (req, res) => {
    // res.json ({msg: 'Good Stuff!'});
    streams.find({}, (err, streams)=>{
      if (err){
        res.send('trouble')
      }
      res.send(streams)
    })
  });

  app.post ('/streams', (req, res) => {
    console.log ('aaaaaaaaa', req.body);
    const newStream = new streams ({
      title: req.body.title,
      description: req.body.description,
    });
    newStream.save ().then (res.send (req.body));
  });
};
