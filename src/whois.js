import whoisJson from 'whois-json';
import { list, goBack, input } from './common.js';

const whois = async () => {
  var i = 1;
  var website = await input('Your Website');
  var results = await whoisJson(website, { follow: 3, verbose: true });
  var whoisData = results[0]['data'];

  for (var key in whoisData) {
    await list(i++, key, whoisData[key]);
  }

  goBack();
};

export default whois;
