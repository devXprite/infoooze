#!/usr/bin/env node

const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

const ThanksAnimation = chalkAnimation.rainbow(
  'Thank You for Installing Infoooze',
);

setTimeout(() => {
  console.log(chalk.hex('#FFA500')('\n\nType infoooze -h for Help'));
}, 3000);
