import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import userrecon from './userrecon.js';
import mailfinder from './mailfinder.js';
import useragent from './useragent.js';
import whois from './whois.js';
import IPlookup from './IPlookup.js';
import portScanner from './portScanner.js';

import { sleep, input } from './common.js';

var i = 1;

const list = async (name, description) => {
  await sleep(300);
  console.log(
    ` ${chalk.cyan(i++)} ${chalk.whiteBright(name)} \t ${chalk.blackBright(
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
      IPlookup();
      break;

    case '6':
      portScanner();
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

const home = async () => {
  var i = 1;
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

  await sleep(2000);
  console.log(`      A tool by ${'7ORP3DO'.cyan} & ${'Biswajeet'.cyan} `);
  await sleep(1000);

  console.log(
    '' + ' Choose number or type exit fir exiting '.bgWhite.black + '\n\n',
  );
  await list('Userrecon', 'username reconnaissance');
  await list('Mailfinder ', 'find email with specific name');
  await list('Useragent ', 'find browser info');
  await list('Domain info', "find doamin's whois info");
  await list('IP Lookup', 'find IP info');
  await list('Ports Scan', 'find open ports');

  console.log('\n');
  takeOption();
};

export default home;
