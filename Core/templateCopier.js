const chalk = require('chalk');
const settings = require('../settings');

var fs = require('fs');
var copyTplsWithData = function (runner, source, dest, data) {
  // console.log('dest = '  +  chalk.red(dest));
  // console.log('source = '  +  chalk.red(dest));

  var source = 'Core';
  var feature = '';
  if (source != undefined)
  {
    var files1 = fs.readdirSync('./generators/app/templates/' + source + '/');
  

     for (var file in files1) {
        //onsole.log(chalk.red(files1[0]));
        console.log(chalk.red(files1[file]));
    //   try {
        
  
         let sourcePath = source + '/' +files1[file];
         let destPath = dest + feature + files1[file].replace('_', '');
        
         console.log('source = ' + chalk.yellow(files1[file]));

        runner.fs.copyTpl(runner.templatePath( sourcePath ), runner.destinationPath(destPath), {
          data: data
        });
   
  
    //   } catch (err) {
    //     console.log(chalk.red(err));
    //   }
     }
  }

 
};

module.exports.copyTplsWithData = copyTplsWithData;
