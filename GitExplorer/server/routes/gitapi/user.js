let express = require('express');
let router = express.Router();
let request = require('request');

router.get('/', function(req, res, next) {
    console.log('USER CALLED');
    let options = {
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

module.exports = router;
