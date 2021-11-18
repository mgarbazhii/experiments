const fs = require('fs');
const unzipper = require('unzipper') 

const fileZip = 'data.zip'
const fileCsv = 'data-win1251.csv'

fs.createReadStream(fileZip)
  .pipe(unzipper.ParseOne())
  .pipe(fs.createWriteStream('./'+fileCsv));