/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const festRouter = require('./routes/festRouter');
const raceRouter = require('./routes/raceRouter');
const categoryRouter = require('./routes/categoryRouter');
const prodRouter = require('./routes/prodRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tokens', tokensRouter);
app.use('/api/auth', authRouter);
app.use('/api/fest', festRouter);
app.use('/api/races', raceRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/products', prodRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
