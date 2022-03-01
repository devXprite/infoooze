import chalk from 'chalk';
import fs from 'fs';
import home from './home.js';
import PromptSync from 'prompt-sync';
import moment from 'moment';

const prompt = PromptSync();

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const currentTimeStamp = () => moment().format('DDMMYYYYHHmmss');

const saveTo = (path, content) => {
  try {
    fs.appendFileSync(path, `\n${content}`);
  } catch (error) {
    /* n/a */
  }
};

const list = async (counter, key, value, bool) => {
  var value = value || chalk.redBright('n/a');

  if (value.includes('REDACTED')) {
    value = chalk.redBright(value);
  }

  if (bool) {
    value = bool == true ? 'Yes' : 'No';
  }

  await sleep(200);
  console.log(
    chalk.greenBright('[') +
      chalk.cyan(counter) +
      chalk.greenBright('] ') +
      chalk.cyan(key + ' : ') +
      chalk.greenBright(value),
  );
};

const goBack = async () => {
  prompt('\npress enter to go back...'.cyan.italic);
  home();
};

const input = async (text) => {
  return prompt(` ${'>'.cyan} ${text.bold} : `);
};

export { list, sleep, goBack, input, currentTimeStamp, saveTo };
