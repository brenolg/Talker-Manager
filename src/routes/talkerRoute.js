const express = require('express');
const { readTalker } = require('../utils/readAndWriteFiles');

const routerTalker = express.Router();

routerTalker.get('/', async (_req, res) => {
    const talkers = await readTalker();
    if (!talkers) return res.status(200).json([]); 
     return res.status(200).json(talkers); 
});

routerTalker.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talkers = await readTalker();
    const findId = talkers.find((talker) => talker.id === Number(id));
    if (!findId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    return res.status(200).json(findId);
});

module.exports = routerTalker;