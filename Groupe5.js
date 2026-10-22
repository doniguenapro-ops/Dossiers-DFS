let recetteTotale = 0;
let billets1500 = 0;
let billets2500 = 0;
for (let age = 11; age <= 20; age++) {
    let prix;
    if (age < 16) {
        prix = 1500;
        billets1500++;
    } else {
        prix = 2500;
        billets2500++;
    }

    recetteTotale += prix;
    console.log(`Age : ${age} ans - prix du billet : ${prix} FCFA`);
}

console.log(`\nRecette totale : ${recetteTotale} FCFA`);
console.log(`Nombre de billets à 1500 FCFA : ${billets1500}`);
console.log(`Nombre de billets à 2500 FCFA : ${billets2500}`);