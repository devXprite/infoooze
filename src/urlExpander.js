const { default: axios } = require('axios');
const {
  goBack, input, errorMsg, info, list, exit,
} = require('./helper');

const urlExpander = async (website, showHome = false) => {
  website = website || (await input('Your Short Url', 'url'));
  website = !website.includes('://') ? `http://${website}` : website;

  try {
    const response = await axios.get(website, {
      timeout: 5000,
      followAllRedirects: true,
    });
    if (website.includes(response.request.res.responseUrl)) {
      info(`${website} is already a long url.`);
    } else {
      list('+', 'Expanded Url', response.request.res.responseUrl);
    }

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) goBack();
};

module.exports = urlExpander;
