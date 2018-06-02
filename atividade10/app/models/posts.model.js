let mongoose = require('mongoose');
let Schema = mongoose.Schema;
module.exports = function () {
  let schema = mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  return mongoose.model('Posts', schema);
}();