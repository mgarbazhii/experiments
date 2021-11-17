const csv=require('csvtojson')
const fs=require('fs')

const csvFilePath='data.csv'
csv({
    delimiter:";",
})
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);

})   
