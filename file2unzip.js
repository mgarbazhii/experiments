const fs = require('fs');
const unzipper = require('unzipper') 

fs.createReadStream('data.zip')
  .pipe(unzipper.ParseOne())
  .pipe(fs.createWriteStream('./data-win1251.csv'));