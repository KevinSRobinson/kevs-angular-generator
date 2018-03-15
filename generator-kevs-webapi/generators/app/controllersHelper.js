const features = require('../../../features.json');
const featureHelper = require('../../../Core/featureHelper');
const mockHelper = require('../../../Core/mockHelpers');
const ejs = require('ejs');
var faker = require('faker');
const _ = require('lodash');


// capitalizes the first letter
// firstName  >>   FirstName
let getStartCase = function (property) {
  return _.startCase(property).replace(' ', '');
}

// returns a public Property
// public string FirstName { get; set; }
let getDtoField = function (property, dataType) {
  if(dataType == 'number'){
    dataType = 'int';
  }


  return ejs.render(` public <%=dataType%> <%=property%>{ get; set; }\n`, {
    dataType: dataType,
    property: getStartCase(property)
  });
}







let getDto = function (featureName) {

  let dto = 'public class ' + featureName + 'Dto\n{\n';

  let fields = [];
  var properties = featureHelper.getProperties(featureName);

  for (var property in properties) {
    fields.push(getDtoField(properties[property].name, properties[property].type));
  }

  dto += fields.join('\n\n') + '}';

  return dto;
}




let getMockData = function (featureName) {
  let fields = [];
  var properties = featureHelper.getProperties(featureName);
  for (var property in properties) {
    fields.push(mockHelper.getGetFakePropertyData(properties[property]));
  }
  return fields.join(',\n');
}





//return new List<PeopleDto>
//     {
//         new PeopleDto
//         {
//             FirstNname = "Kamryn Schaefer",
//             LastName = "Terrill Hahn",
//             Mobile = "Sister Cormier",
//             Active = "Lisette Block"
//         },
//         new PeopleDto
//         {
//             FirstNname = "Kamryn Schaefer",
//             LastName = "Terrill Hahn",
//             Mobile = "Sister Cormier",
//             Active = "Lisette Block"
//         }
//     };
// }
let getFakeDtoList = function (featureName) {

  let startMockList = ejs.render(`new List<<%=featureName%>Dto>  { \n`, {
    featureName: featureName
  });

  let dataItems = [];
  for (i = 0; i < 3; i++) {
    let fakeData = getMockData(featureName);
    dataItems.push(ejs.render(`new <%=featureName%>Dto() { <%-fakeData%> } `, {
      featureName: getStartCase(featureName),
      fakeData: fakeData
    }))
  }
  return startMockList + dataItems.join(',\n') + '};';
}

module.exports.getFakeData = getFakeDtoList;
module.exports.getDto = getDto;
