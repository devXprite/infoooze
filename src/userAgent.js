const request = require('request');
const chalk = require('chalk');

const {
  list, goBack, input, errorMsg,
} = require('./helper');
const key = require('./secret');

async function useragent(useragent, showHome = false, i = 1) {
  useragent = useragent || (await input('Your UserAgent String'));

  request(
    {
      url: `http://api.userstack.com/detect?access_key=${key(
        'ua',
      )}&format=1&ua=${useragent}`,
      timeout: 5000,
      json: true,
    },
    async (error, response) => {
      if (!error && response.statusCode == 200) {
        const data = response.body;

        try {
          await list(i++, 'Type', data.type);
          await list(i++, 'OS Name', data.os.name);
          await list(i++, 'OS Code', data.os.code);
          await list(i++, 'OS family', data.os.family);
          await list(i++, 'OS family vendor', data.os.family_vendor);
          await list(i++, 'Is Mobile', data.device.is_mobile_device);
          await list(i++, 'Device Type', data.device.type);
          await list(i++, 'Device brand', data.device.brand);
          await list(i++, 'Browser', data.browser.name);
          await list(i++, 'Browser Version', data.browser.version);
          await list(i++, 'Browser Engine', data.browser.engine);
          await list(i++, 'Crawler', data.crawler.is_crawler);
          await list(i++, 'Category', data.crawler.category);
        } catch (error) {
          errorMsg();
        }
      } else {
        errorMsg();
      }
      if (showHome) {
        goBack();
      }
    },
  );
}

module.exports = useragent;
