#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const pkg = require('../package.json');
const { sleep } = require('./helper');

(async () => {
  console.log(
    `\n\n\n${boxen(
      `${chalk.hex('#FFA500')(
        `Thank You for Installing Infoooze@${pkg.version}`,
      )} \n ${chalk.gray(
        `\nType ${chalk.cyanBright('infoooze -h')} for Help Menu \nDon't forget to give this project a star!`,
      )}`,
      {
        padding: 1,
        borderColor: 'cyanBright',
        textAlignment: 'center',
        margin: 1,
        borderStyle: 'round',

      },
    )}\n\n\n`,
  );
  await sleep('2500');
})();
