const fs = require('fs');

const readDiscography = (path) => {
    let content = fs.readFileSync(path, 'utf8');
    let discography = [], read = true, startIndex = 0, endIndex = 0;
    while (read) {
        endIndex = content.indexOf('\n', endIndex);
        if (endIndex !== -1) {
            let line = content.substring(startIndex, endIndex);
            let whiteSpace = line.indexOf(" ");
            discography.push({
                year: parseInt(line.substring(0, whiteSpace)),
                name: line.substring(whiteSpace + 1)
            });
            endIndex++;
            startIndex = endIndex;
        } else {
            read = false;
        }
    }
    discography.sort((a, b) => {
        return a.year - b.year || a.name.localeCompare(b.name);
    });
    return discography;
};

module.exports = { readDiscography };