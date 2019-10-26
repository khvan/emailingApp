const mongoose = require ('mongoose');
const {Schema} = mongoose;

const streamsSchema = new Schema ({
  title: String,
  description: String,
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

const Streams = mongoose.model('streams', streamsSchema);

