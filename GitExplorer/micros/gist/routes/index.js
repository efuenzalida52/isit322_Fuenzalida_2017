var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json('micro home gist OK!');
});

router.get('/gist', (req, res) => {
    res.status(200).json('gist OK!');
});

router.get('/gist/you-rang', (req, res) => {
    res.status(200).json({
            result: 'gist success',
            message: 'gist, i am you-rang I am up and running!'
        }
    );
});

module.exports = router;
