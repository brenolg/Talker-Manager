const express = require('express');
const { readTalker } = require('../utils/readAndWriteFiles');

const routerTalker = express.Router();

routerTalker.get('/', async (_req, res) => {
    const talkers = await readTalker();
    if (!talkers) return res.status(200).json([]); 
     return res.status(200).json(talkers); 
});

module.exports = routerTalker;