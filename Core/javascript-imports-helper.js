const features = require('../features.json');

let getFeatureDetailsImportlist = function (sub) {
    let featuresList = [];
    for (var feature in features) {
        featuresList.push("import {" + feature + sub + "Component } from './" + feature + "/" + sub + "/" + sub + ".component'")
    }
    return featuresList.join('\n');
}

let getDataServicesImportlist = function () {
    let featuresList = [];
    for (var feature in features) {
        featuresList.push("import {" + feature + "DataService } from './" + feature + "/Services/DataService'")
    }
    return featuresList.join('\n');
}

module.exports.getFeatureDetailsImportlist = getFeatureDetailsImportlist;
module.exports.getDataServicesImportlist = getDataServicesImportlist;