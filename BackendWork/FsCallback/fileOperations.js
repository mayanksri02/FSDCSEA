const fs = require('fs');
fs.writeFile('data.txt', 'This is an example!  ', (err) => {
    if (err) {
        console.log(err);
    } 
    else {
        console.log('File successfully created! ');
    }}
)

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})