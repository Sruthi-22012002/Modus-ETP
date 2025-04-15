const express = require('express');
const app = express();

// Use the port Azure provides or fallback to 3000 for local testing
const port = process.env.PORT || 3000;

// Define the route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
