'use strict';

//<requires>
var _ = require('underscore');
var People = require('./people.js');
//</requires>


//<people-resoruce>
function PeopleResource() {
    this.name = 'people';

    this.getName = function() {
        return this.name;
    };

    this.getObjects = function() {
        var names = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
        var surnames = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];

        return _.range(10).map(function(num) {
            return new People(
                _(names).sample() + ' ' + _(surnames).sample(),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
                "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c"+
                "onsequat.");
        });
    };
}
//</people-resource>


module.exports = PeopleResource;
