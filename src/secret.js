const _ = require('lodash');

const itarm = [
  'Bearer0c6ad1fd-f753-4628-8c0a-7968e722c6c7', 
  'bearer ba1d350e-38d3-44c1-a4cc-0492c6a324c1',
  'bearer 00c72048-00c4-49dd-be0e-3d0f89bca982',
  'bearer b6c9486c-7d23-4d78-a7e9-1e69cc2b276d'
];

const us = ['a6f7ff508268b5e184b6ea2b8daeaab8'];

const wcms = [
  'wn40tn3bgjidktyifzzsomc1g0lx9hemf8a0lwq9yg2f0tbiubu8o3v6e0v5xcqxj85ky2',
];

const virustotal = [
  '76fa9a36c1777590ce60f276cf0a7606de95808938972c139483785339be215e'
]

var key = (service) => {
  if (service == 'ua') {
    return _.sample(us);
  } else if (service == 'em') {
    return _.sample(itarm);
  } else if (service == 'cms') {
    return _.sample(wcms);
  } else if (service == 'vt') {
    return _.sample(virustotal);
  }
};

module.exports = key;