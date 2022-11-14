const express = require('express');
const { urlencoded } = require('express');
const router = require('./routes/index');
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8080);

app.use('/api', router);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({
    status: 404,
    messages: 'Page not found',
  });
});

app.listen(app.get('port'), () => {
  console.info(
    '\x1b[33m%s\x1b[0m',
    `>>> Server listening on port ${app.get(
      'port'
    )} 🚀 `
  );
});