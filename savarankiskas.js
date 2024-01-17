// let knygos = [
//   { pavadinimas: 'beglys', Kaina: 16, Autorius: 'Jonas Janonis' },
//   { pavadinimas: 'saulys', Kaina: 30, Autorius: 'Marcinkevicius' },
//   { pavadinimas: 'Suzeistas', Kaina: 24, Autorius: 'Hemingveinas' },
// ];
// console.log('VISOS KNYGOS');
// for (const knyga of knygos) {
//   console.log(knyga);
// }
// console.log('knyga:', knygos[2]);
// console.log('kaina:', knygos[1].Autorius);

// let knygos = [
//   {
//     pavadinimas: 'beglys',
//     Kaina: 16,
//     Autorius: 'Jonas Janonis',
//     zanras: 'detektyvas',
//   },
//   {
//     pavadinimas: 'saulys',
//     Kaina: 30,
//     Autorius: 'Marcinkevicius',
//     zanras: 'kovinis',
//   },
//   {
//     pavadinimas: 'Suzeistas',
//     Kaina: 24,
//     Autorius: 'Hemingveinas',
//     zanras: 'melodrama',
//   },
//   { pavadinimas: 'bailys', Kaina: 38, Autorius: 'Ziugzda', zanras: 'nuotykiu' },
//   { pavadinimas: 'sraige', Kaina: 45, Autorius: 'Baldzius', zanras: 'sportas' },
// ];
// console.log('Knygos akcijines:');
// for (const knyga of knygos) {
// //   console.log(`- ${knyga.pavadinimas}  ${knyga.Kaina}eur`);
// // }

// let Automobilis = [
//   { Pavadinimas: 'BMW', Modelis: 'X5', Metai: 2011, Kuras: 'Dyzelinas' },
//   { Pavadinimas: 'Audi', Modelis: 'Q7', Metai: 2009, Kuras: 'Benzinas' },
//   {
//     Pavadinimas: 'Ford',
//     Modelis: 'Puma',
//     Metai: 2006,
//     Kuras: 'Benzinas/Dujos',
//   },
//   { Pavadinimas: 'Volvo', Modelis: 'XC90', Metai: 2010, Kuras: 'Elektra' },
// ];

// // console.log(Automobilis);
// for (const auto of Automobilis) {
//   //   console.log(`${auto.Pavadinimas} ${auto.Metai} ${auto.Kuras}`);
//   console.log(
//     `${auto.Pavadinimas} ${auto.Modelis} ${2024 - auto.Metai} metu senumo`
//   );
// }
// // console.log('masinu skaicius:', auto.length);

// // console.log('Kuras:', auto.Kuras);

let studentai = [
  { Vardas: 'Jonas', Amzius: 20, Pazymiai: [4, 5, 6, 2] },
  { Vardas: 'Linas', Amzius: 19, Pazymiai: [6, 7, 8, 4] },
  { Vardas: 'Kestas', Amzius: 21, Pazymiai: [9, 3, 8, 4] },
];
let vidurkiu_suma = 0;
for (const stu of studentai) {
  console.log(`studentas: ${stu.Vardas} Amzius: ${stu.Amzius}`);
  let suma = 0;
  for (const paz of stu.Pazymiai) {
    suma += paz;
  }
  let Vidurkis = suma / stu.paz.length;
  //   vidurkiu_suma += Vidurkis;
  console.log(vidurkiu_suma);
}
