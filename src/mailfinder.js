import request from 'request';
import chalk from 'chalk';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

export async function mailfinder() {
  var username = prompt(` ${'>'.cyan} ${'Your Username'.bold} : `);
  username.replace(' ', '');

  const domainList = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const keysList = ['Bearer0c6ad1fd-f753-4628-8c0a-7968e722c6c7'];
  
  domainList.forEach(async (domain) => {
    let email = `${username}@${domain}`;
    try {
      request(
        {
          url: `https://isitarealemail.com/api/email/validate?email=${email}`,
          headers: {
            Authorization: 'Bearer0c6ad1fd-f753-4628-8c0a-7968e722c6c7',
          },
          timeout: 5000,
          json: true,
        },
        (error, response) => {
          if (!error && response.statusCode == 200) {
            if (response.body.status == 'valid') {
              console.log('['.cyan + '+'.green + '] '.cyan + email.green);
            } else {
              console.log(
                '['.cyan + '+'.brightRed + '] '.cyan + email.brightRed,
              );
            }
          }
        },
      );
    } catch (error) {
      console.log('somehing went wrong!');
    }
    await sleep(500);
  });
}

export default mailfinder;
