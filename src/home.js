import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import userrecon from './userRecon.js';
import mailfinder from './mailFinder.js';
import useragent from './userAgent.js';
import instaRecon from './instaRecon.js';
import whois from './whoIs.js';
import IPlookup from './ipLookup.js';
import dnsLookup from './dnsLookup.js';
import portScanner from './portScanner.js';
import headerLookup from './headerLookup.js';

import { sleep, input } from './common.js';

var list = async (counter, name, description) => {
  await sleep(300);
  console.log(
    ` ${chalk.cyan(counter)} ${chalk.whiteBright(name)} \t ${chalk.blackBright(
      description,
    )}`,
  );
};

const takeOption = async () => {
  var selectedOption = await input('Your Option ');
  switch (selectedOption) {
    case '1':
      userrecon();
      break;
    case '2':
      mailfinder();
      break;

    case '3':
      useragent();
      break;

    case '4':
      whois();
      break;

    case '5':
      instaRecon();
      break;

    case '6':
      IPlookup();
      break;

    case '7':
      portScanner();
      break;
    case '8':
      domainAge();
      break;

    case '9':
      headerLookup();
      break;

    case '10':
      dnsLookup();
      break;

    case 'exit':
      console.log('bye!'.cyan);
      break;
    case '00':
      console.log('bye!'.cyan);
      break;
    default:
      takeOption();
      break;
  }
};

const home = async (animationDelay = 1500, i = 1) => {
  console.clear();
  chalkAnimation.neon(
    `
         |.---------------.|
         ||               ||
         ||   -._ .-.     ||
         ||   -._| | |    ||
         ||   -._|"|"|    ||
         ||   -._|.-.|    ||
         ||_______________||
         /.-.-.-.-.-.-.-.-.\\
        /.-.-.-.-.-.-.-.-.-.\\
       /.-.-.-.-.-.-.-.-.-.-.\\
      /______/__________\\___o_\\ 
      \\_______________________/
      
    `,
    '2',
  );

  await sleep(animationDelay);
  console.log(`      A tool by ${'7ORP3DO'.cyan} & ${'Biswajeet'.cyan} `);
  await sleep(animationDelay);

  console.log(
    '' + ' Choose number or type exit fir exiting '.bgWhite.black + '\n\n',
  );
  await list(i++, 'Userrecon', 'username reconnaissance', true);
  await list(i++, 'Mailfinder ', 'find email with specific name', true);
  await list(i++, 'Useragent ', 'find browser info', true);
  await list(i++, 'Whoislookup', "find doamin's whois info", true);
  await list(i++, 'InstaRecon', 'find Instagram users info', true);
  await list(i++, 'IP Lookup', 'find IP info', true);
  await list(i++, 'Ports Scan', 'find open ports', true);
  await list(i++, 'Domain Age', 'find website Age', true);
  await list(i++, 'Header Info', 'find website headers', true);
  await list(i++, 'DNS Lookup', 'domain name system lookup', true);
  await list(i++, 'Git Recon', 'find github user info', true);
  console.log('');
  await list('00', 'exit', 'exit and close tool');

  console.log('\n');
  takeOption();
};

export default home;
