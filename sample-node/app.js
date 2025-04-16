const express = require('express');
const axios = require('axios');
const app = express();

// Use the port Azure provides or fallback to 3000 for local testing
const port = process.env.PORT || 3000;

// Define the route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define the route to call an external API
app.get('/external', async (req, res) => {
  try {
    // Making the external API call using axios
    const response = await axios.get('https://api.publicapis.org/entries');
    
    // Send the response from the external API to the client
    res.json(response.data);
  } catch (err) {
    // Error handling if the external API call fails
    res.status(500).send('Error calling external API');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
