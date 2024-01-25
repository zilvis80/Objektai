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

// let vardai = [
//   'Zilvinas',
//   'diana',
//   'martynas',
//   'Adomas',
//   'eugenijus',
//   'Zofija',
//   'Halina',
//   'Renata',
//   'Edgaras',
//   'Serioga',
//   'Laura',
//   'Gabriele',
//   'Jonas',
// ];
// function vyroVardasPirmas(vardas1, vardas2) {
//   if (vardas1.endsWith('s') && !vardas2.endsWith('s')) return 1;
//   else if (!vardas1.endsWith('s') && vardas2.endsWith('s')) return -1;
//   else return 0;
// }
// vardai.sort((v1, v2) => vyroVardasPirmas(v1, v2));
// console.log(vardai);

// let skaicia = [98, 34, 13, 90, 36, 46, 24, 96.7, 33, 91];

// console.log(skaicia.length);
// console.log(skaicia[5]);
// console.log(skaicia[2]);
// console.log(skaicia[7]);
// console.log(skaicia[skaicia.length - 1]);

// let skaiciai = [85, 67, 93, 68, 52];
// console.log('Masyvas', skaiciai);
// console.log('trecias skaicius is masyvo:', skaiciai[2]);
// console.log('kiek skaiciu yra masyve:', skaiciai.length);
// console.log('paskutinis skaicius is masyvo:', skaiciai[skaiciai.length - 1]);
// let skaiciai = [];
// console.log(skaiciai);

// skaiciai.push(35, 62, 58);
// skaiciai.push(36, 21, 89);

// console.log(skaiciai);

// skaiciai.push(19, 23, 37, 19, 32, 78);
// console.log(skaiciai);

// let skaiciai = [54, 89, 23];
// console.log('skaiciai:', skaiciai);
// console.log('kiekis skaiciu:', skaiciai.length);

// skaiciai2 = [2];
// console.log('skaiciai:', skaiciai);
// console.log('kiekis skaiciu:', skaiciai.length);

// skaiciai[skaiciai.length] = 87;
// console.log('skaiciai:', skaiciai);
// console.log('kiekis skaiciu:', skaiciai.length);

// let pazymiai = [8, 9, 4, 6, 2, 4, 3, 9];

// console.log('studento pazymiai:', pazymiai);
// let suma =
//   pazymiai[0] +
//   pazymiai[1] +
//   pazymiai[2] +
//   pazymiai[3] +
//   pazymiai[4] +
//   pazymiai[5] +
//   pazymiai[6] +
//   pazymiai[7];
// let vidurkis = suma / pazymiai.length;
// console.log('Pazymiu suma:', suma);
// console.log('Vydurkis:', vidurkis);

// let vardai = ['petras', 'paulius', 'juozas', 'Gabrielius'];
// console.log(vardai);

// vardai[2] = 'Katerina';
// vardai[0] = 'Gabriele';
// console.log(vardai);

// let failai = [
//   'grazios paskos/pabaiga pirmas.txt',
//   'grazios paskos/pabaiga antras.txt',
//   'grazios paskos/pabaiga trecias.txt',
//   'grazios paskos/pabaiga ketvirtas.txt',
//   'grazios paskos/pabaiga penktas.txt',
// ];
// console.log('Bibliotekos nuracija:', failai);
// console.log('Pasaku kiekis:', failai.length);

// let papildomas = 'grazios pasakos/pabaiga sestas.txt';
// failai.push(papildomas);
// console.log(failai);
// console.log('pasaku kiekis:', failai.length);

// let automobilai = ['audi', 'ford', 'fiat', 'subaru', 'BMW'];
// for (let i = 0; i < automobilai.length; i++) {
//   console.log(automobilai[i]);
// }

// let miestai = ['Vilnius', 'Kaunas', 'Siauliai', 'Panevezys', 'Druskininkai'];

// for (let i = 0; i < miestai.length; i++) {
//   console.log('Miesto pavadinimas:', miestai[i]);
//   let papildomas = 'Klaipeda';
//   miestai.push(papildomas);
//   console.log(miestai);
//   console.log('Miesto pavadinimai:', miestai[i]);
//   console.log('kiekis:', miestai.length);
// }
