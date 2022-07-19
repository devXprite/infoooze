const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const EasyTable = require('easy-table');
const updateNotifier = require('update-notifier');
const args = require('args');
const userrecon = require('./userRecon');
const mailfinder = require('./mailFinder');
const useragent = require('./userAgent');
const instaRecon = require('./instaRecon');
const whois = require('./whoIs');
const IPlookup = require('./ipLookup');
const dnsLookup = require('./dnsLookup');
const portScanner = require('./portScanner');
const headerLookup = require('./headerLookup');
const urlExpander = require('./urlExpander');
const reportBug = require('./reportBug');
const { sleep, input } = require('./helper');
const gitRecon = require('./gitRecon');
const domainAge = require('./domainAge');
const subdomainScanner = require('./subdomainScanner');
const pkg = require('../package.json');
const exifMetadata = require('./exif');
const scanUrl = require('./scanUrl');

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60,
});

const takeOption = async () => {
  const option = parseInt(await input('Your Option '));

  switch (option) {
    case 1:
      userrecon(null, true);
      break;

    case 2:
      mailfinder(null, true);
      break;

    case 3:
      useragent(null, true);
      break;

    case 4:
      whois(null, true);
      break;

    case 5:
      instaRecon(null, true);
      break;

    case 6:
      IPlookup(null, true);
      break;

    case 7:
      portScanner(null, true);
      break;

    case 8:
      domainAge(null, true);
      break;

    case 9:
      headerLookup(null, true);
      break;

    case 10:
      scanUrl(null, true);
      break;

    case 11:
      gitRecon(null, true);
      break;

    case 12:
      urlExpander(null, true);
      break;

    case 13:
      subdomainScanner(null, true);
      break;

    case 14:
      exifMetadata(null, true);
      break;

    case 15:
      dnsLookup(null, true);
      break;

    case 98:
      args.showHelp();
      break;

    case 99:
      reportBug(null, true);
      break;

    case 0:
    case NaN:
      console.log(chalk.hex('#FFA500')('\nThank You for using Infoooze'));
      break;

    default:
      takeOption();
      break;
  }
};

const home = async (animationDelay = 300) => {
  console.clear();
  chalkAnimation.neon(
    `
    _____        __                         
   |_   _|      / _|                        
     | |  _ __ | |_ ___   ___   ___ _______ 
     | | | '_ \\|  _/ _ \\ / _ \\ / _ \\_  / _ \\
    _| |_| | | | || (_) | (_) | (_) / /  __/
   |_____|_| |_|_| \\___/ \\___/ \\___/___\\___|
                                      ${chalk.greenBright(`v${pkg.version}`)}`,
    '2',
  );

  await sleep(animationDelay);
  // console.log(chalk.hex('#FFA500')('\t     A OSINT based tool\n\n'));

  if (notifier.update) {
    console.log(
      `\n\tUpdate available ${chalk.hex('#FFA500')(
        pkg.version,
      )} -> ${chalk.greenBright(notifier.update.latest)}`,
    );
    console.log(`\tRun ${chalk.cyan('npm i -g infoooze')} to update`);
  }

  console.log('\n\n');
  await sleep(500);

  const optionsData = [
    ['User Recon', 'Username reconnaissance'],
    ['Mail Finder ', 'Find email with specific name'],
    ['Useragent', 'Find browser info'],
    ['Whoislookup', "Find doamin's whois info"],
    ['InstaRecon', 'Find Instagram users info'],
    ['IP Lookup', 'Find IP info'],
    ['Ports Scan', 'Find open ports'],
    ['Domain Age', 'Find website Age'],
    ['Header Info', 'Find website headers'],
    ['Website Scanner', 'Analyze suspicious URLs'],
    ['Git Recon', 'Find github user info'],
    ['Expand Url', 'Long url of shorten urls'],
    ['Subdomain', 'Find subdomains of website'],
    ['Exif Metadata', 'Extract Exif metadata from image'],
    ['DNS Lookup', 'Domain name system lookup'],
  ];

  const table = new EasyTable();

  optionsData.forEach((details, index) => {
    table.cell(
      chalk.whiteBright('No'),
      chalk.cyan(index < 9 ? `0${index + 1}` : index + 1),
    );
    table.cell(chalk.whiteBright('Name'), details[0]);
    table.cell(chalk.whiteBright('Description'), chalk.gray(details[1]));
    table.newRow();
  });

  table.newRow();
  table.cell(chalk.whiteBright('No'), chalk.cyan('98'));
  table.cell(chalk.whiteBright('Name'), 'Help');
  table.cell(chalk.whiteBright('Description'), chalk.gray('view help'));
  table.newRow();
  table.cell(chalk.whiteBright('No'), chalk.cyan('99'));
  table.cell(chalk.whiteBright('Name'), 'Report Bug');
  table.cell(
    chalk.whiteBright('Description'),
    chalk.gray('report bug on github'),
  );

  table.newRow();
  table.cell(chalk.whiteBright('No'), chalk.cyan('00'));
  table.cell(chalk.whiteBright('Name'), 'Exit');
  table.cell(
    chalk.whiteBright('Description'),
    chalk.gray('close and exit tool'),
  );
  table.newRow();
  console.log(table.toString());

  takeOption();
};

const banner = () => {
  console.log(
    chalk.hex('#FFA500')(`
  _____        __                         
 |_   _|      / _|                        
   | |  _ __ | |_ ___   ___   ___ _______ 
   | | | '_ \\|  _/ _ \\ / _ \\ / _ \\_  / _ \\
  _| |_| | | | || (_) | (_) | (_) / /  __/
 |_____|_| |_|_| \\___/ \\___/ \\___/___\\___|
                                    ${chalk.greenBright(`v${pkg.version}`)}
 `),
  );

  if (notifier.update) {
    console.log(
      `\n\tUpdate available ${chalk.hex('#FFA500')(
        pkg.version,
      )} -> ${chalk.greenBright(notifier.update.latest)}`,
    );
    console.log(`\tRun ${chalk.cyan('npm i -g infoooze')} to update\n`);
  }
};

module.exports = banner;
module.exports = {
  banner,
  home,
};
// module.exports = home;
