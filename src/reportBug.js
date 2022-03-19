const open = require('open');
const os = require('os');
const pkginfo = require('pkginfo')(module, 'version');
const version = module.exports.version;

var body = `
### Describe the bug
A clear and concise description of what the bug is.

### Screenshots
If applicable, add screenshots to help explain your problem.

### System Information

**Infoooze Version** : ${version}
**Node Version** : ${process.version}
**OS Type** : ${os.type()}
**OS Version** : ${os.release()}
**OS Plateform** : ${os.platform()}
**Current Directory** : ${process.cwd()}
`;

// console.log(body);
reportBug = () => {
  open(
    `https://github.com/7ORP3DO/infoooze/issues/new?assignees=&labels=bug&title=&body=${encodeURIComponent(
      body,
    )}`,
  );
};

module.exports = reportBug;
