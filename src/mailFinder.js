/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const chalk = require('chalk');

const { default: axios } = require('axios');
const {
  goBack,
  input,
  currentTimeStamp,
  info,
  saveTo,
  exit,
  print,
} = require('./helper');

const key = require('./secret');

async function mailfinder(username, showHome = false) {
  username = (username || (await input('Your Username')))
    .replace(/\s/g, '')
    .split('@')[0];

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

  const emailList = domainList.map((domain) => `${username}@${domain}`);

  await Promise.allSettled(
    emailList.map(
      (email) => new Promise((resolve, reject) => {
        axios
          .get(
            `https://isitarealemail.com/api/email/validate?email=${email}`,
            {
              headers: {
                Authorization: key('em'),
              },
              timeout: 5000,
            },
          )
          .then((response) => {
            if (response.data.status == 'valid') {
              print('greenBright', '+', email);
              saveTo(path, 'valid', email);
            } else {
              print('redBright', '-', email);
              saveTo(path, 'invalid', email);
            }
          })
          .catch((error) => {
            print('redBright', '-', email);
          })
          .then(() => {
            resolve();
          });
      }),
    ),
  );
  if (showHome) {
    goBack();
  } else {
    exit();
  }
}

module.exports = mailfinder;
