var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json('micro home markdown OK!');
});

router.get('/markdown', (req, res) => {
    res.status(200).json('micro markdown OK!');
});

router.get('/markdown/you-rang', (req, res) => {
    res.status(200).json({
            result: 'markdown success',
            message: 'markdown, you-rang? I am up and running!'
        }
    );
});

module.exports = router;
