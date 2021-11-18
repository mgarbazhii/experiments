const fs = require('fs');
const iconv = require('iconv-lite');

const fileCsv1251 = 'data-win1251.csv'
const fileCsvUtf8 = 'data.csv'

fs.createReadStream(fileCsv1251)
    .pipe(iconv.decodeStream('win1251'))
    .pipe(iconv.encodeStream('utf8'))
    .pipe(fs.createWriteStream('./'+fileCsvUtf8))
    