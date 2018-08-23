const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = express.Router();
const logic = require('./logic');
const cors = require('cors');

//main app
const app = express();

//routes
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded());
app.use(express.static(path.resolve(__dirname, './build')));
app.use('/api', router);
router.get('/summarize', logic.summarize);

let port = 3005;


app.listen(port, () => {
  console.log('listening on ', port);
});

module.exports = app;