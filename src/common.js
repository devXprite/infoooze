import chalk from 'chalk';
import home from './home.js';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const list = async (counter, key, value, bool) => {
  var value = value || 'n/a';

  if (bool) {
    value = bool == true ? 'Yes' : 'No';
  }

  await sleep(300);
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

export { list, sleep, goBack, input };
