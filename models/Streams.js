const express = require ('express');
const mongoose = require ('mongoose');
const {Schema} = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const streamSchema = new Schema ({
  id: ObjectId,
  title: String,
  description: String,
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

const streams = mongoose.model ('streams', streamSchema);

module.exports = app => {
  app.get ('/streams', (req, res) => {
    // res.json ({msg: 'Good Stuff!'});

    streams.find ({}, (err, streams) => {
      const streamMap = {};
      streams.forEach (stream => {
        streamMap[stream.id] = stream;
      });
      res.send(streamMap);
    });
    // streams.findAll({}, (err, streams)=>{
    //   if (err){
    //     res.send('trouble')
    //   }
    //   res.send(streams)
    // })
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
