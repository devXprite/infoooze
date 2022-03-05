import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

import userrecon from './userRecon.js';
import mailfinder from './mailFinder.js';
import useragent from './userAgent.js';
import instaRecon from './instaRecon.js';
import whois from './whoIs.js';
import IPlookup from './ipLookup.js';
import dnsLookup from './dnsLookup.js';
import portScanner from './portScanner.js';
import headerLookup from './headerLookup.js';
import urlExpander from './urlExpander.js';

import { sleep, input } from './common.js';

var list = async (counter, name, description) => {
  await sleep(200);
  counter = counter <= 9 ? '0' + counter : counter;
  console.log(
    ` ${chalk.cyan(counter)} ${chalk.whiteBright(name)} \t ${chalk.blackBright(
      description,
    )}`,
  );
};

const takeOption = async () => {
  var option = await input('Your Option ');

  if (option == '1' || option == '01') {
    userrecon();
  } else if (option == '2' || option == '02') {
    mailfinder();
  } else if (option == '3' || option == '03') {
    useragent();
  } else if (option == '4' || option == '04') {
    whois();
  } else if (option == '5' || option == '05') {
    instaRecon();
  } else if (option == '6' || option == '06') {
    IPlookup();
  } else if (option == '7' || option == '07') {
    portScanner();
  } else if (option == '8' || option == '08') {
    domainAge();
  } else if (option == '9' || option == '09') {
    headerLookup();
  } else if (option == '10') {
    dnsLookup();
  } else if (option == '12') {
    urlExpander();
  } else if (option == 'exit' || option == '00' || option == '0') {
    console.log('bye!'.cyan);
  } else {
    takeOption();
  }
};

const home = async (animationDelay = 1500, i = 1) => {
  console.clear();
  chalkAnimation.neon(
    `
         |.---------------.|
         ||               ||
         ||   -._ .-.     ||
         ||   -._| | |    ||
         ||   -._|"|"|    ||
         ||   -._|.-.|    ||
         ||_______________||
         /.-.-.-.-.-.-.-.-.\\
        /.-.-.-.-.-.-.-.-.-.\\
       /.-.-.-.-.-.-.-.-.-.-.\\
      /______/__________\\___o_\\ 
      \\_______________________/
      
    `,
    '2',
  );

  await sleep(animationDelay);
  console.log(`      A tool by ${'7ORP3DO'.cyan} & ${'Biswajeet'.cyan} `);
  await sleep(animationDelay);

  console.log(
    '' + ' Choose number or type exit fir exiting '.bgWhite.black + '\n\n',
  );
  await list(i++, 'Userrecon', 'username reconnaissance', true);
  await list(i++, 'Mailfinder ', 'find email with specific name', true);
  await list(i++, 'Useragent ', 'find browser info', true);
  await list(i++, 'Whoislookup', "find doamin's whois info", true);
  await list(i++, 'InstaRecon', 'find Instagram users info', true);
  await list(i++, 'IP Lookup', 'find IP info', true);
  await list(i++, 'Ports Scan', 'find open ports', true);
  await list(i++, 'Domain Age', 'find website Age', true);
  await list(i++, 'Header Info', 'find website headers', true);
  await list(i++, 'DNS Lookup', 'domain name system lookup', true);
  await list(i++, 'Git Recon', 'find github user info', true);
  await list(i++, 'Expand Url', 'long url of shorten urls', true);
  console.log('');
  await list('00', 'exit', 'exit and close tool');

  console.log('\n');
  takeOption();
};

export default home;
