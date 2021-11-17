const fs = require('fs');
const iconv = require('iconv-lite');

fs.createReadStream('data-win1251.csv')
    .pipe(iconv.decodeStream('win1251'))
    .pipe(iconv.encodeStream('utf8'))
    .pipe(fs.createWriteStream('./data.csv'))
    