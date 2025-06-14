const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://root:example@localhost:27017';
const DB_NAME = 'user-vault';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/submit', async (req, res) => {
  const { name, email } = req.body;
  try {
    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db(DB_NAME);
    await db.collection('submissions').insertOne({ name, email });
    client.close();
    res.send('<h2>Submission received! <a href=\"/\">Back</a></h2>');
  } catch (err) {
    res.status(500).send('Database error: ' + err);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
