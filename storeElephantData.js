const fs = require('fs');

let data = 'body';
fs.write('elephantData.json', data, (err) => {
    if (err) throw err;
    console.log('saved');
});