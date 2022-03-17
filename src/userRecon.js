const request = require('request');
const chalk = require('chalk');

const { sleep, input, currentTimeStamp, info, saveTo } = require('./common.js');

async function userrecon(username, showHome = false) {
  username = username || (await input('Your Username'));

  var urlList = [
    `https://facebook.com/${username}`,
    `https://instagram.com/${username}`,
    `https://twitter.com/${username}`,
    `https://youtube.com/${username}`,
    `https://vimeo.com/${username}`,
    `https://github.com/${username}`,
    `https://plus.google.com/${username}`,
    `https://pinterest.com/${username}`,
    `https://flickr.com/people/${username}`,
    `https://vk.com/${username}`,
    `https://about.me/${username}`,
    `https://disqus.com/${username}`,
    `https://bitbucket.org/${username}`,
    `https://flipboard.com/@${username}`,
    `https://medium.com/@${username}`,
    `https://hackerone.com/${username}`,
    `https://keybase.io/${username}`,
    `https://buzzfeed.com/${username}`,
    `https://slideshare.net/${username}`,
    `https://mixcloud.com/${username}`,
    `https://soundcloud.com/${username}`,
    `https://badoo.com/en/${username}`,
    `https://imgur.com/user/${username}`,
    `https://open.spotify.com/user/${username}`,
    `https://pastebin.com/u/${username}`,
    `https://wattpad.com/user/${username}`,
    `https://canva.com/${username}`,
    `https://codecademy.com/${username}`,
    `https://last.fm/user/${username}`,
    `https://blip.fm/${username}`,
    `https://dribbble.com/${username}`,
    `https://en.gravatar.com/${username}`,
    `https://foursquare.com/${username}`,
    `https://creativemarket.com/${username}`,
    `https://ello.co/${username}`,
    `https://cash.me/${username}`,
    `https://angel.co/${username}`,
    `https://500px.com/${username}`,
    `https://houzz.com/user/${username}`,
    `https://tripadvisor.com/members/${username}`,
    `https://kongregate.com/accounts/${username}`,
    `https://${username}.blogspot.com/`,
    `https://${username}.tumblr.com/`,
    `https://${username}.wordpress.com/`,
    `https://${username}.devianart.com/`,
    `https://${username}.slack.com/`,
    `https://${username}.livejournal.com/`,
    `https://${username}.newgrounds.com/`,
    `https://${username}.hubpages.com`,
    `https://${username}.contently.com`,
    `https://steamcommunity.com/id/${username}`,
    `https://www.wikipedia.org/wiki/User:${username}`,
    `https://www.freelancer.com/u/${username}`,
    `https://www.dailymotion.com/${username}`,
    `https://www.etsy.com/shop/${username}`,
    `https://www.scribd.com/${username}`,
    `https://www.patreon.com/${username}`,
    `https://www.behance.net/${username}`,
    `https://www.goodreads.com/${username}`,
    `https://www.gumroad.com/${username}`,
    `https://www.instructables.com/member/${username}`,
    `https://www.codementor.io/${username}`,
    `https://www.reverbnation.com/${username}`,
    `https://www.designspiration.net/${username}`,
    `https://www.bandcamp.com/${username}`,
    `https://www.colourlovers.com/love/${username}`,
    `https://www.ifttt.com/p/${username}`,
    `https://www.trakt.tv/users/${username}`,
    `https://www.okcupid.com/profile/${username}`,
    `https://www.trip.skyscanner.com/user/${username}`,
    `http://www.zone-h.org/archive/notifier=${username}`,
  ];

  urlList.forEach((url, index) => {
    setTimeout(() => {
      request(
        {
          url: url,
          timeout: 5000,
        },
        function (error, response, body) {
          if (error) {
            console.log(
              '['.cyan + chalk.redBright('---') + '] '.cyan + url.brightRed,
            );
          } else {
            if (response.statusCode == 200) {
              console.log(
                '['.cyan +
                  chalk.greenBright(response.statusCode) +
                  '] '.cyan +
                  chalk.greenBright(url),
              );
            } else {
              console.log(
                '['.cyan +
                  chalk.redBright(response.statusCode) +
                  '] '.cyan +
                  url.brightRed,
              );
            }
          }
        },
      );
    }, index * 500);
  });
}

module.exports = userrecon;
