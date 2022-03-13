import request from 'request';
import Colors from 'colors';
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

const IPlookup = async (ip, showHome = false, i = 1) => {
  ip = ip || (await input('Your IP'));
  const path = `${process.cwd()}/results/infoooze_IPLookup_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);
  request(
    {
      url: `https://ipapi.co/${ip}/json/`,
      timeout: 5000,
      headers: {
        'User-Agent': 'nodejs-ipapi-v1.02',
      },
      json: true,
    },
    async function (error, response) {
      if (!error && response.statusCode == 200) {
        let IPData = response.body;
        for (var key in IPData) {
          await list(i++, key, IPData[key]);
          saveTo(path, key, IPData[key]);
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

export default IPlookup;
