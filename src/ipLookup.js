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

const IPlookup = async (ip, showHome = false) => {
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

    Object.entries(IPData).forEach(([key, value], i) => {
      list(i + 1, key, value);
      saveTo(path, key, value);
    });

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
};

module.exports = IPlookup;
