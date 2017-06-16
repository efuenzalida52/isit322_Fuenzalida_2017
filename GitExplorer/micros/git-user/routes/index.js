let express = require('express');
let router = express.Router();

let request = require('request');
let GitHub = require('github-api');

router.get('/', (req, res) => {
    res.status(200).json('micro gituser OK!');
});

router.get('/git-user', (req, res) => {
    res.status(200).json('micro markdown OK!');
});

router.get('/git-user/you-rang', (req, res) => {
    res.status(200).json({
            result: 'git-user success',
            message: 'git-user, i am you-rang I am up and running!'
        }
    );
});


router.get('/user', (req, res) => {

    request({
        url: 'https://api.github.com/users/efuenzalida52',
        headers: {
            'User-Agent': 'request'
        }
    }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.status(200).json({error: error, response: response, body: body});
    });

});

router.get('/notifications', (req, res) => {

    let getGitHub = function() {
        let gh;
        // GitHub Token with Gist permissions
        let gitToken = process.env.GHTOKEN;
        if (gitToken !== undefined && gitToken !== '') {
            gh = new GitHub({
                token: gitToken
            });
        } else {
            throw ('Need valid GHTOKEN definition! Please export GHTOKEN=[TOKEN HERE]');
        }
        return gh;
    };

    let me = getGitHub().getUser(); // no user specified defaults to the user for whom credentials were provided
    me.listNotifications(function (err, notifications) {
        if (!err) {
            res.status(200).json(notifications);
        } else {
            res.status(500).json(err);
        }
    });

});

module.exports = router;
