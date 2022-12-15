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

const headerLookup = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website', 'url'));
  const path = `${process.cwd()}/results/infoooze_HeaderLookup_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);
  website = !website.includes('://') ? `http://${website}` : website;

  console.log('\n');

  try {
    const response = await axios.get(website, { timeout: 5000 });
    const responseData = response.headers;

    for (const key in responseData) {
      list(i++, key, responseData[key]);
      saveTo(path, key, responseData[key]);
    }

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
};

module.exports = headerLookup;
