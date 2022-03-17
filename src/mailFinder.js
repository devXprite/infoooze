const request = require('request');
const chalk = require('chalk');

const { list, goBack, input, errorMsg, sleep } = require('./common.js');
const key = require('./secret.js');

async function mailfinder(username, showHome = false) {
  username = username || (await input('Your Username'));
  username.replace(' ', '');
  const domainList = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'yandex.com',
  ];

  domainList.forEach(async (domain) => {
    let email = `${username}@${domain}`;
    try {
      request(
        {
          url: `https://isitarealemail.com/api/email/validate?email=${email}`,
          headers: {
            Authorization: key('em'),
          },
          timeout: 5000,
          json: true,
        },
        (error, response) => {
          if (!error && response.statusCode == 200) {
            if (response.body.status == 'valid') {
              console.log(
                chalk.cyan('[') +
                  chalk.greenBright('+') +
                  chalk.cyan('] ') +
                  chalk.greenBright(email),
              );
            } else {
              console.log(
                chalk.cyan('[') +
                  chalk.redBright('+') +
                  chalk.cyan('] ') +
                  chalk.redBright(email),
              );
            }
          }
        },
      );
    } catch (error) {
      errorMsg();
    }
    await sleep(500);
  });
}

module.exports = mailfinder;
