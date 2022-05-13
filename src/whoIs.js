const whoisJson = require('whois-json');
const {
  list,
  input,
  info,
  goBack,
  currentTimeStamp,
  saveTo,
} = require('./common');

const whois = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));

  const path = `${process.cwd()}/results/infoooze_whois_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  const whoisData = await whoisJson(website);
  for (const key in whoisData) {
    if (!whoisData[key].includes('REDACTED')) {
      await list(i++, key, whoisData[key]);
      saveTo(path, key, whoisData[key]);
    }
  }
  if (showHome) {
    goBack();
  }
};

module.exports = whois;
