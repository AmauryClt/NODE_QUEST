
const monProfile = require('./information');


const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Mon nom est ${monProfile.nom} ${monProfile.prenom} et je suis actuellement sur le campus ${monProfile.campus}.`,
}));

