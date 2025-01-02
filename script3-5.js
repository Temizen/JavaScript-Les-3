const getal1 = 100 //parseInt(prompt('Geef het eerste getal:' ,'Eerste getal'));
const getal2 = 100 // parseInt(prompt('Geef het tweede getal:' ,'Tweede getal'));

const getallen = 'De getallen die u invoerde waren ' + getal1 + ' en ' + getal2 + ".";
document.getElementById('getallen').innerHTML = getallen;

const vergelijken = (getal1 > getal2) ? ' groter dan ' 
                    : (getal1 === getal2) ? ' gelijk aan '
                        : ' kleiner dan ';
const vergeleken = getal1 + ' is ' + vergelijken + getal2 + '.';

document.getElementById('vergelijken1').innerHTML = vergeleken