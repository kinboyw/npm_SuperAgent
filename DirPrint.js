const fs = require('fs');
const path = require('path');

function recur(dir, list) {
    list = list || [];
    const files = fs.readdirSync(dir);
    files.forEach(item => {
        var path = dir + "/" + item;
        if (fs.statSync(path).isDirectory()) {
            path = path + "/";
            list = recur(path, list);
            list.push(path);
        } else {
            list.push(path);
        }
    });
    return list;
}

module.exports = {
    recur: recur
}