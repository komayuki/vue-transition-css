
const fs = require('fs');
fs.createReadStream('dist/css/vue-transition.css')
  .pipe(fs.createWriteStream('docs/vue-transition.css'));
