const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  page: {
    type: Number,
    required: true,
  },
  group: {
    type: Number,
    required: true,
  },
  word: {
    type: String,
    required: true,
  },
  textMeaning: {
    type: String,
    required: true,
  },
  textExample: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  audio: {
    type: String,
    required: true,
  },
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
