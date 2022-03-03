//   htmlEntities = require('html-entities').XmlEntities;

import os from 'os';
import { decode } from 'html-entities';

const log = console.log.bind(console);

const DELIMITER = ':';

var stripHTMLEntitites = function (rawData) {
  // var entities = new htmlEntities();
  return decode(rawData);
};

//Checks whether a delimiter followed by a space common in this result
var getCommonDelimiterForm = function (rawData, delimiter) {
  var delimiterPattern = new RegExp(delimiter + '\\S+', 'g');
  var delimiterWSpacePattern = new RegExp(delimiter + ' ', 'g');
  var delimiterMatches = rawData.match(delimiterPattern) || [];
  var delimiterWSpaceMatches = rawData.match(delimiterWSpacePattern) || [];

  if (delimiterMatches.length > delimiterWSpaceMatches.length) {
    return delimiter;
  }
  return delimiter + ' ';
};

var parseRawData = function (rawData) {
  var result = {};

  rawData = stripHTMLEntitites(rawData);
  rawData = rawData.replace(/:\s*\r\n/g, ': ');
  var lines = rawData.split('\n');
  var delimiter = getCommonDelimiterForm(rawData, DELIMITER);

  lines.forEach(function (line) {
    line = line.trim();

    // colon space because that's the standard delimiter - not ':' as that's used in eg, http links
    if (line && line.includes(delimiter)) {
      var lineParts = line.split(DELIMITER);

      // 'Greater than' since lines often have more than one colon, eg values with URLs
      if (lineParts.length >= 2) {
        var key = lineParts[0],
          value = lineParts.splice(1).join(DELIMITER).trim();

        // If multiple lines use the same key, combine the values
        if (key in result) {
          result[key] = `${result[key]} ${value}`;
          return;
        }
        result[key] = value;
      }
    }
  });

  return result;
};

export default parseRawData;
