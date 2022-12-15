const args = require('args');

const flagOptions = () => {
  // args
  //   .option(['r', 'userrecon'], 'username reconnaissance')
  //   .option(['m', 'mailfinder'], 'Finds email addresss by name')
  //   .option(['u', 'useragent'], 'find browser info')
  //   .option(['w', 'whoislookup'], "find doamin's whois info")
  //   .option(['i', 'instaRecon'], 'find Instagram users info')
  //   .option(['p', 'iplookup'], 'find IP info')
  //   .option(['t', 'portscan'], 'find open ports')
  //   .option(['d', 'domainage'], 'find website Age')
  //   .option(['e', 'headerinfo'], 'find website headers')
  //   .option(['n', 'dnslookup'], 'domain name system lookup')
  //   .option(['g', 'gitrecon'], 'find github user info')
  //   .option(['s', 'subdomain'], 'find subdomains of website')
  //   .option(['x', 'exif'], 'extracts Exif metadata from image')
  //   .option(['a', 'webscan'], 'analyze suspicious URLs')
  //   .option(['l', 'urlexpand'], 'long url of shorten URL')
  //   .option(['c', 'subdomainrecon'], 'find subdomains passively')
  //   .option(['y', 'youtubelookup'], 'find video metadata');

  args.option(['r', 'userrecon'], 'search for a username across multiple social media platforms to gather information on a specific user.')
    .option(['m', 'mailfinder'], 'search for an email address associated with a specific username or domain.')
    .option(['u', 'useragent'], 'quickly and easily identify the browser and device being used by a user.')
    .option(['w', 'whoislookup'], 'find registration information for a specific domain.')
    .option(['i', 'instaRecon'], 'gather information on an Instagram user, such as their posts, followers, and more.')
    .option(['p', 'iplookup'], 'find information on a specific IP address, such as its location and hostname.')
    .option(['t', 'portscan'], 'search for open ports.')
    .option(['d', 'domainage'], 'find out how long a website has been registered and active on the internet.')
    .option(['e', 'headerinfo'], 'view and analyze the HTTP headers of a website.')
    .option(['n', 'dnslookup'], 'view DNS records for a specific domain and see how it is configured.')
    .option(['g', 'gitrecon'], 'gather information on a GitHub user, such as their repositories, contributions, and more.')
    .option(['s', 'subdomain'], 'find and enumerate the subdomains of a given website.')
    .option(['x', 'exif'], 'extract Exif metadata from images, such as camera make and model, date and time, and more.')
    .option(['a', 'webscan'], 'analyze the suspicious URLs.')
    .option(['l', 'urlexpand'], 'expand shortened URLs and see the full destination of a link.')
    .option(['y', 'youtubelookup'], 'view the metadata of a YouTube video, such as the title, description, and tags.');

  args
    .example('infoooze -r YOUR_USERNAME', 'This command will search for the given username on multiple social media platforms.')
    .example('infoooze -w google.com', 'This command will find registration information for the given domain.')
    .example('infoooze -i therock', 'This command will gather information on the given Instagram user.')
    .example('infoooze -p 8.8.8.8', 'This command will find information on the given IP address.')
    .example('infoooze -d google.com', 'This command will find out how long the given website has been registered and active.');

  // args.parse(process.argv, { mainColor: ['cyan'] });
};
module.exports = flagOptions;
