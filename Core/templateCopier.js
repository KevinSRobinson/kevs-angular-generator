const chalk = require('chalk');
const settings = require('../settings');
const FileHound  = require('filehound');

var fs = require('fs');
var copyTplsWithData = function (runner, source, dest, data) {

  // runner.templateBase();
  console.log('source = ' +  source);
  console.log('path = ' + runner.templatePath(source));

  var srcPath = runner.templatePath(source);

  fs.readdir(runner.templatePath(srcPath), function(err, items) {
    
    for (var f in items) {
      if(items[f].includes('.')){


        var currentFile = runner.templatePath(srcPath + items[f]);
        var destPath = dest + items[f].replace('_', '');

        runner.fs.copyTpl(currentFile, runner.destinationPath(destPath), {
            data: data
        });
      }    
    }
   



  })


}

  // fs.readdir(runner.templatePath(source), function(err, items) {


  // console.log(items);
    
  //   for (var f in items) {

  //     if(items[f].includes('.')){
  //       console.log(items[f]);
  //       console.log(runner.templatePath(items[f]));
  //       var currentFile = runner.templatePath(items[f]);
  //       let destPath = dest + items[f].replace('_', '');
  //       runner.fs.copyTpl(currentFile, runner.destinationPath(destPath), {
  //           data: data
  //       });
  //     }      


  //   }
  //   //   fs.stat(runner.templatePath(items[f]), function (err, stats) {

    //      console.log(items[f]);
    //     // // if(!stats.isDirectory())
    //     // // {
    //     // //   runner.fs.copyTpl(runner.templatePath(currentFile), runner.destinationPath(destPath), {
    //     // //     data: data
    //     // //    });
    //     // // }
      

    //     // // console.log("isDirectory ? " + stats.isDirectory());    
    //     //  console.log("file ? " +  JSON.stringify(stats));    
    //  });

     
   // }
    // for (var i=0; i<items.length; i++) {
    //     console.log(items[i]);
    // }
//});

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

//};

module.exports.copyTplsWithData = copyTplsWithData;
