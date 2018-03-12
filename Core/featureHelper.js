const features = require('../features.json');

var getProperties = function(featureName){
    for (var feature in features) {
        if (feature == featureName){
            return features[feature].properties;
        }       
    }    
}
module.exports.getProperties = getProperties