'use strict';

//<people-model>
function People(name, disclosableInfo) {
    this._name = name || '';
    this._disclosableInfo = disclosableInfo || '';

    this.name = function(new_name) {
        return (new_name) ? (this._name = new_name) : this._name;
    };

    this.disclosableInfo = function(new_disclosableInfo) {
        return (new_disclosableInfo) ? (this._disclosableInfo = new_disclosableInfo) : this._disclosableInfo;
    };
}
//</people-model>

module.exports = People;
