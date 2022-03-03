import whoisJson from 'whois-json';
import { list, goBack, input } from './common.js';

const whois = async (i = 1) => {
  var website = await input('Your Website');
  var whoisData = await whoisJson(website);
  for (var key in whoisData) {
    if (!whoisData[key].includes('REDACTED')) {
      await list(i++, key, whoisData[key]);
    }
  }
  goBack();
};

export default whois;
