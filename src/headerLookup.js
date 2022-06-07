const request = require('request');
const {
  list,
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
} = require('./helper');

const headerLookup = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));
  const path = `${process.cwd()}/results/infoooze_HeaderLookup_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);
  website = !website.includes('://') ? `http://${website}` : website;

  console.log('\n');
  request(website, async (error, response, body) => {
    if (error) {
      errorMsg();
    } else {
      const responseData = response.headers;
      for (const key in responseData) {
        await list(i++, key, responseData[key]);
        saveTo(path, key, responseData[key]);
      }
    }
    if (showHome) {
      goBack();
    }
  });
};

module.exports = headerLookup;
