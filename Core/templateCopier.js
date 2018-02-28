const chalk = require('chalk');
const settings = require('../settings');
const FileHound  = require('filehound');

var fs = require('fs');
var copyTplsWithData = function (runner, source, dest, data) {

  console.log(runner.templatePath(source));

  fs.readdir(runner.templatePath(), function(err, items) {
    //console.log(items);
    
    for (var f in items) {
      console.log(items[f]);

      fs.stat(runner.templatePath(items[f]), function (err, stats) {
        if (err) {
            return console.error(err);
        }


  
        // if(!stats.isDirectory())
        // {
        //   runner.fs.copyTpl(runner.templatePath(currentFile), runner.destinationPath(destPath), {
        //     data: data
        //    });
        // }
      


        console.log("isDirectory ? " + stats.isDirectory());    
     });

     
    }
    // for (var i=0; i<items.length; i++) {
    //     console.log(items[i]);
    // }
});

  // const files  = FileHound.create()
  // .path(runner.templatePath())
  // .depth(0)
  // .findSync(); 

  // const files = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())

  // console.log(files);

  // for (var f in files) {

  //   let file = files[f].split('\\');
  //   let currentFile = file[file.length - 1];
  //   console.log('file = ' + currentFile);

  //     let destPath = dest + files[f].replace('_', '');


  //     console.log('file = ' + runner.templatePath(currentFile));

  //    runner.fs.copyTpl(runner.templatePath(currentFile), runner.destinationPath(destPath), {
  //     data: data
  //    });
  // }

};

module.exports.copyTplsWithData = copyTplsWithData;
