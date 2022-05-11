const request = require('request');
const {
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
  sleep,
} = require('./common.js');

const jsdom = require('jsdom');
const chalk = require('chalk');
const { JSDOM } = jsdom;

const list = async (counter, subdomain, path) => {
  counter = counter <= 9 ? '0' + counter : counter;

  await sleep(100);

  console.log(
    chalk.white('[') +
      chalk.hex('#FFA500')(counter) +
      chalk.white('] ') +
      chalk.greenBright(subdomain),
  );
  saveTo(path, subdomain);
};

const subdomainScanner = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));
  const path = `${process.cwd()}/results/infoooze_subdomainScanner_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);

  request(
    `https://www.pagesinventory.com/search/?s=${website}`,
    async (error, response) => {
      if (error) {
        errorMsg();
      } else {
        let responseData = response.body;
        let dom = new JSDOM(responseData);
        let subdomainsObj = dom.window.document.querySelectorAll(
          'tr > td:nth-child(1)  a',
        );

        for (var key in subdomainsObj) {
          await list(i++, subdomainsObj[key]['textContent'], path);
        }

        if (
          dom.window.document.querySelectorAll('tr > td:nth-child(1)  a')
            .length == 0
        ) {
          console.log(chalk.redBright('No subdomain found'));
        }
        if (showHome) {
          goBack();
        }
      }
    },
  );
};

module.exports = subdomainScanner;
