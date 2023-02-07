const express = require('express');
const crypto = require('crypto');

const routerLogin = express.Router();

routerLogin.post('/', async (req, res) => {
    console.log('body', req.body);
    const token = crypto.randomBytes(8).toString('hex');
    res.status(200).json({ token });
});

module.exports = routerLogin;