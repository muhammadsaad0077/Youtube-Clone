const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001; // Use the desired port

// Enable CORS for all routes
app.use(cors());

// Your API endpoint
app.get('/complete/search', async (req, res) => {
  try {
    const { client, ds, q } = req.query;
    const suggestUrl = `http://suggestqueries.google.com/complete/search?client=${client}&ds=${ds}&q=${q}`;

    // Proxy the request to the Google Suggest Queries API
    const response = await axios.get(suggestUrl);

    // Log the response to the console
    console.log('Response from Google Suggest Queries API:', response.data);

    // Return the response from the Google Suggest Queries API to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
