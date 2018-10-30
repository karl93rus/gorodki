let cityArr = [
  'Москва', 'Анапа', 'Краснодар', 'Челябинск',
  'Новгород', 'Армавир', 'Калининград', 
  'Воронеж', 'Иваново',  'Киров', 'Чита',
  'Курган', 'Липецк', 'Магадан', 'Тверь', 
  'Санкт-Петербург', 'Ярославль', 'Барнаул', 
  'Пермь', 'Владивосток', 'Майкоп', 'Грозный',
  'Петропавловск-Камчатский', 'Орел', 'Верхний', 
  'Волжский', 'Россия', 
]


function regcheck(city) {
  if(/а$/.test(city) || /ль$/.test(city)) {
    let res = '';
    let tmp = [];
    tmp = city.split('');
    tmp.splice(city.length - 1, 1, 'е');
    res = tmp.join('');
    return res;
  } else if(/р$/.test(city) || /ск$/.test(city) || /д$/.test(city) 
            || /ж$/.test(city) || /ов$/.test(city) || /ан$/.test(city) || /цк$/.test(city)
            || /рг$/.test(city) || /ул$/.test(city) || /ток$/.test(city) || /оп$/.test(city)) {
    let res = city;
    res += 'е';
    return res;
  } else if(/рь$/.test(city) || /мь$/.test(city) || /ия$/.test(city)) {
    let res = '';
    let tmp = [];
    tmp = city.split('');
    tmp.splice(city.length - 1, 1, 'и');
    res = tmp.join('');
    return res;
  } else if(/ний$/.test(city)) {
    let res = '';
    let tmp = [];
    tmp = city.split('');
    tmp.splice(city.length - 2, 2, 'ем');
    res = tmp.join('');
    return res;
  } else if(/кий$/.test(city) || /ый$/.test(city)) {
    let res = '';
    let tmp = [];
    tmp = city.split('');
    tmp.splice(city.length - 2, 2, 'ом');
    res = tmp.join('');
    return res;
  } else {
    return city;
  }
}

function cityDeclension(city) {
  
}

for(let gorod of cityArr) {
  console.log(regcheck(gorod));
}