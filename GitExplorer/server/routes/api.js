/**
 * Created by bcuser on 4/11/17.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');

let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            username: 'charliecalvert',
            token: process.env.TOKEN
        });
    } else {
        gh = new GitHub({
            username: 'charliecalvert',
            password: ''
        });
    }
    return gh;
};

/* GET home page. */
router.get('/user', function(req, res, next) {
    var options = {
        url: 'https://api.github.com/users/efuenzalida52',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });
});

router.get('/foo', function(request, response, next) {
    var message = {'result': 'success', 'foo': 'bar', 'file': 'api.js'};
    console.log('Foo called on server with message:', message);
    response.send(message);
});

router.get('/gist-test', function(request, response) {
    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My third gist',
        files: {
            'file1.txt': {
                content: 'Arent three gists great!'
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        console.log('RETRIEVED', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function(err) {
        console.log('rejected!', err, bar);
        console.log('Bar', bar);
        response.status(500).send({'result': err});
    });
});

router.get('/Notifications', (req, res) => {

    let getGitHub = function() {
        let gh;
        if (true) {
            gh = new GitHub({
                username: 'charliecalvert',
                token: process.env.TOKEN
            });
        } else {
            gh = new GitHub({
                username: 'charliecalvert',
                password: ''
            });
        }
        return gh;
    };

    let gh = getGitHub();
    const me = gh.getUser();
    me.listNotifications(function(err, notifications) {
        if (!err) {
            console.log('NOTIFICATION SUCCESS CSC');
            res.status(200).json(notifications);
        } else {
            console.log('NOTIFICATION ERROR CSC');
            res.status(500).json(err);
        }
    });

});

module.exports = router;
