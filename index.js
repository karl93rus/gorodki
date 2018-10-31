const converter = require('./checkEndings');
const gorod = require('./testArray');

function cityDeclension(city) {
  const moreThanOneWord = /[А-Яа-я]\s[А-Яа-я]/u; // Город [пробел] Город (Нижний Новгород, Великий Устюг)
  const dashedWord = /[А-Яа-я]-(на)-[А-Яа-я]/uig; // Город[дефис]на[дефис]Город (Ростов-на-Дону, Славянск-на-Кубани)
  if(moreThanOneWord.test(city)) {
    // Если город с пробелами
    let cityArray = city.split(' ');
    let result = '';
    for(let component of cityArray) {
      result += converter.convert(component);
      result += ' ';
    }
    return result;
  } else if(dashedWord.test(city)) {
    // Если город с дефисами (...-на-...) 
    let cityArray = city.split('-');
    cityArray[0] = converter.convert(cityArray[0]);
    let result = cityArray.join('-');
    return result;
  } else {
    return converter.convert(city);
  }
}

for(let gor of gorod) {
  console.log(cityDeclension(gor));
}

module.exports.incline = cityDeclension;