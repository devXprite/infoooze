const chalk = require('chalk');
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
const { input } = require('./helper');
const gitRecon = require('./gitRecon');
const domainAge = require('./domainAge');
const subdomainScanner = require('./subdomainScanner');
const pkg = require('../package.json');
const exifMetadata = require('./exif');
const scanUrl = require('./scanUrl');
const youtubeLookup = require('./youtubeLookup');

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60,
});

const takeOption = async () => {
  const option = parseInt(
    await input(
      'Your Option ',
      'select',
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 98, 99],
    ),
    10,
  );

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

    case 16:
      youtubeLookup(null, true);
      break;

    case 98:
      args.showHelp();
      break;

    case 99:
      reportBug(null, true);
      break;

    case 0:
      console.log(chalk.hex('#FFA500')('\nThank You for using Infoooze'));
      break;

    default:
      takeOption();
      break;
  }
};

const home = async () => {
  console.clear();

  console.log(
    chalk.hex('#D546F2')(`
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
    console.log(`\tRun ${chalk.cyan('npm i -g infoooze')} to update`);
  }

  console.log('\n\n');

  const optionsData = [
    ['User Recon', 'Search for a username across multiple platforms'],
    ['Email Finder ', 'Search for an email associated with a specific username'],
    ['Useragent', 'Finds browser information'],
    ['Whois Info', 'Find registration information for a specific domain'],
    ['Insta Recon', 'Find information of Instagram user'],
    ['IP Lookup', 'Find information of a specific IP address'],
    ['Ports Scan', 'Find Open Ports of a website'],
    ['Website Age', 'Find out how long a website has been active'],
    ['Header Info', 'View HTTP headers of a website'],
    ['Website Scan', 'Analyze Suspicious URL'],
    ['Git Recon', 'Find information of Github user'],
    ['URL Expander', 'Expand shortened URLs to see the full destination'],
    ['Subdomain', 'Find and enumerate the subdomains of a website'],
    ['Exif Metadata', 'Extract Exif metadata from images'],
    ['DNS Records', 'View DNS records for a specific domain'],
    ['Youtube Metadata', 'View the metadata of a YouTube video'],
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
