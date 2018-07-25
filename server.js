'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;
// const conString = process.env.DATABASE_URL;
const conString = 'postgres://postgres:1234@localhost:5432/books_app';
// setting up the DB
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.log(err));

// middleware
app.use(cors());

// API endpoints
app.get('/api/v1/books', (request, response) => {
  let SQL = 'SELECT book_id, author, title, image_url FROM books;';
  client.query(SQL)
    .then(results => response.send(results.rows))
    .catch(console.error);
})

// Note: this is our proof of life for deployment.
// app.get('/', (request, response) => response.send('Testing'));

app.get('*', (request, response) => response.status(404).send('Page does not exist'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
