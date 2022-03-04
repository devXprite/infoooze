#!/usr/bin/env node

import chalk from 'chalk';
import colors from 'colors';
import args from 'args';
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

function testFunction(x) {
  console.log('your arg value is ' + x);
}

args
  .option(['r', 'userrecon'], 'username reconnaissance')
  .option(['m', 'mailfinder'], 'find email with specelse ific name')
  .option(['u', 'useragent'], 'find browser info')
  .option(['w', 'whoislookup'], "find doamin's whois info")
  .option(['i', 'instaRecon'], 'find Instagram users info')
  .option(['p', 'iplookup'], 'find IP info')
  .option(['t', 'portscan'], 'find open ports')
  .option(['d', 'domainage'], 'find website Age')
  .option(['e', 'headerinfo'], 'find website headers')
  .option(['n', 'dnslookup'], 'domain name system lookup');

const flags = args.parse(process.argv);

if (flags.userrecon) {
  userrecon(flags.userrecon);
} else if (flags.mailfinder) {
  mailfinder(flags.mailfinder);
} else if (flags.useragent) {
  useragent(flags.useragent);
} else if (flags.whoislookup) {
  whois(flags.whoislookup);
} else if (flags.instaRecon) {
  instaRecon(flags.instaRecon);
} else if (flags.iplookup) {
  IPlookup(flags.iplookup);
} else if (flags.portscan) {
  portScanner(flags.portscan);
} else if (flags.domainage) {
  testFunction(flags.domainage);
} else if (flags.headerinfo) {
  headerLookup(flags.headerinfo);
} else if (flags.dnslookup) {
  dnsLookup(flags.dnslookup);
} else {
  await welcome();
  await home();
}
