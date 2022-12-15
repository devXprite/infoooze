/* eslint-disable no-new */
const { ExifImage } = require('exif');
const {
  list,
  input,
  info,
  goBack,
  currentTimeStamp,
  saveTo,
  errorMsg,
} = require('./helper');

const exifMetadata = async (image, showHome = false, i = 1) => {
  image = image || (await input('Your Image path'));

  const path = `${process.cwd()}/results/infoooze_exif_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    new ExifImage({ image }, (error, response) => {
      if (error) {
        errorMsg(error.message);
      } else {
        Object.keys(response).forEach(async (exifData) => {
          Object.keys(response[exifData]).forEach(async (key) => {
            if (typeof response[exifData][key] != 'object') {
              await list(i++, key, response[exifData][key]);
              saveTo(path, key, response[exifData][key]);
            }
          });
        });
      }
    });
  } catch (error) {
    errorMsg(error.message);
  }
};

module.exports = exifMetadata;
