let request = require('supertest');
let app = require('../app');
const Logger = require('./support/elf-logger');
const logger = new Logger('test');

describe('Foo Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('get the foo route', function(done) {
        request(app)
            .get('/foo')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

});
