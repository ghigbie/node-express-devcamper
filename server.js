const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const chalk = require('chalk');
const colors = require('colors');
const connectDB = require('./config/db');
const logger = require('./middleware/logger.js');

// Load env vars
dotenv.config({ path: "./config/config.env"});

// Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
    app.use(logger);
}

//mount routers
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

const server =  app.listen(
    PORT,
    console.log(chalk.green(`App is running in ${process.env.NODE_ENV.blue} on port ${PORT.blue}`))
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // close server and & exit process
    server.close(() => process.exit(1));
})