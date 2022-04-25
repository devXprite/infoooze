const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const EasyTable = require('easy-table');
const open = require('open');
const userrecon = require('./userRecon.js');
const mailfinder = require('./mailFinder.js');
const useragent = require('./userAgent.js');
const instaRecon = require('./instaRecon.js');
const whois = require('./whoIs.js');
const IPlookup = require('./ipLookup.js');
const dnsLookup = require('./dnsLookup.js');
const portScanner = require('./portScanner.js');
const headerLookup = require('./headerLookup.js');
const urlExpander = require('./urlExpander.js');
const reportBug = require('./reportBug');
const { sleep, input } = require('./common.js');
const gitRecon = require('./gitRecon.js');
const domainAge = require('./domainAge.js');
const subdomainScanner = require('./subdomainScanner.js');
const version = module.exports.version;
const updateNotifier = require('update-notifier');
const pkg = require('./../package.json');
const exifMetadata = require('./exif.js');
const args = require('args');
const scanUrl = require('./scanUrl.js');

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60 * 2,
});

const takeOption = async () => {
  var option = await input('Your Option ');

  if (option == '1' || option == '01') {
    userrecon(null, true);
  } else if (option == '2' || option == '02') {
    mailfinder(null, true);
  } else if (option == '3' || option == '03') {
    useragent(null, true);
  } else if (option == '4' || option == '04') {
    whois(null, true);
  } else if (option == '5' || option == '05') {
    instaRecon(null, true);
  } else if (option == '6' || option == '06') {
    IPlookup(null, true);
  } else if (option == '7' || option == '07') {
    portScanner(null, true);
  } else if (option == '8' || option == '08') {
    domainAge(null, true);
  } else if (option == '9' || option == '09') {
    headerLookup(null, true);
  } else if (option == '10') {
    scanUrl(null, true);
  } else if (option == '11') {
    gitRecon(null, true);
  } else if (option == '12') {
    urlExpander(null, true);
  } else if (option == '13') {
    subdomainScanner(null, true);
  } else if (option == '14') {
    exifMetadata(null, true);
  } else if (option == '15') {
    dnsLookup(null, true);
  } else if (option == '99') {
    reportBug(null, true);
  } else if (option == '98') {
    args.showHelp();
  } else if (option == 'exit' || option == '00' || option == '0') {
    console.log('\n');
  } else {
    takeOption();
  }
};

const home = async (animationDelay = 2000, i = 1) => {
  console.clear();
  chalkAnimation.neon(
    `
    _____        __                         
   |_   _|      / _|                        
     | |  _ __ | |_ ___   ___   ___ _______ 
     | | | '_ \\|  _/ _ \\ / _ \\ / _ \\_  / _ \\
    _| |_| | | | || (_) | (_) | (_) / /  __/
   |_____|_| |_|_| \\___/ \\___/ \\___/___\\___|
                                      ${chalk.greenBright('v' + pkg.version)}`,
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

  var optionsData = [
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

  var table = new EasyTable();

  optionsData.forEach((details, index) => {
    table.cell(
      chalk.whiteBright('No'),
      chalk.cyan(index < 9 ? '0' + (index + 1) : index + 1),
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
                                    ${chalk.greenBright('v' + pkg.version)}
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
