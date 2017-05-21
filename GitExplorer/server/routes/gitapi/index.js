let express = require('express');
let router = express.Router();

router.use('/gist', require('./gist'));
router.use('/user', require('./user'));
router.use('/notifications', require('./notifications'));

router.get('/', (req, res) => {
    res.status(200).send('OK!');
});

module.exports = router;
