const chalk = require('chalk');
const settings = require('../settings');
const _ = require('lodash');

var fs = require('fs');
var copyTplsWithData = function (runner, source, dest, feature) {

  console.log('source = ' + source);
  console.log('path = ' + runner.templatePath(source));
  console.log('featureName = ' + feature);


  var srcPath = '';

  if (source == '') {
    srcPath = runner.templatePath() + '/';
  } else {
    srcPath = runner.templatePath(source);
  }


  let processTemplate = function(templateFileName){
    if (templateFileName.includes('.')) {
      var currentFile = runner.templatePath(srcPath + templateFileName);
      var destPath = dest + templateFileName;

      
      var data = {
          appName: 'Test App',
          featureName: feature,
          featureNameCC: _.camelCase(feature),
      };
      console.log('data1=' + JSON.stringify(data));

      runner.fs.copyTpl(currentFile, runner.destinationPath(destPath), {
        data: data
      });
    }
  }


  fs.readdir(runner.templatePath(srcPath), function (err, items) {

    for (var f in items) {
      processTemplate(items[f]);     
    }
  })

 
}

module.exports.copyTplsWithData = copyTplsWithData;