import request from 'request';
import { goBack, input, errorMsg, info, list } from './common.js';

const urlExpander = async (website, showHome = false) => {
  website = website || (await input('Your Short Url'));
  website = !website.includes('://') ? 'http://' + website : website;
  var afterRedirect = request(
    {
      url: website,
      timeout: 5000,
      followAllRedirects: true,
    },
    async function (error, response) {
      if (!error) {
        if (website.includes(afterRedirect.uri.hostname)) {
          info(`${website} is already a long url.`);
        } else {
          list('+', 'Expanded Url', afterRedirect.uri.href);
        }
      } else {
        errorMsg();
      }
      if (showHome) {
        goBack();
      }
    },
  );
};

export default urlExpander;
