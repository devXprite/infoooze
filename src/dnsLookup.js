const { default: axios } = require('axios');
const request = require('request');

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
  website = website || (await input('Your Website'));
  const path = `${process.cwd()}/results/infoooze_dnsLookup_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  axios
    .get(`https://api.hackertarget.com/dnslookup/?q=${website}`, { timeout: 5000 })
    .then(async (response) => {
      const dnsData = response.data;

      dnsData.split('\n').map(async (e, i) => {
        list(i++, e.split(' : ')[0], e.split(' : ')[1]);
        saveTo(path, e.split(' : ')[0], e.split(' : ')[1]);
      });

      await sleep();

      if (showHome) {
        goBack();
      } else {
        exit();
      }
    }).catch((error) => {
      errorMsg();
    });
};

module.exports = dnsLookup;
