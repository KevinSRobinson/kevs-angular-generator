const chalk = require('chalk');
const settings = require('../settings');
const _ = require('lodash');
var fs = require('fs');



var copyTplsWithData = function (runner, source, dest, data) {

  let processTemplate = function (templateFileName) {

      
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

module.exports.copyTplsWithData = copyTplsWithData;