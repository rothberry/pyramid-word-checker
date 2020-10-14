/**
 * Accept a string as input and return a response indicating whether a word is a pyramid word.
 * A word is a pyramid word if you can arrange the letters in increasing frequency,
 * starting with 1 and continuing without gaps and without duplicates.
 * a: 97 ...z: 122
 *
 * @param {string} word
 * @returns {boolean}
 */

const pyramidChecker = (word) => {
  let hash = {}
  let wordArray = word.toLowerCase().split("")
  wordArray.forEach((letter) => {
    // todo error handling for non letters
    let charCode = letter.charCodeAt()
    if (charCode >= 97 && charCode <= 122) {
      hash[letter] ? hash[letter] += 1 : hash[letter] = 1
    }
  })
  const asc = (a, b) => a - b
  const sortedVals = Object.values(hash).sort(asc)
  console.log(hash)
  return sortedVals.length === sortedVals[sortedVals.length - 1]
}

const createLongWordTrue = n => {
  let arr = []
  let i = 0
  let letterCode = 97
  while (i < n ) {
    let letter = String.fromCharCode(letterCode)
    let j = 0
    while (j <= i) {
      arr.push(letter)
      j++
    }
    letterCode++
    i++
  }
  return arr.join("")
}

// TESTING
// =======================
let word = "banana"
console.log(word)
console.log(pyramidChecker(word))

word = "bandana"
console.log(word)
console.log(pyramidChecker(word))

word = "ppipioypipooouu"
console.log(word)
console.log(pyramidChecker(word))

word = createLongWordTrue(26)
console.log(word)
console.log(pyramidChecker(word))