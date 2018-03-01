const copier = require('../../../Core/templateCopier');
const features = require('../../../features.json');
const templateFeatureCopier = require('../../../Core/templateFeatureCopier');



const _ = require('lodash');

let generate = function (runner) {

    var dest = 'C:/GeneratorsOutput/Webapi/';

    var data = {
      appName: 'Test App',
      featureName: '',
    };

     copier.copyTplsWithData(runner,  '', dest, '');

     copier.copyTplsWithData(runner,  'src/', dest + '/src/', '');
     copier.copyTplsWithData(runner,  'src/WebApplication2/', dest + '/src/WebApplication2/', '');

     copier.copyTplsWithData(runner,  'src/WebApplication2/Controllers/', dest + '/src/WebApplication2/Controllers/', '');
     copier.copyTplsWithData(runner,  'src/WebApplication2/Properties/', dest + '/src/WebApplication2/Properties/', '');
     copier.copyTplsWithData(runner,  'src/WebApplication2/wwwroot/', dest + '/src/WebApplication2/wwwroot/', '');
     
}

module.exports.generate = generate;
