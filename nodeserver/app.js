require('dotenv').config();

const express = require('express');
const {json, urlencoded} = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./models/index');
const app = express();


//routes
const indexRouter = require('./routes/index.routes');
const listsRouter = require('./routes/list.routes');


app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', indexRouter);
app.use('/lists', listsRouter);

// get the instance of sequelize
db.sequelize.sync()
//start app server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
})