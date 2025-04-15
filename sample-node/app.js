// app.js

const express = require('express');
const app = express();
const port = 3000;

// Define the route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
