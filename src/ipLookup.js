/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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

const IPlookup = async (ip, showHome = false, i = 1) => {
  ip = ip || (await input('Your IP', 'ip'));
  const path = `${process.cwd()}/results/infoooze_IPLookup_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`, {
      timeout: 5000,
      headers: {
        'User-Agent': 'nodejs-ipapi-v1.02',
      },
    });
    const IPData = response.data;

    for (const key in IPData) {
      list(i++, key, IPData[key]);
      saveTo(path, key, IPData[key]);
    }

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
};

module.exports = IPlookup;
