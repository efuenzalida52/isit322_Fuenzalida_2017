let express = require('express');
let router = express.Router();

router.use('/create', require('./create'));
router.use('/get-basic-list', require('./list'));

router.get('/', (req, res) => {
    res.status(200).send('OK!');
});

module.exports = router;
