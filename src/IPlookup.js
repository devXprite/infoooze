import request from 'request';
import Colors from 'colors';
import chalk from 'chalk';

import { list, goBack, input } from './common.js';

const IPlookup = async () => {
  var ip = await input('Your IP');
  console.log('\n');

  request(
    {
      url: `https://ipapi.co/${ip}/json/`,
      timeout: 5000,
      headers: {
        'User-Agent': 'nodejs-ipapi-v1.02',
      },
      json: true,
    },
    async function (error, response) {
      if (!error && response.statusCode == 200) {
        let IPData = response.body;
        var i = 1;
        for (var key in IPData) {
          await list(i++, key, IPData[key]);
        }
      } else {
        console.log(chalk.redBright('Something went wrong!'));
      }
      goBack();
    },
  );
};

export default IPlookup;
