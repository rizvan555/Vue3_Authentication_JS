const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyParser.json());
const app = express();

const PORT = process.env.PORT || 5173;

mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'myUsers',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/users', (req, res) => {
  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({
        title: 'error',
        error: 'email in use',
      });
    }
    return res.status(200).json({
      title: 'signup success',
    });
  });
});

// Start the server
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log('server running on port ' + PORT);
});
