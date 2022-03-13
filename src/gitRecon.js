import request from 'request';
import chalk from 'chalk';

import {
  list,
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
} from './common.js';

const headersList = {
  Accept: '*/*',
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
};

const gitRecon = async (username, showHome = false, i = 1) => {
  username = username || (await input('Enter Github Username'));
  const path = `${process.cwd()}/results/infoooze_GitRecon_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);
  request(
    {
      url: `https://api.github.com/users/${username}`,
      timeout: 5000,
      json: true,
      headers: headersList,
    },
    async function (error, response) {
      if (!error && response.statusCode == 200) {
        let data = response.body;
        for (var key in data) {
          if (!key.includes('documentation_url')) {
            await list(i++, key, data[key]);
            saveTo(path, key, data[key]);
          }
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

export default gitRecon;
