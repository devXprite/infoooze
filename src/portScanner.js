const portscanner = require('portscanner');
const chalk = require('chalk');
const { goBack, input, errorMsg } = require('./common');

const portsList = {
  21: 'FTP',
  22: 'SSH',
  23: 'Telnet',
  25: 'SMTP',
  43: 'Whois',
  53: 'DNS',
  68: 'DHCP',
  80: 'HTTP',
  110: 'POP3',
  115: 'SFTP',
  119: 'NNTP',
  123: 'NTP',
  139: 'NetBIOS',
  143: 'IMAP',
  161: 'SNMP',
  220: 'IMAP3',
  389: 'LDAP',
  443: 'SSL',
  1521: 'Oracle SQL',
  2049: 'NFS',
  3306: 'mySQL',
  5800: 'VNC',
  8080: 'HTTP',
};

async function checkPort(port, website) {
  portscanner.checkPortStatus(port, website, (error, status) => {
    if (!error) {
      if (status == 'open') {
        console.log(
          ` ${chalk.cyan('-')} ${chalk.greenBright(port)} \t${chalk.greenBright(
            status,
          )} \t${chalk.greenBright(portsList[port])}`,
        );
      } else {
        console.log(
          ` ${chalk.cyan('-')} ${chalk.redBright(port)} \t${chalk.redBright(
            status,
          )} \t${chalk.redBright(portsList[port])}`,
        );
      }
    }
  });
}

const portScanner = async (website, showHome = false, i = 0) => {
  website = website || (await input('Your Website'));
  console.log('\n');

  Object.keys(portsList).forEach((port, index) => {
    setTimeout(() => {
      checkPort(port, website);
    }, index * 500);
  });
};

module.exports = portScanner;
