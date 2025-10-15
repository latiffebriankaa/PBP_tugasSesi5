// file utama yang menggunakan modul modul tersebut dan menampilkan hasil di terminal
// mengimport modul chalk dan konversi suhu buatan sendiri
const chalk = require('chalk');
const konversi = require('./modul/konversi');

//input
let Celcius = 30;
let Fahrenheit = konversi.celciusToFahrenheit(Celcius);

console.log(chalk.red.underline('Konversi Suhu'));
console.log(chalk.blue(`${Celcius}C jika dikonversi menjadi ${Fahrenheit}F`));

//jika langsung di akses
console.log(konversi.celciusToFahrenheit());
