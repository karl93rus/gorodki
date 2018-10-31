const converter = require('./checkEndings');

function cityDeclension(city) {
  const moreThanOneWord = /[А-Яа-я]\s[А-Яа-я]/u;
  const dashedWord = /[А-Яа-я]-(на)-[А-Яа-я]/uig;
  if(moreThanOneWord.test(city)) {
    let cityArray = city.split(' ');
    let result = '';
    for(let component of cityArray) {
      result += converter.convert(component);
      result += ' ';
    }
    return result;
  } else if(dashedWord.test(city)) {
    let cityArray = city.split('-');
    cityArray[0] = converter.convert(cityArray[0]);
    let result = cityArray.join('-');
    return result;
  } else {
    return converter.convert(city);
  }
}

module.exports.incline = cityDeclension;