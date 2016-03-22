'use strict';

//<people-model>
function People(name, disclosableInfo) {
    this.name = name || '';
    this.disclosableInfo = disclosableInfo || '';

    this.getName = function() {
        return this.name;
    };

    this.setName = function(new_name) {
        this.name = new_name;
    };

    this.getDisclosableInfo = function() {
        return this.disclosableInfo;
    };

    this.setDisclosableInfo = function(new_disclosableInfo) {
        this.disclosableInfo = new_disclosableInfo;
    };
}
//</people-model>

module.exports = People;
