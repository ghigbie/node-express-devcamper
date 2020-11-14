const chalk = require('chalk');

//logs request to console
const logger = (req, res, next) => {
    const {method, protocol, originalUrl} = req;
    console.log(
        `${chalk.blue(method)}` +
         chalk.yellow(' | ') +
         chalk.green(`${chalk.green(protocol)}://${req.get('host')}${chalk.green(originalUrl)}`)
    );
    next();
}

module.exports = logger;