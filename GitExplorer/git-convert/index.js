var debug = require('debug')('git-convert');
var Curl = require('node-libcurl').Curl;
var fs = require("fs");

var url = 'https://api.github.com/users/efuenzalida52';

function downloadAndProcess() {

    debug('Downloading url ' + url + ' to ./git-user.json ...');

    curlData(url).then(function (body) {

        debug(body);

        writeFile('./git-user.json', body).then(function () {

            debug('Downloaded');
            debug('Processing ...');

            readFile('./git-user.json').then(function (rawJson) {

                var jsonObject = JSON.parse(rawJson);
                var output = [];
                for (var property in jsonObject) {
                    if (jsonObject.hasOwnProperty(property)) {
                        output.push({
                            id: property,
                            label: property + '-name',
                            type: 'paragraph',
                            sample: 'login-unknown'
                        });
                    }
                }
                debug(output);

                writeFile('./field-definitions.json', JSON.stringify(output, null, 4)).then(function () {

                    debug('Saved results as field-definitions.js');

                });

            });

        });

    });

}

function curlData(url) {
    return new Promise(function (resolve, reject) {

        var curl = new Curl();
        curl.setOpt('URL', url);
        curl.setOpt('FOLLOWLOCATION', true);
        curl.setOpt('USERAGENT', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13)');

        curl.on('end', function (statusCode, body) {
            resolve(body);
            this.close();
        });

        curl.on('error', function (err) {
            curl.close.bind(curl);
            reject(err);
        });
        curl.perform();

    });
}

function writeFile(fileName, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(fileName, data, function (err) {
            if (!err) {
                resolve()
            } else {
                reject(err);
            }
        });
    });
}

function readFile(fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, result) {
            if (!err) {
                resolve(result.toString())
            } else {
                reject(err);
            }
        });
    });
}

downloadAndProcess();
