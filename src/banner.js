import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import PromptSync from 'prompt-sync';

import userrecon from './userrecon.js';
import mailfinder from './mailfinder.js';

var i = 1;
const prompt = PromptSync();
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
const list = async (name, description) => {
  await sleep(300);
  console.log(
    ` ${chalk.cyan(i++)} ${chalk.whiteBright(name)} \t ${chalk.blackBright(
      description,
    )}`,
  );
};

const takeOption = () => {
  var selectedOption = prompt(` ${'>'.cyan} ${'Your Option'.bold} : `);
  switch (selectedOption) {
    case '1':
      userrecon();
      break;
    case '2':
      mailfinder();
      break;

    case 'exit':
      console.log('bye!'.cyan);
      break;

    default:
      takeOption();
      break;
  }
};

export async function banner() {
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

  console.log('\n');
  takeOption();
}

export default banner;
