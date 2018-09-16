const fs = require('fs');
var experience = function (req, res, next) {
    fs.readFile('./data/experience.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
}
module.exports = experience;