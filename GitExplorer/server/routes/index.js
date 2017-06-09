let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
    res.sendfile(index.html);
});

router.use('/foo', require('./foo'));

module.exports = router;
