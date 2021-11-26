const fs = require('fs')
const csv=require('csvtojson');

const csvFilePath='data.csv'
const fileout='data.json'

const readStream=fs.createReadStream(csvFilePath);
const writestream = fs.createWriteStream(fileout);

readStream
  .pipe(csv({
  delimiter:";",
}))
  .pipe(writestream);