#!/usr/bin/env node

import chalk from 'chalk';
import colors from 'colors';
import args from 'args'
import chalkAnimation from 'chalk-animation';
import home from './src/home.js';
import { sleep } from './src/common.js';
import userrecon from './src/userRecon.js';
import mailfinder from './src/mailFinder.js';
import useragent from './src/userAgent.js';
import instaRecon from './src/instaRecon.js';
import whois from './src/whoIs.js';
import IPlookup from './src/ipLookup.js';
import dnsLookup from './src/dnsLookup.js';
import portScanner from './src/portScanner.js';
import headerLookup from './src/headerLookup.js';

async function welcome() {
  const glitchTitle = chalkAnimation.glitch('Welcome to Dhanush!\n');
  await sleep(3000);
  glitchTitle.stop();
}

args
  .option('Userrecon', 'username reconnaissance')
  .option('Mailfinder ', 'find email with specelse ific name')
  .option('useragent ', 'find browser info')
  .option('Whoislookup', "find doamin's whois info")
  .option('instaRecon', 'find Instagram users info')
  .option('IPLookup', 'find IP info')
  .option('PortsScan', 'find open ports')
  .option('domainAge', 'find website Age')
  .option('HeaderInfo', 'find website headers')
  .option('DNSLookup', 'domain name system lookup');

const flags = args.parse(process.argv);

if (flags.Userrecon) {
  testFunction(flags.Userrecon);
} else if (flags.Mailfinder) {
  testFunction(flags.Mailfinder);
} else if (flags.useragent) {
  testFunction(flags.useragent);
} else if (flags.Whoislookup) {
  testFunction(flags.Whoislookup);
} else if (flags.instaRecon) {
  instaRecon(flags.instaRecon);
} else if (flags.IPLookup) {
  testFunction(flags.IPLookup);
} else if (flags.PortsScan) {
  testFunction(flags.PortsScan);
} else if (flags.domainAge) {
  testFunction(flags.domainAge);
} else if (flags.HeaderInfo) {
  testFunction(flags.HeaderInfo);
} else if (flags.DNSLookup) {
  testFunction(flags.DNSLookup);
} else {
  await welcome();
  await home();
}

function testFunction(x) {
  console.log('your arg value is ' + x);
}
