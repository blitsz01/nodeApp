const fs = require('fs');
var about = function (req, res, next) {
    fs.readFile('./data/about.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
}
module.exports = about;