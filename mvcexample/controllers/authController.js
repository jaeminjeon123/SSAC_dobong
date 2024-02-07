const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = userModel.findUserByUsernameAndPassword(username, password);
    if (user) {
        req.session.loggedin = true;
        req.session.username = username;
        res.json({ loggedIn: true });
    } else {
        res.json({ loggedIn: false, message: '아이디 또는 패스워드 오류' });
    }    
});


router.get('/home', (req, res) => {
    if (req.session.loggedin) {
        res.send(`Welcome back, ${req.session.username}!`);
    } else {
        res.send('Please login to view this page!');
    }
});

module.exports = router;
