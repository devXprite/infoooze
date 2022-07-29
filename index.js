#!/usr/bin/env node

const args = require('args');
const chalkAnimation = require('chalk-animation');
const { home, banner } = require('./src/home');
const { sleep } = require('./src/helper');
const userRecon = require('./src/userRecon');
const mailFinder = require('./src/mailFinder');
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
const scanUrl = require('./src/scanUrl');
const flagOptions = require('./src/flagOptions');
const subdomainRecon = require('./src/subdomainRecon');

flagOptions();

const flags = args.parse(process.argv);
const optionKey = Object.keys(flags)[1];

switch (optionKey) {
  case 'userrecon':
    banner();
    userRecon(flags.userrecon);
    break;

  case 'mailfinder':
    banner();
    mailFinder(flags.mailfinder);
    break;

  case 'useragent':
    banner();
    useragent(flags.useragent);
    break;

  case 'whoislookup':
    banner();
    whois(flags.whoislookup);
    break;

  case 'webscan':
    banner();
    scanUrl(flags.webscan);
    break;

  case 'instaRecon':
    banner();
    instaRecon(flags.instaRecon);
    break;

  case 'iplookup':
    banner();
    IPlookup(flags.iplookup);
    break;

  case 'portscan':
    banner();
    portScanner(flags.portscan);
    break;

  case 'domainage':
    banner();
    domainAge(flags.domainage);
    break;

  case 'headerinfo':
    banner();
    headerLookup(flags.headerinfo);
    break;

  case 'urlexpand':
    banner();
    urlExpander(flags.urlexpand);
    break;

  case 'subdomain':
    banner();
    subdomainScanner(flags.subdomain);
    break;

  case 'gitrecon':
    banner();
    gitRecon(flags.gitrecon);
    break;

  case 'exif':
    banner();
    exifMetadata(flags.exif);
    break;

  case 'dnslookup':
    banner();
    dnsLookup(flags.dnslookup);
    break;

  case 'subdomainrecon':
    banner();
    subdomainRecon(flags.subdomainrecon);
    break;

  default:
    (async function () {
      const glitchTitle = chalkAnimation.glitch('\nStarting Infoooze\n');
      await sleep(1500);
      glitchTitle.stop();
      await home();
    }());
    break;
}
