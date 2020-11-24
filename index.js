// const db = require('./query');
let express = require('express');
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));


let data = [
 {
   "code": 110036,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 791811,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 313005,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 324172,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 513338,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 684913,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 937236,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 588539,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 792663,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 709448,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 287404,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 186512,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 141297,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 228208,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 863212,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 605494,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 557080,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 487898,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 425450,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 275539,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 694228,
   "name": "Пуфик ",
   "int": 1
 },
 {
   "code": 406339,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 763620,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 995280,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 110647,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 475490,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 262709,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 165370,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 707750,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 939353,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 378406,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 917767,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 623190,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 859958,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 717361,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 257465,
   "name": "Блокнот белый ",
   "int": 1
 },
 {
   "code": 758352,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 267575,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 593247,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 613863,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 532702,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 208280,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 105204,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 966854,
   "name": "Попсокет белый ",
   "int": 1
 },
 {
   "code": 596056,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 503686,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 170028,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 949568,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 387004,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 416552,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 989997,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 165684,
   "name": "Попсокет зеленый ",
   "int": 1
 },
 {
   "code": 822330,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 869335,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 808404,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 989354,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 681980,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 972027,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 476325,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 216300,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 661339,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 245533,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 869308,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 237501,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 525542,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 937782,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 748651,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 337233,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 293562,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 633873,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 111114,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 205419,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 150291,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 827068,
   "name": "Додопицца промокод ",
   "int": 2
 },
 {
   "code": 193115,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 254198,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 910942,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 808089,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 100806,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 460371,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 848100,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 874673,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 689153,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 254252,
   "name": "Спорт набор ",
   "int": 2
 },
 {
   "code": 440341,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 419942,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 636961,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 276430,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 214859,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 432206,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 952241,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 366316,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 354879,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 413587,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 276400,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 302870,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 930498,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 674183,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 829483,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 474657,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 657637,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 164947,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 588321,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 749242,
   "name": "Смарт будильник ",
   "int": 2
 },
 {
   "code": 699119,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 805623,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 935891,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 276857,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 455838,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 446460,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 631131,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 838843,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 718678,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 385596,
   "name": "Столик-трансформер ",
   "int": 3
 },
 {
   "code": 106098,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 394616,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 380029,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 693509,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 293710,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 145968,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 282229,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 248208,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 815439,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 850387,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 199153,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 965819,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 997710,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 992539,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 688202,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 595502,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 317872,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 188416,
   "name": "Черный блокер для камеры ",
   "int": 3
 },
 {
   "code": 471434,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 245038,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 741134,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 371097,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 453848,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 924994,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 510171,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 832270,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 298057,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 902671,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 731863,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 246801,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 293786,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 206111,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 348385,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 381781,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 392642,
   "name": "Серый блокер для камеры ",
   "int": 3
 },
 {
   "code": 892689,
   "name": "Powerbank ",
   "int": 3
 },
 {
   "code": 946646,
   "name": "Powerbank ",
   "int": 3
 },
 {
   "code": 486398,
   "name": "Powerbank ",
   "int": 3
 },
 {
   "code": 171309,
   "name": "Powerbank ",
   "int": 3
 },
 {
   "code": 340287,
   "name": "Powerbank ",
   "int": 3
 },
 {
   "code": 668231,
   "name": "Powerbank ",
   "int": 3
 },
 {
   "code": 580763,
   "name": "Powerbank ",
   "int": 3
 }
]


function search(code) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].code == code) return data[i]
  }
}


app.get('/get_code', async function (req, res) {
  res.send(search(req.originalUrl.split('?')[1].split('=')[1]))
});

app.listen(3000, () => {
  console.log('Server started...');
});