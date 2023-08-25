const fibs = (num) => {
  if (num < 1 || !Number.isInteger(num)) return 'Please enter a positive number'
  if (num < 3) return num === 1 ? [0] : [0, 1]
  const fibs_arr = [0, 1]
  for (let i = 0; i < num - 2; i++) {
    const element =
      fibs_arr[fibs_arr.length - 1] + fibs_arr[fibs_arr.length - 2]
    fibs_arr.push(element)
  }
  return fibs_arr
}

module.exports = { fibs }
