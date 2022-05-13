const open = require('open');
const os = require('os');
const pkg = require('../package.json');

const body = `
### Describe the bug
A clear and concise description of what the bug is.

### Screenshots
If applicable, add screenshots to help explain your problem.

### System Information

**Infoooze Version** : ${pkg.version}
**Node Version** : ${process.version}
**OS Type** : ${os.type()}
**OS Version** : ${os.release()}
**OS Plateform** : ${os.platform()}
**Current Directory** : ${process.cwd()}
`;

// console.log(body);
const reportBug = () => {
  open(
    `https://github.com/7ORP3DO/infoooze/issues/new?assignees=&labels=bug&title=&body=${encodeURIComponent(
      body,
    )}`,
  );
};

module.exports = reportBug;
