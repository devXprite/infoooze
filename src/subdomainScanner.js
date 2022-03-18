const request = require('request');
const {
  goBack,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
} = require('./common.js');

const jsdom = require('jsdom');
const chalk = require('chalk');
const { JSDOM } = jsdom;

const subdomainScanner = async (website, showHome = false, i = 1) => {
  website = website || (await input('Your Website'));
  const path = `${process.cwd()}/results/infoooze_subdomainScanner_${currentTimeStamp()}.txt`;
  info(`Results will be saved in `, path);
  //   website = !website.includes('://') ? 'http://' + website : website;

  request(
    `https://www.pagesinventory.com/search/?s=${website}`,
    async (error, response) => {
      if (error) {
        errorMsg();
      } else {
        let responseData = response.body;
        const dom = new JSDOM(responseData);

        dom.window.document
          .querySelectorAll('tr > td:nth-child(1)  a')
          .forEach(async (link, index) => {
            setTimeout(() => {
              index++;
              let subdomain = link.textContent;
              let counter = index <= 9 ? '0' + index : index;
              console.log(
                chalk.white('[') +
                  chalk.hex('#FFA500')(counter) +
                  chalk.white('] ') +
                  chalk.greenBright(subdomain),
              );
              saveTo(path, subdomain);
            }, 250 * index);
          });

        if (
          dom.window.document.querySelectorAll('tr > td:nth-child(1)  a')
            .length == 0
        ) {
          console.log(chalk.redBright('No subdomain found'));
        }
      }
      if (showHome) {
        goBack();
      }
    },
  );
};

module.exports = subdomainScanner;
