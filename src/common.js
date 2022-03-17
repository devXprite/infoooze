const chalk = require('chalk');
const fs = require('fs');
const { sentenceCase } = require('sentence-case');
const PromptSync = require('prompt-sync');
const moment = require('moment');

const prompt = PromptSync();

const sleep = async (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const currentTimeStamp = () => moment().format('DDMMYYYYHHmmss');

const saveTo = (path, content, content2) => {
  try {
    if (!fs.existsSync('./results')) {
      fs.mkdirSync('./results');
    }
    if (content2) {
      fs.appendFileSync(path, `\n${content} : ${content2}`);
    } else {
      fs.appendFileSync(path, `\n${content}`);
    }
  } catch (error) {
    /* n/a */
  }
};

const list = async (counter, key, value) => {
  counter = counter <= 9 ? '0' + counter : counter;
  if (typeof value == 'boolean') {
    value = value ? 'Yes' : 'No';
  }

  value = value || chalk.redBright('n/a');

  key = sentenceCase(key);

  await sleep(250);
  console.log(
    chalk.white('[') +
      chalk.hex('#FFA500')(counter) +
      chalk.white('] ') +
      chalk.cyan(key + ' : ') +
      chalk.greenBright(value),
  );
};

const goBack = async () => {
  await prompt(chalk.cyan.italic('\npress enter to go back...'));
  require('./home').home();
};

const input = async (text) => {
  return prompt(` ${chalk.cyanBright('>')} ${chalk.bold(text)} : `);
};

const errorMsg = async (
  msg = 'Something went wrong! Please check your internet.',
) => {
  console.log(
    chalk.white('[') +
      chalk.redBright('!') +
      chalk.white('] ') +
      chalk.hex('#FFA500')(msg),
  );
};

const info = async (msg, path = '') => {
  console.log(
    chalk.white('\n[') +
      chalk.cyan('!') +
      chalk.white('] ') +
      chalk.cyan(msg) +
      chalk.hex('#FFA500')(path),
  );
  console.log('\n');
};

module.exports = {
  list,
  sleep,
  goBack,
  input,
  currentTimeStamp,
  saveTo,
  errorMsg,
  info,
};
