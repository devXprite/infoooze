const chalk = require('chalk');

const { default: axios } = require('axios');
const {
  list, goBack, input, errorMsg, exit,
} = require('./helper');
const key = require('./secret');

async function useragent(useragentString, showHome = false, i = 1) {
  useragentString = useragentString || (await input('Your UserAgent String'));

  try {
    const response = await axios.get(
      `http://api.userstack.com/detect?access_key=${key(
        'ua',
      )}&format=1&ua=${useragentString}`,
      {
        timeout: 5000,
      },
    );

    const { data } = response;

    list(i++, 'Type', data.type);
    list(i++, 'OS Name', data.os.name);
    list(i++, 'OS Code', data.os.code);
    list(i++, 'OS family', data.os.family);
    list(i++, 'OS family vendor', data.os.family_vendor);
    list(i++, 'Is Mobile', data.device.is_mobile_device);
    list(i++, 'Device Type', data.device.type);
    list(i++, 'Device brand', data.device.brand);
    list(i++, 'Browser', data.browser.name);
    list(i++, 'Browser Version', data.browser.version);
    list(i++, 'Browser Engine', data.browser.engine);
    list(i++, 'Crawler', data.crawler.is_crawler);
    list(i++, 'Category', data.crawler.category);

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
}

module.exports = useragent;
