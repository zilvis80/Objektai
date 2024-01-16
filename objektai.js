// let studentas = {
//   vardas: 'Tomas',
//   pavarde: 'Tomaitis',
//   amzius: 25,
//   ugis: 200,
//   kursas: 3,
//   mokykla: 'Universitetas',
// };
// console.log(studentas);
// console.log(studentas.pavarde);
// console.log(studentas.mokykla);

// let Filmas = {
//   pavadinimas: 'drambliai',
//   rezisierius: 'Marijanas',
//   Biudzetas: 100000,
//   grynasPelnas: 50000,
//   zanras: 'siaubo',
//   trukme: '3 val',
//   isleidimoMetai: 2023,
//   aktoriai: ['bronius', 'paulius', 'Silvija'],
// };
// console.log(Filmas.aktoriai.length);

// let knygos1 = {
//   pavadinimas: 'vasara',
//   autorius: 'Mykolas',
//   zanras: 'nuotykiu',
//   kaina: 32,
//   puslapiuSkaicius: 623,
//   skyriai: ['pradzia', 'pabegimas', 'vyduris', 'pabaiga', 'isvados'],
//   isleidimoMetai: 1983,
//   knyginas: 'yra',
// };
// let knygos2 = {
//   pavadinimas: 'ziema',
//   autorius: 'Bronius',
//   zanras: 'detektyvas',
//   kaina: 15,
//   puslapiuSkaicius: 564,
//   skyriai: ['pradzia', 'pabegimas', 'vydurys', 'pabaiga', 'isvados'],
//   isleidimoMetai: 1954,
//   knyginas: 'nera',
// };
// console.log(knygos1);
// console.log(knygos2);
// if (knygos1.puslapiuSkaicius > knygos2.puslapiuSkaicius) {
//   console.log('antra knyga plonesne');
// } else if (knygos1.puslapiuSkaicius < knygos2.puslapiuSkaicius) {
//   console.log('pirma knyga plonesne');
// } else {
//   console.log('abi knygos vienodos');
// }
// if (knygos1.skyriai.length > knygos2.skyriai.length) {
//   console.log('pimoj skyriu daugiau');
// } else if (knygos1.skyriai.length < knygos2.skyriai.length) {
//   console.log('antroj skyriu daugiau');
// } else {
//   console.log('skyriu vienodai');
// }
// if (knygos2.kaina * 2 > knygos1.kaina) {
//   console.log('ar pirma knyga brangesne');
// } else if (knygos2.kaina * 2 < knygos1.kaina) {
//   console.log('ar antra knyga brangesne');
// } else {
//   console.log('kainos vienodos');
// }
let studentas1 = {
  vardas: 'tomas',
  pavarde: 'maniuska',
  studijos: 'vgtu',
  pazymiai: [3, 4, 5, 6, 2, 9],
};
let studentas2 = {
  vardas: 'Mantas',
  pavarde: 'Meskauskas',
  studijos: 'vdtko',
  pazymiai: [8, 5, 6, 7, 2, 4],
};
let paz_suma = 0;

// for (const paz of studentas1.pazymiai) {
//   paz_suma += paz;
// }
// console.log('Mokinys 1:', studentas1);
// console.log('pazymiai:', studentas1.pazymiai);
// console.log('vidurkis:', paz_suma / studentas1.pazymiai.length);
// for (const paz of studentas2.pazymiai) {
//   paz_suma += paz;
// }
// console.log('Mokinys 2:', studentas2);
// console.log('Pazymiai:', studentas2.pazymiai);
// console.log('Vidurkis:', paz_suma / studentas2.pazymiai.length);
// if (
//   paz_suma / studentas1.pazymiai.length >
//   paz_suma / studentas2.pazymiai.length
// ) {
//   console.log(
//     'pirmo studento vydukis yra didesnis:',
//     studentas1.vardas,
//     studentas1.pavarde
//   );
// } else if (
//   paz_suma / studentas1.pazymiai.length <
//   paz_suma / studentas2.pazymiai.length
// ) {
//   console.log(
//     'antro studento vidurkis didesnis:',
//     studentas2.vardas,
//     studentas2.pavarde
//   );
// } else {
//   console.log('vidurkis vienodas');
// }
