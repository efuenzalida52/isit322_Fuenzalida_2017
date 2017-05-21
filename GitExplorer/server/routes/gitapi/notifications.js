let express = require('express');
let router = express.Router();
let auth = require('./getGitHub');

router.get('/', (req, res) => {
    let gh = auth();
    let me = gh.getUser();
    me.listNotifications(function(err, notifications) {
        if (!err) {
            res.status(200).json(notifications);
        } else {
            res.status(500).json(err);
        }
    });
});

module.exports = router;
