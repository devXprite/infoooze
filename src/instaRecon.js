/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const chalk = require('chalk');
const open = require('open');

const { default: axios } = require('axios');
const {
  list,
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
  exit,
} = require('./helper');

async function instaRecon(username, showHome = false, i = 1) {
  username = username || (await input('Your Username', 'username'));
  const path = `${process.cwd()}/results/infoooze_InstaRecon_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const response = await axios.get(
      `https://www.instagram.com/${username}/?__a=1&__d=dis`,
      {
        timeout: 5000,
        headers: {
          'x-ig-www-claim': '0',
          'sec-ch-ua-mobile': '?1',
          'user-agent':
            'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Mobile Safari/537.36',
          'sec-ch-ua-platform': 'Android',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-language': 'en-US,en;q=0.9',
        },
      },
    );

    const IGData = response.data.graphql.user;
    for (const key in IGData) {
      if (typeof IGData[key] != 'object') {
        list(i++, key, IGData[key]);
        saveTo(path, key, IGData[key]);
      }
    }

    console.log('\n');
    const showDP = await input('View Profile Picture? [Y/N]');
    if (showDP == 'y' || showDP == 'Y') {
      open(IGData.profile_pic_url_hd);
    }

    if (!showHome) exit();
  } catch (error) {
    if (error.response && error.response.status == 404) {
      errorMsg('User not found');
    } else if (error.response && error.response.status == 401) {
      errorMsg('Please wait a few minutes before you try again.');
    } else {
      errorMsg();
    }
  }

  if (showHome) goBack();
}

module.exports = instaRecon;
