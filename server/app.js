const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const FileStore = require('session-file-store')(session);
const cors = require('cors')
const usersRouter = require('./routes/user')

const app = express();
const PORT = 3001;

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors( {origin: true, credentials: true }));
// { origin: true, credentials: true }
app.use(cookieParser());
app.use(
  session({
    secret: '8u54trgh9but349rgjoi53eigrpj4wegrjpo', 
    resave: false,
    saveUninitialized: false,
    name: 'cookie',
    cookie: {
      maxAge: 1000 * 300,
      secure: false,
    },
    store: new FileStore({}),
  }),
);



app.use('/users', usersRouter);



app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
