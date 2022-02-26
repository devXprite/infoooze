import request from 'request';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import PromptSync from 'prompt-sync';
import home from './home.js';

const prompt = PromptSync();
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));
var i = 1;

async function log(key, value) {
  var value = value || 'n/a';
  await sleep(300);
  console.log(
    chalk.greenBright('[') +
      chalk.cyan(i++) +
      chalk.greenBright('] ') +
      chalk.cyan(key + ' : ') +
      chalk.greenBright(value),
  );
}

export async function useragent() {
  // console.log(' --------------------');
  var useragent = prompt(` ${'>'.cyan} ${'Your Useragent'.bold} : `);
  var key = 'a6f7ff508268b5e184b6ea2b8daeaab8';
  console.log('\n');

  try {
    request(
      {
        url: `http://api.userstack.com/detect?access_key=${key}&format=1&ua=${useragent}`,
        timeout: 5000,
        json: true,
      },
      async function (error, response) {
        if (!error && response.statusCode == 200) {
          let data = response.body;

          await log('Type', data.type);
          await log('OS Name', data.os.name);
          await log('OS Code', data.os.code);
          await log('OS family', data.os.family);
          await log('OS family vendor', data.os.family_vendor);
          await log('Is Mobile', data.device.is_mobile_device);
          await log('Device Type', data.device.type);
          await log('Device brand', data.device.brand);
        } else {
          console.log(chalk.redBright('Something went wrong!'));
        }
        prompt('\npress enter to go back...'.cyan.italic);
        home();
      },
    );
  } catch (error) {
    console.log(chalk.redBright('Something went wrong!'));
  }
}

export default useragent;
