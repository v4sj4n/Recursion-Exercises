const fibsRec = (num) => {
  if (num < 1 || !Number.isInteger(num)) return 'Please enter a positive number'
  if (num < 3) return num === 1 ? [0] : [0, 1]

  return [
    ...fibsRec(num - 1),
    fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
  ]
}
module.exports = { fibsRec }
