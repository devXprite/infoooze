// const > const
// = require( > = require(
// ; > );

const whoisJson = require('whois-json');
const {
  list,
  input,
  info,
  goBack,
  currentTimeStamp,
  saveTo,
} = require('./common.js');

const whois = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));

  const path = `${process.cwd()}/results/infoooze_whois_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);

  var whoisData = await whoisJson(website);
  for (var key in whoisData) {
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
