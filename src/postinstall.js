#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

setTimeout(() => {
  console.log(
    `\n${boxen(
      `${chalk.hex('#FFA500')(
        `Thank You for Installing ${chalk.greenBright('Infoooze')}.`,
      )} \n ${chalk.gray(
        `Type ${chalk.green('infoooze -h')} for Help Menu.`,
      )}`,
      {
        padding: 1,
        borderColor: 'greenBright',
        textAlignment: 'center',
        margin: 1,
      },
    )}\n`,
  );
}, 2000);
