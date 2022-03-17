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
        'User-Agent': 'nodejs-ipapi-v1.02',
      },
    },
    async function (error, response) {
      if (!error && response.statusCode == 200) {
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
