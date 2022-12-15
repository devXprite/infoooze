const { default: axios } = require('axios');

const {
  list,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
  sleep,
  exit,
  goBack,
} = require('./helper');

const dnsLookup = async (website, showHome = false) => {
  website = website || (await input('Your Website', 'url'));
  const path = `${process.cwd()}/results/infoooze_dnsLookup_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const response = await axios.get(
      `https://api.hackertarget.com/dnslookup/?q=${website}`,
      { timeout: 5000 },
    );
    const dnsData = response.data;

    dnsData.split('\n').forEach((e, i) => {
      list(i++, e.split(' : ')[0], e.split(' : ')[1]);
      saveTo(path, e.split(' : ')[0], e.split(' : ')[1]);
    });

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
};

module.exports = dnsLookup;
