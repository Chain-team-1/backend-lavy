const https = require('https');

https.get('https://elephant-api.herokuapp.com/elephants', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data);
    });
})

.on('error', (error) => {
    console.log(error);
});