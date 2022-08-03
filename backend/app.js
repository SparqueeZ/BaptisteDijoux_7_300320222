const express = require('express');

const app = express();

app.use('/api/auth/signup', (req, res, next) => {
    const user = [
      {
        mail: 'baptiste.dijouxn8@gmail.com',
        password: 'test',
      },
    ];
    res.status(200).json(user);
  });

module.exports = app;