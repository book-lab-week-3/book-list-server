'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Note: this is our proof of life for deployment.
app.get('/', (req, res) => res.send('Testing 1, 2, 3'));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
