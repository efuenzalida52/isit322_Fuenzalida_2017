var express = require('express');
var router = express.Router();

let request = require('request');
let GitHub = require('github-api');

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

router.get('/foo', (req, res) => {
    res.status(200).json({'result': 'success', 'foo': 'bar', 'file': 'api.js'});
});

router.get('/gist-test', (req, res) => {

    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'gist test',
        files: {
            'file1.txt': {
                content: 'OMGists!'
            }
        }
    }).then(function ({data}) {
        // Promises Promises!
        let createdGist = data;
        return gist.read();
    }).then(function ({data}) {
        let retrievedGist = data;
        console.log('Retrieved: ', retrievedGist);
        res.status(200).json({'result': retrievedGist});
        // do interesting stuff
    }).catch(function (err) {
        console.log('Rejected: ', err);
        res.status(500).json({'result': err});
    });

});

router.get('/gist-list', (req, res) => {

    let me = getGitHub().getUser(); // no user specified defaults to the user for whom credentials were provided
    me.listGists(function (err, gists) {
        if (!err) {
            res.status(200).json(gists.map((value) => {
                return {
                    url: value.url,
                    id: value.id,
                    description: value.description,
                    login: value.owner.login,
                    type: value.owner.type
                }
            }));
        } else {
            res.status(500).json(err);
        }
    });

});

router.get('/', function(request, response) {
    const gh = auth();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My GitExplorer gist',
        files: {
            'GitExplorer.txt': {
                content: 'How does my code work?!'
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
        console.log('rejected!', err);
        // console.log('Bar', bar);
        response.status(500).send({'result': err});
    });
});

module.exports = router;
