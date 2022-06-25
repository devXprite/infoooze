/* eslint-disable global-require */
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const PromptSync = require('prompt-sync');
const { sentenceCase } = require('sentence-case');

const prompt = PromptSync();

const sleep = async (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const currentTimeStamp = () => moment().format('DDMMYYYYHHmmss');

const saveTo = async (path, value, value2) => {
  try {
    if (!fs.existsSync('./results')) {
      fs.mkdirSync('./results');
    }
    if (value != '---') {
      value = sentenceCase(value);
    }
    if (value2) {
      fs.appendFileSync(path, `\n${value} : ${value2}`);
    } else {
      fs.appendFileSync(path, `\n${value}`);
    }
  } catch (error) {
    /* n/a */
  }
};

const list = async (counter, key, value) => {
  counter = counter <= 9 ? `0${counter}` : counter;
  if (typeof value == 'boolean') {
    value = value ? 'Yes' : 'No';
  }

  value = value || chalk.redBright('n/a');
  key = sentenceCase(key);

  await sleep(200);
  console.log(
    chalk.white('[')
      + chalk.hex('#FFA500')(counter)
      + chalk.white('] ')
      + chalk.cyan(`${key} : `)
      + chalk.greenBright(value),
  );
};

const goBack = async () => {
  await prompt(chalk.cyan.italic('\npress enter to go back...'));
  require('./home').home();
};

const input = async (text) => prompt(` ${chalk.cyanBright('>')} ${chalk.bold(text)} : `);

const errorMsg = async (
  msg = 'Something went wrong! Please check your internet.',
) => {
  console.log(
    chalk.white('[')
      + chalk.redBright('!')
      + chalk.white('] ')
      + chalk.hex('#FFA500')(msg),
  );
};

const info = async (msg, path = '') => {
  console.log(
    chalk.white('\n[')
      + chalk.cyan('!')
      + chalk.white('] ')
      + chalk.cyan(msg)
      + chalk.hex('#FFA500')(path),
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
