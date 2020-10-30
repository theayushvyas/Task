const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  
});


const Detail = mongoose.model('Detail', userSchema);

module.exports = Detail;