const express = require ('express');
const mongoose = require ('mongoose');
const {Schema} = mongoose;

const app = express ();

const streamSchema = new Schema ({
  title: String,
  description: String,
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}]
});



const streams = mongoose.model('streams', streamSchema);


app.get('/streams', (req,res)=>{ 
  res.json({msg: 'Good STUFF!'})


  // streams.find({}, (err, streams)=>{
  //   if (err){
  //     res.send('trouble')
  //   }
  //   streams.json()
  // })
})