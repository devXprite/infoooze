#!/usr/bin/env node

const chalk = require('chalk');
const args = require('args');
const chalkAnimation = require('chalk-animation');
const { home, banner } = require('./src/home');
const { sleep } = require('./src/common');
const userrecon = require('./src/userRecon');
const mailfinder = require('./src/mailFinder');
const useragent = require('./src/userAgent');
const instaRecon = require('./src/instaRecon');
const whois = require('./src/whoIs');
const IPlookup = require('./src/ipLookup');
const dnsLookup = require('./src/dnsLookup');
const portScanner = require('./src/portScanner');
const headerLookup = require('./src/headerLookup');
const urlExpander = require('./src/urlExpander');
const gitRecon = require('./src/gitRecon');
const domainAge = require('./src/domainAge');
const subdomainScanner = require('./src/subdomainScanner');
const exifMetadata = require('./src/exif');

async function welcome() {
  const glitchTitle = chalkAnimation.glitch('\nWelcome to Infoooze\n');
  await sleep(3000);
  glitchTitle.stop();
}

args
  .option(['r', 'userrecon'], 'username reconnaissance')
  .option(['m', 'mailfinder'], 'find email with specific name')
  .option(['u', 'useragent'], 'find browser info')
  .option(['w', 'whoislookup'], "find doamin's whois info")
  .option(['i', 'instaRecon'], 'find Instagram users info')
  .option(['p', 'iplookup'], 'find IP info')
  .option(['t', 'portscan'], 'find open ports')
  .option(['d', 'domainage'], 'find website Age')
  .option(['e', 'headerinfo'], 'find website headers')
  .option(['n', 'dnslookup'], 'domain name system lookup')
  .option(['g', 'gitrecon'], 'find github user info')
  .option(['s', 'subdomain'], 'find subdomains of website')
  .option(['x', 'exif'], 'extracts Exif metadata from image')
  .option(['l', 'urlexpand'], 'long url of shorten URL');

const flags = args.parse(process.argv);

if (flags.userrecon) {
  banner();
  userrecon(flags.userrecon);
} else if (flags.mailfinder) {
  banner();
  mailfinder(flags.mailfinder);
} else if (flags.useragent) {
  banner();
  useragent(flags.useragent);
} else if (flags.whoislookup) {
  banner();
  whois(flags.whoislookup);
} else if (flags.instaRecon) {
  banner();
  instaRecon(flags.instaRecon);
} else if (flags.iplookup) {
  banner();
  IPlookup(flags.iplookup);
} else if (flags.portscan) {
  banner();
  portScanner(flags.portscan);
} else if (flags.domainage) {
  banner();
  domainAge(flags.domainage);
} else if (flags.headerinfo) {
  banner();
  headerLookup(flags.headerinfo);
} else if (flags.urlexpand) {
  banner();
  urlExpander(flags.urlexpand);
} else if (flags.subdomain) {
  banner();
  subdomainScanner(flags.subdomain);
} else if (flags.gitrecon) {
  banner();
  gitRecon(flags.gitrecon);
} else if (flags.exif) {
  banner();
  exifMetadata(flags.exif);
} else if (flags.dnslookup) {
  banner();
  dnsLookup(flags.dnslookup);
} else {
  (async function () {
    await welcome();
    await home();
  })();
}
