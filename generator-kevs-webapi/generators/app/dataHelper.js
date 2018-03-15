const features = require('../../../features.json');
const _ = require('lodash');
const ejs = require('ejs');

// Returns a list of Properties For the UnitOf Work Interface
// e.g. 
//   INewsRepo News { get; }
let getInterfaceProperties = function () {
    let featuresList = [];

    for (var feature in features) {
        featuresList.push('I' + feature + 'Repo ' + feature + ' { get; }')
    }
    return featuresList.join('\n');
}

// Returns a list of private repos fields For the UnitOf Work Interface
// e.g. 
//   private INewsRepo _newsRepo;
let getRepoFields = function () {
    let featuresList = [];

    for (var feature in features) {
        featuresList.push('private ' + feature + 'Repo _' + _.camelCase(feature) + 'Repo;')
    }
    return featuresList.join('\n');
}

// Returns a list of Imports for the project File
// e.g. 
//   <Compile Include="Repos\NewsRepo.cs" />
let getProjectImports  = function () {
    let featuresList = [];

    for (var feature in features) {
        featuresList.push(ejs.render(`<Compile Include="Repos\\<%=featureName%>Repo.cs" />`, {featureName: feature}));
    }
    return featuresList.join('\n');
}

let getRepoProperties  = function () {
    let featuresList = [];

    for (var feature in features) {
        featuresList.push(ejs.render(`
                public I<%=featureName%>Repo <%=featureName%>
                {
                    get
                    {
                        if (_<%=featureNameCC%>Repo == null)
                            _<%=featureNameCC%>Repo = new <%=featureName%>Repo();
                        return _<%=featureNameCC%>Repo;
                    }
                }
        `, {
            featureName: feature,
            featureNameCC: _.camelCase(feature),
          }))
    }
    return featuresList.join('\n');
}
module.exports.getInterfaceProperties = getInterfaceProperties;
module.exports.getRepoFields = getRepoFields;
module.exports.getRepoProperties = getRepoProperties;
module.exports.getProjectImports = getProjectImports;