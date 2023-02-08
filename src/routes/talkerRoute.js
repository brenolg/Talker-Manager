const express = require('express');
const fs = require('fs/promises');
const { readTalker } = require('../utils/readAndWriteFiles');
const validateToken = require('../middlewares/validateToken');
const {
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,
    } = require('../middlewares/validateTalker');

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

routerTalker.post('/',
    validateToken,
    validateName,
    validateAge,
    validateTalk,
    validateWatchedAt,
    validateRate,

    async (req, res) => {
        const talkers = await readTalker();
        const newTalker = { ...req.body };
        newTalker.id = talkers.length + 1;
        const newTalkers = [...talkers, newTalker];
         try {
        await fs.writeFile('src/talker.json', JSON.stringify(newTalkers), 'utf-8');
             res.status(201).json(newTalker);
               } catch (error) {
        return console.log(`Arquivo nãos encontrado ${error}`);
    }
});

module.exports = routerTalker;