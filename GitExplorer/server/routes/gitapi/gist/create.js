let express = require('express');
let router = express.Router();
let auth = require('../getGitHub');

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