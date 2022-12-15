const { spawn } = require('child_process');
const {
  input, errorMsg, currentTimeStamp, info, goBack,
} = require('./helper');

const subdomainRecon = async (host, showHome = false) => {
  host = host || (await input('Enter your host (example.com):'));

  const path = `${process.cwd()}/results/infoooze_subdomainRecon_${currentTimeStamp()}.txt`;
  info(`Results will be saved in ${path}`);

  const command = spawn('amass', ['enum', '-passive', '-d', host, '-o', path]);
  command.stdout.on('data', (output) => {
    console.log(output.toString());
  });
  command.on('error', (err) => {
    errorMsg(
      'amass might not be installed, try installing it: go install -v github.com/OWASP/Amass/v3/...@master',
    );
  });
};

module.exports = subdomainRecon;
