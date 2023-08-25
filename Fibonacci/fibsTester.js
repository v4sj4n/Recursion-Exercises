const { fibs } = require('./fibs')
const { fibsRec } = require('./fibsRec')

const numbersToTry = [[], {}, true, 'Word', -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbersToTry.forEach((num) => console.log(fibs(num)))
numbersToTry.forEach((num) => console.log(fibsRec(num)))
