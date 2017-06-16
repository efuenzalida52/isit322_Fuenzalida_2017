let express = require('express');
let router = express.Router();
const requester = require('request');

router.get('/', (req, res) => {
    res.status(200).json('git api OK!');
});

router.get('/qux/you-rang', function(request, response) {
    console.log('derp');
    requester('http://localhost:30032/qux/you-rang').pipe(response);
});

router.get('/markdown/you-rang', function(request, response) {
    requester('http://localhost:30052/markdown/you-rang').pipe(response);
});

router.get('/git-user/you-rang', function(request, response) {
    requester('http://localhost:30062/git-user/you-rang').pipe(response);
});

router.get('/git-socket/you-rang', function(request, response) {
    requester('http://localhost:30072/git-socket/you-rang').pipe(response);
});

router.get('/foo', function(request, response, next) {
    var message = {'result': 'success', 'foo': 'bar', 'file': 'notifications.js'};
    console.log('Foo called on server with message:', message);
    response.send(message);
});

module.exports = router;
