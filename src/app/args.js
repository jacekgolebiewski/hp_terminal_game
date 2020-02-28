let argv = require('yargs')
  .options({
    'ip': {
      alias: 'i',
      describe: 'Adres IP serwera',
      demandOption: true
    },
    'symbol': {
      alias: 's',
      describe: 'Twój symbol w grze',
      demandOption: true
    },
    'name': {
      alias: 'n',
      describe: 'Twoja nazwa w grze',
	  demandOption: true
    }
  })
  .help()
  .argv;

module.exports = {
    ip: argv.ip,
    symbol: argv.symbol,
    name: argv.name
};