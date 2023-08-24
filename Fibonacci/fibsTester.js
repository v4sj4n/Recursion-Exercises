const { fibs } = require('./fibs')
const { fibsRec } = require('./fibsRec')

const numbersToTry = [0, 1, 2, 4, 8, 16]
numbersToTry.forEach((num) => console.log(fibs(num)))
numbersToTry.forEach((num) => console.log(fibsRec(num)))
