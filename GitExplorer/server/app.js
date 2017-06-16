let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

//let gitApi = require('./routes/gitapi/');
let user = require('./routes/gitapi/user');
let index = require('./routes/index');
let app = express();
//let index = require('./routes/index');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/gitapi/user', user);

/*app.use((req, res, next) => {
    if (req.path.indexOf('/you-rang') > 0) {
        res.status(200).json({
            result: 'app success',
            message: 'app, i am up and running'
        });
    } else {
        next();
    }
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    'use strict';
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    'use strict';
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    console.log(err);
    res.status(500).json(err);
});

module.exports = app;
