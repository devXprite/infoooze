import whoisJson from 'whois-json';
import {
  list,
  goBack,
  input,
  info,
  currentTimeStamp,
  saveTo,
} from './common.js';

const whois = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));

  const path = `${process.cwd()}/results/toolName_whois_${currentTimeStamp()}.txt`;
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

export default whois;
