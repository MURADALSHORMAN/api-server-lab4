'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
app.use(cors());
app.use(express.json());
app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);

app.get('/', (req, res) => {
    res.send('server working');
});

app.get('/bad',(res,req)=>{
    throw new Error('Error');
});

app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};