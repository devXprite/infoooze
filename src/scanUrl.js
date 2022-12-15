const chalk = require('chalk');
const { sentenceCase } = require('sentence-case');
const { default: axios } = require('axios');
const key = require('./secret');
const {
  input,
  info,
  currentTimeStamp,
  saveTo,
  errorMsg,
  goBack,
  sleep,
  exit,
} = require('./helper');

const list = async (counter, key, value) => {
  counter = counter <= 9 ? `0${counter}` : counter;
  value = sentenceCase(value);

  value = value == 'Unrated' ? chalk.yellowBright(value) : value;
  value = value == 'Clean' ? chalk.greenBright(value) : value;
  value = value == 'Phishing' ? chalk.redBright(value) : value;
  value = value == 'Malicious' ? chalk.redBright(value) : value;

  key = sentenceCase(key);
  await sleep(120);

  console.log(
    chalk.white('[')
      + chalk.hex('#FFA500')(counter)
      + chalk.white('] ')
      + chalk.whiteBright(`${key} : `)
      + value,
  );
};

const bs = (data) => Buffer.from(data).toString('base64').replace(/[=]/g, '');

const scanUrl = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website', 'url'));

  const path = `${process.cwd()}/results/infoooze_websiteScan_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const response = await axios.get(
      `https://www.virustotal.com/api/v3/urls/${bs(website)}`,
      {
        headers: {
          Accept: 'application/json',
          'x-apikey': key('vt'),
        },
        timeout: 5000,
      },
    );

    const analyseResult = response.data.data.attributes.last_analysis_results;

    for (const key in analyseResult) {
      await list(i++, key, analyseResult[key].result);
      await saveTo(path, key, analyseResult[key].result);
    }

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
};

module.exports = scanUrl;
