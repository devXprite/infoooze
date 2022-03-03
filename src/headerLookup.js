import request from 'request';
import { list, goBack, input, errorMsg } from './common.js';

const headerLookup = async (i = 1) => {
  var website = await input('Your Website');
  if (!website.includes('://')) {
    website = 'http://' + website;
  }
  console.log('\n');
  request(website, async (error, response, body) => {
    if (error) {
      errorMsg();
    } else {
      var responseData = response.headers;
      for (var key in responseData) {
        await list(i++, key, responseData[key]);
      }
    }
    goBack();
  });
};

export default headerLookup;
