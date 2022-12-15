const chalk = require('chalk');

const { default: axios } = require('axios');
const {
  list,
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
  exit,
} = require('./helper');

const headersList = {
  Accept: '*/*',
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
};

const gitRecon = async (username, showHome = false, i = 1) => {
  username = username || (await input('Enter Github Username', 'username'));
  const path = `${process.cwd()}/results/infoooze_GitRecon_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Accept: '*/*',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
        },
      },
    );
    const { data } = response;

    for (const key in data) {
      if (!key.includes('documentation_url')) {
        list(i++, key, data[key]);
        saveTo(path, key, data[key]);
      }
    }

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
};

module.exports = gitRecon;
