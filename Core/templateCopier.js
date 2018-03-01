const chalk = require('chalk');
const settings = require('../settings');
const FileHound = require('filehound');

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


  fs.readdir(runner.templatePath(srcPath), function (err, items) {

    for (var f in items) {
      if (items[f].includes('.')) {


        var currentFile = runner.templatePath(srcPath + items[f]);
        var destPath = dest + items[f].replace('_', '');

        
        var data = {
            appName: 'Test App',
            featureName: feature
        };
        console.log('data1=' + JSON.stringify(data));

        runner.fs.copyTpl(currentFile, runner.destinationPath(destPath), {
          data: data
        });
      }
    }
  })
}
var copyTplsWithDataFeature = function (runner, source, dest, feature) {
  
    console.log('source = ' + source);
    console.log('path = ' + runner.templatePath(source));
    console.log('featureName = ' + feature);
  
  
    var srcPath = '';
  
    if (source == '') {
      srcPath = runner.templatePath() + '/';
    } else {
      srcPath = runner.templatePath(source);
    }
  
  
    fs.readdir(runner.templatePath(srcPath), function (err, items) {
  
      for (var f in items) {
        if (items[f].includes('.')) {
    
          var currentFile = runner.templatePath(srcPath + items[f]);
          var destPath = dest + items[f].replace('_', '');
  
          
          var data = {
              appName: 'Test App',
              featureName: feature
          };
          console.log('data1=' + JSON.stringify(data));
  
          runner.fs.copyTpl(currentFile, runner.destinationPath(destPath), {
            data: data
          });
        }
      }
    })
  }
module.exports.copyTplsWithData = copyTplsWithData;