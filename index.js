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

const welcome = async () => {
  const glitchTitle = chalkAnimation.glitch('\nWelcome to Infoooze\n');
  await sleep(2000);
  glitchTitle.stop();
};

flagOptions();

const flags = args.parse(process.argv);


switch (flags) {
  case flags.userrecon:
    banner();
    userRecon(flags.userrecon);
    break;
  
  case flags.mailfinder:
    banner();
    mailFinder(flags.mailfinder);
    break;
  
  case flags.useragent:
    banner();
    useragent(flags.useragent);
    break;
  
  case flags.whoislookup:
    banner();
    whois(flags.whoislookup);
    break;
  
  case flags.webscan:
    banner();
    scanUrl(flags.webscan);
    break;
  
  case flags.instaRecon:
    banner();
    instaRecon(flags.instaRecon);
    break;
  
  case flags.iplookup:
    banner();
    IPlookup(flags.iplookup);
    break;
  
  case flags.portscan:
    banner();
    portScanner(flags.portscan);
    break;
  
  case flags.domainage:
    banner();
    domainAge(flags.domainage);
    break;
  
  case flags.headerinfo:
    banner();
    headerLookup(flags.headerinfo);
    break

  case flags.urlexpand:
    banner();
    urlExpander(flags.urlexpand);

  case flags.subdomain:
    banner();
    subdomainScanner(flags.subdomain);
    break;
  
  case flags.gitrecon:
    banner();
    gitRecon(flags.gitrecon);
    break;

  case flags.exif:
    banner();
    exifMetadata(flags.exif);
    break;
  
  case flags.dnslookup:
    banner();
    dnsLookup(flags.dnslookup);
    break;

  default:
    (async function () {
      await welcome();
      await home();
    }());
    break;
}


