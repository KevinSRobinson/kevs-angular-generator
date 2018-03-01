'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const featureGenerator = require('./generatror.js');
const fs = require('fs');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing ' + chalk.red('generator-angular-5-generator') + ' generator!'
    ));

    // const prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    

    featureGenerator.generate(this);
  }

  install() {
   // this.installDependencies();
  }
};
