const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Word = require('./models/word');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const db =
  'mongodb+srv://admin:123@cluster0.gdcfw.mongodb.net/next-lang?retryWrites=true&w=majority';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

const createPath = (page) =>
  path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.use(express.static('styles'));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.get('/contacts', (req, res) => {
  const title = 'Contacts';
  const contacts = [
    { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
    { name: 'Twitter', link: 'http://github.com/YauhenKavalchuk' },
    { name: 'GitHub', link: 'http://twitter.com/YauhenKavalchuk' },
  ];
  res.render(createPath('contacts'), { contacts, title });
});

app.get('/words', (req, res) => {
  const title = 'Words';
  Word.find({ page:2, group:3 })
    .then((words) => {
      console.log(words[0]);
      res.render(createPath('words'), { words, title });
    })
    .catch((error) => {
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/add-word', (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-word'), { title });
});

app.use((req, res) => {
  const title = 'Error Page';
  res.status(404).render(createPath('error'), { title });
});
