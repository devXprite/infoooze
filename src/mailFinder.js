const request = require('request');
const chalk = require('chalk');

const { list, goBack, input, errorMsg } = require('./common.js');
const key = require('./secret.js');

async function mailfinder(username, showHome = false) {
  username = username || (await input('Your Username'));
  username.replace(' ', '');
  const domainList = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const keysList = ['Bearer0c6ad1fd-f753-4628-8c0a-7968e722c6c7'];

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
              console.log('['.cyan + '+'.green + '] '.cyan + email.green);
            } else {
              console.log(
                '['.cyan + '+'.brightRed + '] '.cyan + email.brightRed,
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
