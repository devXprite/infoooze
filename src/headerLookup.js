import request from 'request';
import {
  list,
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
} from './common.js';

const headerLookup = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));
  const path = `${process.cwd()}/results/toolName_HeaderLookup_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);
  website = !website.includes('://') ? 'http://' + website : website;

  console.log('\n');
  request(website, async (error, response, body) => {
    if (error) {
      errorMsg();
    } else {
      var responseData = response.headers;
      for (var key in responseData) {
        await list(i++, key, responseData[key]);
        saveTo(path, key, responseData[key]);
      }
    }
    goBack();
  });
};

export default headerLookup;
