require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = process.env.EXPRESS || 3001; 

app.use(cors({
  origin: process.env.BASE_URL,
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));
app.use(express.json());
app.use(cors());


const visitorCountFile = './visitorCount.txt';


function formatCount(count) {
  var suffixes = ["", " ألف ", " مليون ", " مليار ", " بليون "];
  var suffixNum = Math.floor(("" + count).length / 3);
  var shortValue = parseFloat((suffixNum != 0 ? (count / Math.pow(1000, suffixNum)) : count).toPrecision(2));
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];

}

app.get('/api/visitor-count', (req, res) => {
  try {
    const data = fs.readFileSync(visitorCountFile, 'utf8').split('\n');
    const visitorCount = parseInt(data[0]);
    const updatedCount = visitorCount + 1;
    data[0] = updatedCount.toString();
    fs.writeFileSync(visitorCountFile, data.join('\n'));
    res.json({ count: formatCount(updatedCount) });
  } catch (error) {
    res.status(500).json({ error: 'Could not read visitor count' });
  }
});

app.get('/api/action-count', (req, res) => {
  try {
    const data = fs.readFileSync(visitorCountFile, 'utf8').split('\n');
    const visitorCount = parseInt(data[1]);
    const updatedCount = visitorCount + 1;
    data[1] = updatedCount.toString();
    fs.writeFileSync(visitorCountFile, data.join('\n'));
    res.json({ count: formatCount(updatedCount) });
  } catch (error) {
    res.status(500).json({ error: 'Could not read action count' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = {
  path: '/api',
  handler: app,
};
