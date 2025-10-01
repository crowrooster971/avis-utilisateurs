const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME || 'avis_utilisateurs';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB database successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the User Feedback System!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});