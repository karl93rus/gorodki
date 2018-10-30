const converter = require('./checkEndings');

function cityDeclension(city) {
  const moreThanOneWord = /[А-Яа-я]\s[А-Яа-я]/u;
  if(moreThanOneWord.test(city)) {
    let cityArray = city.split(' ');
    let result = '';
    for(let component of cityArray) {
      result += converter.convert(component);
      result += ' ';
    }
    return result;
  } else {
    return converter.convert(city);
  }
}

module.exports.incline = cityDeclension;
