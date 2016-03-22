'use strict';

//<requires>
var express = require('express');
//</requires>

//<api>
function Api (name) {
    this.name = name;
    this._router = express.Router({caseSensitive: true});

    this.registerResource = function(resource) {
        this._router.route('/' + this.name + '/' + resource.getName())
        .get(function(req, res) {
            res.status(200).json(resource.getObjects());
        });
    };

    this.router = function() {
        return this._router;
    }
};
//</api>

module.exports = Api;
