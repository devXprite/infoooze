#!/usr/bin/env node

const args = require('args');
const chalkAnimation = require('chalk-animation');
const { home, banner } = require('./src/home');
const { sleep } = require('./src/helper');
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
const scanUrl = require('./src/scanUrl');
const flagOptions = require('./src/flagOptions');

const welcome = async () => {
  const glitchTitle = chalkAnimation.glitch('\nWelcome to Infoooze\n');
  await sleep(2000);
  glitchTitle.stop();
};

flagOptions();

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
} else if (flags.webscan) {
  banner();
  scanUrl(flags.webscan);
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
  }());
}
