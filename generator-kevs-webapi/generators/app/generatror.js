const copier = require('../../../Core/templateCopier');
const features = require('../../../features.json');
const templateFeatureCopier = require('../../../Core/templateFeatureCopier');
const controllersHelper = require('./controllersHelper')
const dataHelper = require('./dataHelper')
const ejs = require('ejs');
const settings = require('../../../settings.json');

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

const _ = require('lodash');

let generate = function (runner) {

    var dest =  settings.outputFolder;

    var data = {
      appName: 'Test App',
      featureName: '',
      getFakeData: controllersHelper.getFakeData,
      getDto: controllersHelper.getDto,
      getInterfaceProperties: dataHelper.getInterfaceProperties(),
      getRepoFields: dataHelper.getRepoFields(),
      getRepoProperties: dataHelper.getRepoProperties(),
      getProjectImports: dataHelper.getProjectImports()
    };

     var src = 'Web/';

     copier.copyTplsWithData(runner,  src, dest + 'Web/', '');
     copier.copyTplsWithData(runner,  src + 'src/', dest + 'Web/src/', '');
     copier.copyTplsWithData(runner,  src + 'src/WebApplication2/', dest + 'Web/src/WebApplication2/', '');


    templateFeatureCopier.copyTplsWithDataFeature1(runner,  src + 'src/WebApplication2/Controllers/', dest + 'Web/src/WebApplication2/Controllers/', data, features);


     
     
     //templateFeatureCopier.copyTplsWithDataFeature(runner,  'src/WebApplication2/Controllers/',  dest + 'src/WebApplication2/Controllers/', data, features, '');



    //  copier.copyTplsWithData(runner,  'src/WebApplication2/Properties/', dest + '/src/WebApplication2/Properties/', '');
    //  copier.copyTplsWithData(runner,  'src/WebApplication2/wwwroot/', dest + '/src/WebApplication2/wwwroot/', '');
     




    // Data Project
    var src = 'Data/';

    copier.copyTplsWithData(runner,  src, dest + '/Data/', data, features);
    copier.copyTplsWithData(runner,  src + 'Properties/', dest + '/Data/Properties/', data, features);
    copier.copyTplsWithData(runner,  src + 'UnitOfWork/', dest + '/Data/UnitOfWork/', data, features);
    templateFeatureCopier.copyTplsWithDataFeature1(runner,  src + 'Repos/', dest + '/Data/Repos/', data, features);

     // Dtos Project
     var src = 'Dtos/';

     copier.copyTplsWithData(runner,  src, dest + '/Dtos/', data, features);
     copier.copyTplsWithData(runner,  src + 'Properties/', dest + '/Dtos/Properties/', data, features);
    
    // copier.copyTplsWithData(runner,  src + 'Dtos/', dest + '/Dtos/', data, features);
     templateFeatureCopier.copyTplsWithDataFeature1(runner,  src + 'Dtos/', dest + '/Dtos/Dtos/', data, features);

}

module.exports.generate = generate;
