const args = require('args');

const flagOptions = () => {
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
    .option(['a', 'webscan'], 'analyze suspicious URLs')
    .option(['l', 'urlexpand'], 'long url of shorten URL')
    .option(['c', 'subdomainrecon'], 'find subdomains passively');

  args
    .example(
      'infoooze -r YOUR_USERNAME',
      'find username on diffrent social networks',
    )
    .example('infoooze -w google.com', "find doamin's whois info")
    .example('infoooze -i therock', 'find instagram username info')
    .example('infoooze -p 1.1.1.1', 'find IP address details');

  // args.parse(process.argv, { mainColor: ['cyan'] });
};
module.exports = flagOptions;
