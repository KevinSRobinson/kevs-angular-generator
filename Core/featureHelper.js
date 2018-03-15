const features = require('../features.json');


// Return the list of properties of a feature.
// {
//     "name": "id",
//     "type": "number",
//     "required": true
// },
// {
//     "name": "firstName",
//     "type": "string",
//     "required": true
// }
// etc
var getProperties = function (featureName) {
    for (var feature in features) {
        if (feature == featureName) {
            return features[feature].properties;
        }
    }
}

// returns a list of features
// e.g. 
// PeopleDetailsComponent,
// PeopleHomeComponent,
// PeopleListComponent 
// OrganisationsDetailsComponent,
// OrganisationsHomeComponent,
// OrganisationsListComponent... etc
let getFeaturelist = function () {
    let featuresList = [];

    for (var feature in features) {
        featuresList.push(feature + 'DetailsComponent')
        featuresList.push(feature + 'HomeComponent')
        featuresList.push(feature + 'ListComponent')
    }
    return featuresList.join(',\n');
}


// Returns a list of DataService
// e.g. 
//   PeopleDataService,
//   OrganisationsDataService,
//   NewsDataService. .. etc
let getDataServicesList = function () {
    let featuresList = [];

    for (var feature in features) {
        featuresList.push(feature + 'DataService')
    }
    return featuresList.join(',\n');
}

module.exports.getProperties = getProperties
module.exports.getFeaturelist = getFeaturelist
module.exports.getDataServicesList = getDataServicesList