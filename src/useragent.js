import request from 'request';
import chalk from 'chalk';

import { list, goBack, input } from './common.js';

export async function useragent() {
  var useragent = await input('Your UserAgent');
  var key = 'a6f7ff508268b5e184b6ea2b8daeaab8';
  console.log('\n');

  try {
    request(
      {
        url: `http://api.userstack.com/detect?access_key=${key}&format=1&ua=${useragent}`,
        timeout: 5000,
        json: true,
      },
      async function (error, response) {
        if (!error && response.statusCode == 200) {
          let data = response.body;
          var i = 1;

          await list(i++, 'Type', data.type);
          await list(i++, 'OS Name', data.os.name);
          await list(i++, 'OS Code', data.os.code);
          await list(i++, 'OS family', data.os.family);
          await list(i++, 'OS family vendor', data.os.family_vendor);
          await list(i++, 'Is Mobile', data.device.is_mobile_device, 'bool');
          await list(i++, 'Device Type', data.device.type);
          await list(i++, 'Device brand', data.device.brand);
          await list(i++, 'Browser', data.browser.name);
          await list(i++, 'Browser Version', data.browser.version);
          await list(i++, 'Browser Engine', data.browser.engine);
          await list(i++, 'Crawler', data.crawler.is_crawler, 'bool');
          await list(i++, 'Category', data.crawler.category);
        } else {
          console.log(chalk.redBright('Something went wrong!'));
        }
        goBack();
      },
    );
  } catch (error) {
    console.log(chalk.redBright('Something went wrong!'));
  }
}

export default useragent;
