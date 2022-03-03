import request from 'request';
import chalk from 'chalk';

import { list, goBack, input, errorMsg } from './common.js';

const dnsLookup = async (i = 1) => {
  var website = await input('Your Website');
  console.log('\n');

  request(
    {
      url: `https://api.hackertarget.com/dnslookup/?q=${website}`,
      timeout: 5000,
      json: true,
    },
    async function (error, response) {
      if (!error && response.statusCode == 200) {
        let dnsData = response.body;

        dnsData.split('\n').forEach(async function (e) {
          list(i++, e.split(' : ')[0], e.split(' : ')[1]);
        });
      } else {
        errorMsg();
      }
      goBack();
    },
  );
};

export default dnsLookup;
