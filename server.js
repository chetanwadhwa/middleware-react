'use strict';

require('babel-core/register');  
var React = require('react');  
var express = require('express');  
var path = require('path');  
var bodyParser = require('body-parser');

var app = express();  
app.use(bodyParser.json());  
app.use('/', function(req, res) {  
    alert('gbhjn');
    try {
        var view = path.resolve('./views/' + req.query.module);
                console.log(view);
        var component = require(view);

        var props = req.body || null;
        console.log(props);
        res.status(200).send(
            React.renderToString(
                React.createElement(component, props)
            )
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000);  
console.log('Server is Up and Running at Port : 3000');
