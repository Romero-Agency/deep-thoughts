const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://jromero:JaxCodes@1@cluster0.yyiht.mongodb.net/deep-thoughts-1?retryWrites=true&w=majority',
  //'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;