const chalk = require('chalk');
const settings = require('../settings');
const _ = require('lodash');
var fs = require('fs');


let Process = function (currentFeature, currentsrcPath, currentDestPath) {

  var files = fs.readdirSync(currentsrcPath);
  console.log('readdirSync=' + files);


  for (var f in files)  {
    
    console.log('items(f);=' + files[f]);
  }
  // fs.readdir(currentsrcPath, function (err, items) {
  //   for (var f in items) {
  //     console.log('currentFile=' + items[f]);
  //     console.log('currentFeature=' + currentFeature);
  //     console.log('currentsrcPath = ' + currentsrcPath);
  //     console.log('currentDestPath = ' + currentDestPath);

  //     // runner.fs.copyTpl(currentFile, currentDestPath, {
  //     //   data: data
  //     // });
  //   }

  //})
}


var copyTplsWithData = function (runner, source, dest, data) {



  let processTemplate = function (templateFileName, destPath) {


    if (templateFileName.includes('.')) {

      var currentFile = runner.templatePath(srcPath + templateFileName);
      var destPath = dest + templateFileName;



      runner.fs.copyTpl(currentFile, runner.destinationPath(destPath), {
        data: data
      });
    }
  }

  var srcPath = '';

  if (source == '') {
    srcPath = runner.templatePath() + '/';
  } else {
    srcPath = runner.templatePath(source);
  }

  fs.readdir(runner.templatePath(srcPath), function (err, items) {
    for (var f in items) {
      processTemplate(items[f]);
    }
  })
}



let copyTplsWithDataFeature = function (runner, source, dest, data, features) {
  console.log('feature = ' + feature);
console.log('------------------------------------------------------');

  for (var feature in features) {
    console.log('feature = ' + feature);
    console.log('-------------------------------------------------------------------------------');
    data.featureName = feature,
      data.featureNameCC = _.camelCase(feature)
    var destpath = dest + '/' + feature + '/details/';


    Process(feature, runner.templatePath(source), destpath);
    // 
    // var srcPath = runner.templatePath(source);

    //  fs.readdir(runner.templatePath(srcPath), function (err, items) {     
    //      processFeatureTemplate(feature,  destpath, items);      
    //  })
  }



  let processFeatureTemplate = function (feature, currentDestPath, items) {

    console.log('featurexxx = ' + feature);
    // console.log('------------------------------------------------------');
    // for (var f in items) {      
    //   console.log('featurexxx = ' + items[f]);
    // }

    // let currentFile = runner.templatePath(srcPath + templateFileName);
    // let destPath = dest + templateFileName;

    // console.log(' templateFileName = ' + templateFileName);
    // console.log('destPath = ' + currentDestPath);
    // console.log('feature = ' + feature);

    // runner.fs.copyTpl(currentFile, runner.destinationPath(currentDestPath), {
    //   data: data
    // });

  }


}
module.exports.copyTplsWithData = copyTplsWithData;
module.exports.copyTplsWithDataFeature = copyTplsWithDataFeature;