const fs = require('fs/promises');

const readTalker = async () => {
    try {
        const arrayTalker = await fs.readFile('src/talker.json', 'utf-8');
        const arrayJsonTalker = JSON.parse(arrayTalker);
        return arrayJsonTalker;
    } catch (error) {
        return console.log(`Arquivo nãos encontrado ${error}`);
    }
};

module.exports = { readTalker };