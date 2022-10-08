const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  group: {
    type: Number,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },  
  word: {
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
  audioMeaning: {
    type: String,
    required: true,
  },
  audioExample: {
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
  transcription: {
    type: String,
    required: true,
  },
  textExampleTranslate: {
    type: String,
    required: true,
  },
  textMeaningTranslate: {
    type: String,
    required: true,
  },
  wordTranslate: {
    type: String,
    required: true,
  },
  
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
