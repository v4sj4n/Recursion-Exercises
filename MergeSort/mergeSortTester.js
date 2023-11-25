const { mergeSort } = require('./mergeSort')

arraysToTry = [
  [],
  [-2, -6, -72, 23, 563, 999, 0, 52, 74, 32],
  [100, -40, 500, -124, 0, 21, 7],
  [5, 5, -10, 0, -10],
  [-2, -6],
  [2],
]

arraysToTry.forEach((arr) => console.log(mergeSort(arr)))
