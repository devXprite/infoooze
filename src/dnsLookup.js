const request = require('request');

const {
  list,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
} = require('./helper');

const dnsLookup = async (website, i = 1) => {
  website = website || (await input('Your Website'));
  const path = `${process.cwd()}/results/infoooze_dnsLookup_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  request(
    {
      url: `https://api.hackertarget.com/dnslookup/?q=${website}`,
      timeout: 5000,
      json: true,
    },
    async (error, response) => {
      if (!error && response.statusCode == 200) {
        const dnsData = response.body;

        dnsData.split('\n').forEach(async (e) => {
          list(i++, e.split(' : ')[0], e.split(' : ')[1]);
          saveTo(path, e.split(' : ')[0], e.split(' : ')[1]);
        });
      } else {
        errorMsg();
      }
    },
  );
};

module.exports = dnsLookup;
