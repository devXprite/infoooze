/* eslint-disable no-useless-escape */
/* eslint-disable default-param-last */
/* eslint-disable global-require */
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const { sentenceCase } = require('sentence-case');
const { includes } = require('lodash');
const { prompt } = require('enquirer');

const input = async (question, questionType = 'input', options) => {
  const response = await prompt({
    type: 'input',
    name: 'value',
    message: question,
    required: true,

    validate: (value) => {
      if (value == '') {
        return 'Please enter a value';
      }

      if (questionType == 'url') {
        if (value.match(/.\../)) {
          return true;
        }
        return 'Please enter a valid url';
      }
      if (questionType == 'number') {
        if (Number.isInteger(Number(value))) {
          return true;
        }
        return 'Please enter a valid number';
      }
      if (questionType == 'ip') {
        if (value.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)) {
          return true;
        }
        return 'Please enter a valid ip';
      }
      if (questionType == 'username') {
        if (value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
          return true;
        }
        return 'Please enter a valid username';
      }

      if (questionType == 'select') {
        if (includes(options, Number(value)) || includes(options, value)) {
          return true;
        }

        return 'Please enter a valid option';
      }

      return true;
    },
  });
  return response.value;
};

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

const list = (counter, key, value) => {
  counter = counter <= 9 ? `0${counter}` : counter;
  if (typeof value == 'boolean') {
    value = value ? 'Yes' : 'No';
  }

  value = value || chalk.redBright('n/a');
  key = sentenceCase(key);

  console.log(
    chalk.white('[')
      + chalk.hex('#FFA500')(counter)
      + chalk.white('] ')
      + chalk.cyan(`${key} : `)
      + chalk.greenBright(value),
  );
};

const goBack = async () => {
  console.log('\n\n');

  const response = await prompt({
    type: 'confirm',
    name: 'value',
    message: 'Go back to home?',
    initial: true,
  });
  if (response.value) {
    require('./home').home();
  }
};

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
const print = (colorVal, prefix, body) => {
  if (colorVal.includes('#')) {
    console.log(
      chalk.cyan('[')
        + chalk.hex(colorVal)(prefix)
        + chalk.cyan('] ')
        + chalk.hex(colorVal)(body),
    );
  } else {
    console.log(
      chalk.cyan('[')
        + chalk[colorVal](prefix)
        + chalk.cyan('] ')
        + chalk[colorVal](body),
    );
  }
};

const exit = () => {
  console.log(chalk.hex('#FFA500')('\nThank You for using Infoooze'));
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
  exit,
  print,
};
