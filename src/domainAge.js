const moment = require('moment');
const whoisJson = require('whois-json');
const {
  list,
  input,
  info,
  goBack,
  currentTimeStamp,
  saveTo,
} = require('./common.js');

const domainAge = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));

  const path = `${process.cwd()}/results/infoooze_domainAge_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);

  var whoisData = await whoisJson(website);
  for (var key in whoisData) {
    if (key.includes('date') || key.includes('Date')) {
      if (!key.includes('Database')) {
        await list(
          '+',
          key,
          moment(whoisData[key]).format('Do MMMM YYYY h:mm:ss a'),
        );
        saveTo(
          path,
          key,
          moment(whoisData[key]).format('Do MMMM YYYY h:mm:ss a'),
        );
      }
    }
    if (key.includes('creationDate')) {
      await list(
        '+',
        'Website Age',
        moment(whoisData['creationDate']).fromNow(true),
      );
      saveTo(
        path,
        'Website Age',
        moment(whoisData['creationDate']).fromNow(true),
      );
    }
  }
  if (showHome) {
    goBack();
  }
};
module.exports = domainAge;
