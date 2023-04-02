//задание №1
let name = prompt ('ваше имя', ''),
    age = prompt ('сколько вам лет', ''),
    city = prompt ('в каком городе вы проживаете', ''),
    phone = prompt ('ваш номер телефона'),
    email = prompt ('почта'),
    company = prompt ('в какой компании вы работаете');
    alert('меня зовут '+  name + ' мне ' + age + ' я проживаю в городе ' + city + ' работаю в компании ' + company + ' мои контактные данные: ' + phone + ' , ' + email);

//задание №2
let year = 2023;
alert(name + ' родился в ' + (year - age) + ' году.')  

//задание №3
let number = 789456,
    number1 = 7 + 8 + 9 ,
    number2 = 4 + 5 + 6;
if (number1 == number2) console.log ('да');
else console.log ('нет');

//задание №4
let a1 = 1;
if (a1 > 0) console.log ('верно');
else console.log ('неверно')

//задание №5
let a = 10,
    b = 2, summa, raznost, proizvedenie, chastnoe;
summa = (a + b), console.log (summa);
raznost = (a - b), console.log (raznost);
proizvedenie = (a * b), console.log (proizvedenie);
chastnoe = (a / b), console.log (chastnoe);
kvadrat = Math.pow (summa,2);
if (summa > 1) console.log (kvadrat);

//задание №6
if ((a < 11) && (a > 2) || (b >= 6) && (b <= 14)) console.log ('верно');
else console.log ('неверно');

//задание №7

let n = 50;
if ((n>=0) && (n<=15)) console.log ('первая четверть');
else if ((n>=16) && (n<=30)) console.log ('вторая четверть');
else if ((n>=31) && (n<=45)) console.log ('третья четверть');
else ((n>=46) && (n<=60)), console.log ('четветрая четверть');

//задание №8
let day = 1;
if ((day > 0) && (day < 11)) console.log('первая декада')
else if ((day > 10) && (day < 21)) console.log('вторая декада')
else if ((day > 20) && (day <= 31)) console.log('третья декада')
else console.log ('неверное значение');

//задание №9
let days = 25, years, mounths, weeks, hours, minutes, seconds;
years = (days/365), console.log (years);
mounths = (days/31), console.log (mounths);
weeks = (days/7), console.log (weeks);
hours = (days * 24), console.log (hours);
minutes = (days * 24 * 60), console.log (minutes);
seconds = (days * 24 * 60 * 60), console.log (seconds);
if (days<7) console.log ('меньше недели')
if (days<31) console.log ('меньше месяца')
if (days<365) console.log ('меньше года')

//задание №10
let mounth;
if ((day > 31) && (day <=59)) mounth = 1;
if ((day > 59) && (day <=90)) mounth = 2;
if ((day > 90) && (day <=120)) mounth = 3;
if ((day > 121) && (day <=151)) mounth = 4;
if ((day > 151) && (day <=181)) mounth = 5;
if ((day > 181) && (day <=212)) mounth = 6;
if ((day > 212) && (day <=243)) mounth = 7;
if ((day > 243) && (day <=273)) mounth = 8;
if ((day > 273) && (day <=304)) mounth = 9;
if ((day > 304) && (day <=334)) mounth = 10;
if ((day > 334) && (day <=365)) mounth = 11;
if ((day > 0) && (day <=31)) mounth = 12;
console.log (mounth);

switch (mounth)  {
    case(1): console.log('зима');
    break;
    case(2): console.log('зима');
    break;
    case(3): console.log('весна');
    break;
    case(4): console.log('весна');
    break;
    case(5): console.log('весна');
    break;
    case(6): console.log('лето');
    break;
    case(7): console.log('лето');
    break;
    case(8): console.log('лето');
    break;
    case(9): console.log('осень');
    break;
    case(10): console.log('осень');
    break;
    case(11): console.log('осень');
    break;
    case(12): console.log('зима');
    break;
}

































    





