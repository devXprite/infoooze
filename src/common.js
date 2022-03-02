import chalk from 'chalk';
import fs from 'fs';
import home from './home.js';
import { sentenceCase } from 'sentence-case';
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

  if (bool) {
    value = bool == true ? 'Yes' : 'No';
  }

  if (typeof value == 'string' && value.includes('REDACTED')) {
    value = chalk.hex("#FFA500")(value);
  }

  key = sentenceCase(key);

  await sleep(300);
  console.log(
    chalk.white('[') +
      chalk.hex("#FFA500")(counter) +
      chalk.white('] ') +
      chalk.cyan(key + ' : ') +
      chalk.greenBright(value),
  );
};

const goBack = async () => {
  prompt('\npress enter to go back...'.cyan.italic);
  home(500);
};

const input = async (text) => {
  return prompt(` ${'>'.cyan} ${text.bold} : `);
};

export { list, sleep, goBack, input, currentTimeStamp, saveTo };
