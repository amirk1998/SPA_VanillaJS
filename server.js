const express = require('express');
const path = require('path');

const app = express();

app.use('/client', express.static(path.resolve(__dirname, 'client/public')));

//req => request
//res => response
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running...');
});
