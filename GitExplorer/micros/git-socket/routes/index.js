var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json('micro home git socket OK!');
});

router.get('/git-socket', (req, res) => {
    res.status(200).json('micro git-socket OK!');
});

router.get('/git-socket/you-rang', (req, res) => {
    res.status(200).json({
            result: 'git-socket success',
            message: 'git-socket, you-rang? I am up and running!'
        }
    );
});


module.exports = router;
