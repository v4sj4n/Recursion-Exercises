const fibs = (num) => {
  if (num <= 0) {
    return 'Please enter a number bigger than 0'
  } else if (num <= 2) {
    return num === 1 ? [0] : [0, 1]
  }
  const fibs_arr = [0, 1]
  for (let i = 0; i < num - 2; i++) {
    const element =
      fibs_arr[fibs_arr.length - 1] + fibs_arr[fibs_arr.length - 2]
    fibs_arr.push(element)
  }
  return fibs_arr
}

const numbersToTry = [0, 1, 2, 4, 8, 16, 32, 64]
numbersToTry.forEach((num) => console.log(fibs(num)))
