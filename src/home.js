import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import userrecon from './userrecon.js';
import mailfinder from './mailfinder.js';
import useragent from './useragent.js';
import whois from './whois.js';
import IPlookup from './IPlookup.js';
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
      IPlookup();
      break;

    case '6':
      portScanner();
      break;

    case '7':
      headerLookup();
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
    '2'
  );

  await sleep(animationDelay);
  console.log(`      A tool by ${'7ORP3DO'.cyan} & ${'Biswajeet'.cyan} `);
  await sleep(animationDelay);

  console.log(
    '' + ' Choose number or type exit fir exiting '.bgWhite.black + '\n\n',
  );
  await list(i++, 'Userrecon', 'username reconnaissance');
  await list(i++, 'Mailfinder ', 'find email with specific name');
  await list(i++, 'Useragent ', 'find browser info');
  await list(i++, 'Whoislookup', "find doamin's whois info");
  await list(i++, 'IP Lookup', 'find IP info');
  await list(i++, 'Ports Scan', 'find open ports');
  await list(i++, 'Domain Age', 'find website Age')
  await list(i++, 'Header Info', 'find website headers');

  console.log('\n');
  takeOption();
};

export default home;
