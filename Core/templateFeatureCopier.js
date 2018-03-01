const chalk = require('chalk');
const settings = require('../settings');
const _ = require('lodash');
var fs = require('fs');

let Process = function (data, currentsrcPath, currentDestPath, runner, feature) {

  var files = fs.readdirSync(currentsrcPath);

  for (var f in files) {
    let src = currentsrcPath + files[f];    
    let des = 'C:/GeneratorsOutput/Template/src/app/' + feature + '/' + files[f];

    //let currentFile = runner.templatePath(currentsrcPath + templateFileName);

    console.log('src=' + src);
    console.log('des=' + des);

    runner.fs.copyTpl(src, des,  {data: data    }); 
 
  }

}

let processFeatureTemplate = function (feature, currentDestPath, items) {

  console.log('featurexxx = ' + feature);

}

let copyTplsWithDataFeature = function (runner, source, dest, data, features) {
 
 

  for (var feature in features) {
    console.log('feature = ' + feature);
    console.log('-------------------------------------------------------------------------------');
    data.featureName = feature,
    data.featureNameCC = _.camelCase(feature)
    var destpath = dest + '/' + feature + '/details/';


    Process(data, runner.templatePath(source), destpath, runner, feature);
    console.log('------------------------------------------------------');
  }





}

module.exports.copyTplsWithDataFeature = copyTplsWithDataFeature;