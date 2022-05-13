const request = require('request');
const chalk = require('chalk');

const {
  goBack,
  input,
  currentTimeStamp,
  info,
  saveTo,
} = require('./common');

const key = require('./secret');

async function mailfinder(username, showHome = false) {
  username = username || (await input('Your Username'));
  username = username.replace(/\s/g, '');

  const domainList = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'googlemail.com',
    'yandex.com',
    'aol.com',
  ];

  const path = `${process.cwd()}/results/infoooze_mailFinder_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);
  domainList.forEach(async (domain, index) => {
    setTimeout(() => {
      const email = `${username}@${domain}`;

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
                  chalk.cyan('[')
                    + chalk.greenBright('+')
                    + chalk.cyan('] ')
                    + chalk.greenBright(email),
                );
                saveTo(path, 'valid', email);
              } else {
                console.log(
                  chalk.cyan('[')
                    + chalk.redBright('+')
                    + chalk.cyan('] ')
                    + chalk.redBright(email),
                );
                saveTo(path, 'invalid', email);
              }
            } else {
              console.log(
                chalk.cyan('[')
                    + chalk.redBright('+')
                    + chalk.cyan('] ')
                    + chalk.redBright(email),
              );
              saveTo(path, 'invalid', email);
            }
          },
        );
      } catch (error) {
        /* n/a */
      }
    }, index * 500);
  });
}

module.exports = mailfinder;
