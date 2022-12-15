/* eslint-disable no-useless-escape */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
const { default: axios } = require('axios');

const {
  list,
  input,
  errorMsg,
  currentTimeStamp,
  info,
  saveTo,
  goBack,
  exit,
} = require('./helper');

const getYoutubeVideoId = (url) => {
  const regExp = /^.*(youtu\.be\/|v\/|shorts\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  }
  throw new Error('Invalid Video URL!');
};

const youtubeLookup = async (videoUrl, showHome = false, i = 1) => {
  videoUrl = videoUrl || (await input('Youtube Video URL', 'url'));
  const path = `${process.cwd()}/results/infoooze_YoutubeLookup_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const videoId = getYoutubeVideoId(videoUrl);
    const videoData = (
      await axios.get(
        `https://youtube-lookup.vercel.app/api/video/${videoId}?print=pretty&verbose=false`,
      )
    ).data;

    for (const key in videoData) {
      const value = typeof videoData[key] == 'string'
        ? videoData[key].replace(/^\s*\n/gm, '')
        : videoData[key];
      list(i++, key, value);
      saveTo(path, key, value);
    }

    if (!showHome) exit();
  } catch (error) {
    errorMsg(error.message || undefined);
  }
  if (showHome) {
    goBack();
  }
};

module.exports = youtubeLookup;
