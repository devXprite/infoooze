const whoisJson = require('whois-json');
const {
  list,
  input,
  info,
  goBack,
  currentTimeStamp,
  saveTo,
  exit,
  errorMsg,
} = require('./helper');

const whois = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));

  const path = `${process.cwd()}/results/infoooze_whois_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const whoisData = await whoisJson(website);
    for (const key in whoisData) {
      if (!whoisData[key].includes('REDACTED')) {
        await list(i++, key, whoisData[key]);
        saveTo(path, key, whoisData[key]);
      }
    }
  } catch (error) {
    errorMsg();
  }

  if (showHome) {
    goBack();
  } else {
    exit();
  }
};

module.exports = whois;
