// function ar_pirminis(sk) {
//   if ((sk % 2 !== 0 && sk % 3 !== 0 && sk !== 2) || sk === 2 || sk === 3) {
//     console.log(sk, 'True');
//   } else {
//     console.log(sk, 'False');
//   }
// }
// let sprfendimas = (pazymiai) => {
//   let teigiami = true;
//   for (let i = 0; i < pazymiai.lenght; i++) {
//     if (pazymiai[i] < 5) {
//       teigiami = false;
//       break;
//     }
//   }

//   console.log(teigiami ? 'visi pazymiai' : 'neigiami');
// };
// let pazymiai1 = [8, 5, 2, 7, 9, 1];
// let pazymiai2 = [9, 7, 5, 4, 8, 6];
// sprfendimas(pazymiai2);

// function daug_raidziu(zodziai) {
//   console.log(zodziai);
//   let daugiausiai = '';
//   for (let i = 0; i < zodziai.length; i++) {
//     if (zodziai[i].length > daugiausiai.length) {
//       daugiausiai = zodziai[i];
//     }
//   }
//   return daugiausiai;
// }

// let zodziai = ['geras', 'blogas', 'ilgas', 'trumpas'];
// let zodziai1 = ['greitas', 'letas', 'storas', 'plonas'];
// let zodziai3 = ['mielas', 'jaunas', 'senas', 'sliekas'];
// let zodziai4 = [zodziai, zodziai1, zodziai3];

// daug_raidziu(zodziai);
// let pirmas = daug_raidziu(zodziai);
// console.log(pirmas);
// console.log(daug_raidziu(zodziai1));
// console.log(zodziai4);

//-------ryt butinai reikia paklaust
// let pazymiai = [10, 5, 6, 2, 7, 9, 4, 6];
// let knygos = ['Brisiaus galas', 'Amerikos raganos', 'faustas'];
// let sasSumaSuLiekana = [100.23, 98.6, 36.7, 43.2, 550.12];

// function kiekMasyvu(masyvas, callback) {
//   for (let i = 0; i < masyvas.length; i++) {
//     callback(masyvas[i], i, masyvas);
//   }
// }
// kiekMasyvu(pazymiai, (item) => console.log(item));
// kiekMasyvu(knygos, function (item, index, arr) {
//   console.log(
//     'knygos pavadinimas:',
//     item,
//     'eiles numeris:',
//     index,
//     'visas sarasas yra:',
//     arr
//   );
// });
// kiekMasyvu(sasSumaSuLiekana, (item) => {
//   let suapvalinta = Math.round(item);
//   console.log(`saskaitos suma: ${item}; suapvalinta suma: ${suapvalinta}`);
// });
//--------GAVOSI LABAI PUIKIAI------------------
//---------kita tema-----------
// function skaiciu_suma(masyvas) {
//   let suma = 0;
//   for (const sk of masyvas) {
//     suma += sk;
//   }
//   return suma;
// }
// let skaiciai = [7, 8, 4, 9, 2, 7, 3];
// let suma = skaiciu_suma(skaiciai);
// let vidurkis = suma / skaiciai.length;
// let sandauga = suma * 2;
// console.log('Skaiciai:', skaiciai);
// console.log('Skaiciu suma:', suma);
// console.log('Vidurkis:', vidurkis);
// console.log('sandauga:', sandauga);
// const numbers = [10, 5, 8, 20, 15, 20];

// let maxNumber = numbers[0];
// let allMaxNumbers = [maxNumber];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i];
//     allMaxNumbers = [maxNumber]; // Reset the array with a new maximum
//   } else if (numbers[i] === maxNumber) {
//     allMaxNumbers.push(maxNumber); // Add additional occurrences of the current maximum
//   }
// }

// console.log(allMaxNumbers); // Output: [20, 20]

//------------iskviesti true arba fols------------

// let arr = [6, 8, 6, 9, 7];
// let arr2 = [4, 8, 3, 9, 2];
// function teigiami(pazymiai) {
//   console.log(pazymiai);
//   for (let i = 0; i < pazymiai.length; i++) {
//     if (pazymiai[i] < 5) {
//       console.log('pazymis yra neigiamas:', pazymiai[i]);
//       return false;
//     }
//   }
//   return true;
// }
// let atsakymas = teigiami(arr);
// console.log(teigiami(arr2));
// console.log(atsakymas);
//---------kita versija----------
// let arr = [6, 8, 6, 9, 7];
// let arr2 = [4, 8, 3, 9, 2];
// function teigiami(pazymiai) {
//   console.log(pazymiai);
//   let teigiamas = true;
//   for (let i = 0; i < pazymiai.length; i++) {
//     if (pazymiai[i] < 5) {
//       console.log('pazymis yra neigiamas:', pazymiai[i]);
//       teigiamas = false;
//       break;
//     }
//   }
//   return teigiamas;
// }
// let atsakymas = teigiami(arr);
// console.log(teigiami(arr2));
// console.log(atsakymas);
//-----------callback ---------------
// function skaiciu_suma(masyvas, callback) {
//   let suma = 0;
//   for (let i = 0; i < masyvas.length; i++) {
//     suma += masyvas[i];
//   }
//   callback(suma);
// }
// let skaiciai = [98, 87, 76, 69, 25, 31, 58, 48];
// let skaiciai1 = [67, 23, 57, 80, 91, 97, 85, 45];
// skaiciu_suma(skaiciai, (item) => {
//   console.log('pirmo masyvo suma:', item);
// });
// skaiciu_suma(skaiciai1, (item) => {
//   console.log('antro masyvo suma:', item);
// });
// function tekstas() {
//   return 'gerai bus ismoksiu programuoti';
// }
// console.log(tekstas());
