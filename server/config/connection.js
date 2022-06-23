const mongoose = require('mongoose');

// mongodb://localhost/<your db name here>
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
