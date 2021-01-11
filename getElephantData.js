const http = require('https'); 
const fs = require('fs');

const file = fs.createWriteStream("elephantData.json");
const request = http.get("https://elephant-api.herokuapp.com/elephants", function(response) {
  response.pipe(file);
});