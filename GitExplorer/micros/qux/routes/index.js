var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json('micro home qux OK!');
});

router.get('/qux', (req, res) => {
    res.status(200).json('qux OK!');
});

router.get('/qux/foo', (req, res) => {
    res.status(200).json('qux foo OK!');
});

router.get('/qux/bar', (req, res) => {
    res.status(200).json('qux bar OK!');
});

router.get('/qux/you-rang', (req, res) => {
    res.status(200).json({
        result: 'qux success',
        message: 'qux you-rang? I am up and running!'
        }
    );
});

module.exports = router;
