const getal1 = parseInt(prompt('Het eerste getal.'));
const getal2 = parseInt(prompt('Het tweede getal.'));

let getallen = 'De getallen die u invoerde waren ' + getal1 + ' en ' + getal2 + ".";
document.getElementById('uwgetallen').innerHTML = getallen;

const vergelijking1 = getal1 > getal2;
const groterDan = 'Is het eerste getal groter dan het tweede getal? ' + vergelijking1;
document.getElementById('groter').innerHTML = groterDan;

const vergelijking2 = getal1 < getal2;
const kleinerDan = 'Is het eerste getal kleiner dan het tweede getal? ' + vergelijking2;
document.getElementById('kleiner').innerHTML = kleinerDan;

const vergelijking3 = getal1 === getal2;
const isGelijkAan = 'Is het eerste getal gelijk aan het tweede getal? ' + vergelijking3;
document.getElementById('gelijk').innerHTML = isGelijkAan;



