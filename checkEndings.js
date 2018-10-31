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
  } if(/жок$/.test(city)) {
    let res = '';
    let tmp = [];
    tmp = city.split('');
    tmp.splice(city.length - 2, 2, 'ке');
    res = tmp.join('');
    return res;
  } else if(/кое$/.test(city)) {
    let res = '';
    let tmp = [];
    tmp = city.split('');
    tmp.splice(city.length - 2, 2, 'ом');
    res = tmp.join('');
    return res;
  } else if(/ел$/.test(city)) {
    let res = '';
    let tmp = [];
    tmp = city.split('');
    tmp.splice(city.length - 2, 2, 'ле');
    res = tmp.join('');
    return res;
  } else {
    return city;
  }
}

module.exports.convert = regcheck;