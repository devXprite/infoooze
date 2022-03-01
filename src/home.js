import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import userrecon from './userrecon.js';
import mailfinder from './mailfinder.js';
import useragent from './useragent.js';

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

    case 'exit':
      console.log('bye!'.cyan);
      break;

    default:
      takeOption();
      break;
  }
};

export async function home() {
  i = 1;
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
  // await list('Website ', 'find websie info');

  console.log('\n');
  takeOption();
}

export default home;
