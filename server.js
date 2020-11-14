const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const chalk = require('chalk');
const logger = require('./middleware/logger.js');
//Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: "./config/config.env"});

const app = express();
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
    app.use(logger);
}

//mount routers
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(chalk.yellow(`App is running in ${process.env.NODE_ENV} on port ${chalk.blue(PORT)}`))
);