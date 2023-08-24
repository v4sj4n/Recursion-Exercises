function fibsRec(num) {
  if (num <= 0 || isNaN(num)) return 'Please enter a positive number'
  if (num === 1) return [0]
  if (num === 2) return [0, 1]

  const prevSequence = fibsRec(num - 1)
  const nextFibNumber = prevSequence[num - 2] + prevSequence[num - 3]

  return [...prevSequence, nextFibNumber]
}
module.exports = { fibsRec }
