
import Axios from axios;
import fileDownload from 'js-file-download';


var fileDownload = require('js-file-download');
fileDownload(data, 'filename.csv');


function download(url: string, filename: string) {
  Axios.get(url, {
    responseType: 'blob',
  }).then(res => {
    fileDownload(res.data, filename);
  });
}

download()
