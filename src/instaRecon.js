const request = require('request');
const chalk = require('chalk');
const open = require('open');

const {
  list,
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
} = require('./common.js');

async function instaRecon(username, showHome = false, i = 1) {
  var username = username || (await input('Your Username'));
  const path = `${process.cwd()}/results/infoooze_InstaRecon_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);

  request(
    {
      url: `https://www.instagram.com/${username}/?__a=1`,
      timeout: 5000,
      json: true,
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
    async function (error, response) {
      if (!error && response.statusCode == 200) {
        try {
          let IGData = response.body.graphql.user;
          for (var key in IGData) {
            if (typeof IGData[key] != 'object') {
              await list(i++, key, IGData[key]);
              saveTo(path, key, IGData[key]);
            }
          }
          console.log('\n');
          var showDP = await input('View Profile Picture? [Y/N]');
          if (showDP == 'y' || showDP == 'Y') {
            open(IGData['profile_pic_url_hd']);
          }
        } catch (error) {
          errorMsg('Something went wrong! Please try again after some time.');
          errorMsg('If you are using VPN, try to turn off your vpn.');
        }
      } else if (!error && response.statusCode == 404) {
        errorMsg('User not found.');
      } else {
        errorMsg();
      }
      if (showHome) {
        goBack();
      }
    },
  );
}

module.exports = instaRecon;
