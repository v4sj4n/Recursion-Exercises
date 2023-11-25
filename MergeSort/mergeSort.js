function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.splice(0, middle)
  return merge(mergeSort(left), mergeSort(arr))
}

function merge(left, right) {
  let arrToReturn = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arrToReturn.push(left.shift())
    } else {
      arrToReturn.push(right.shift())
    }
  }
  return [...arrToReturn, ...left, ...right]
}

module.exports = { mergeSort }
