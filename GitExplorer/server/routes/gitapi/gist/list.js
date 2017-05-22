let express = require('express');
let router = express.Router();
let auth = require('../getGitHub');

router.get('/', (req, res) => {

    let me = auth().getUser();
    me.listGists((err, gists) => {
        if (!err) {
            res.status(200).json(gists);
        } else {
            res.status(500).json(err);
        }
    });

});

// router.get('/', (req, res) => {
//     const me = auth().getUser();
//     me.listGists()
//         .then(function({data}) {
//             console.log('USER PROMISE', data);
//             const results = data.map((gist) => {
//                 return {
//                     description: gist.description,
//                     git_pull_url: gist.git_pull_url,
//                     html_url: gist.html_url,
//                     id: gist.id,
//                     url: gist.url
//                 }
//             });
//             res.status(200).send({
//                 'count': results.length,
//                 'result': results
//             });
//         }).catch(function(err) {
//         console.log('USER Promise Rejected', err);
//         res.status(500).send({'result': err});
//     });
// });

module.exports = router;
