const {Client} = require('pg');
//const { clearScreenDown } = require('readline');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "#A..18SH",
    database: "testNodejs"
})

client.connect();

client.query('select * from name', (err, result) => {
    if(!err) {
        console.log(result.rows);
    }
    client.end();
});