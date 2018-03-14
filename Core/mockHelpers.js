const _ = require('lodash');
const faker = require('faker');

let getStartCase = function (property) {
    return _.startCase(property).replace(' ', '');
}

let getProperty = function(property, value){
    return  getStartCase(property.name) + ' = "' + value + '"';
}
let getNumericProperty = function(property, value){
    return  getStartCase(property.name) + ' = ' + value + '';
}

let getGetFakePropertyData = function (property) {

    var dataItem = '';

    switch (property.name) {
        case 'id':
            dataItem += getNumericProperty(property, faker.random.number());
        break;
        case 'firstName':
            dataItem += getProperty(property, faker.name.firstName());
            break;
        case 'lastName':
            dataItem += getProperty(property, faker.name.lastName()); 
            break;
        case 'mobile':
            dataItem += getProperty(property, faker.phone.phoneNumber()); 
            break;
        case 'Description':
            dataItem +=  getProperty(property, faker.lorem.words(15)); 
            break;
        default:
            dataItem += getProperty(property, faker.lorem.word());  
    }
    
    return dataItem;
}


module.exports.getGetFakePropertyData = getGetFakePropertyData;