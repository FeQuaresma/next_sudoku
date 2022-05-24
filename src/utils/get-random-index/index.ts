/**
 * Return a random sudoku grid index in the 0 to 8 range
 * @returns 
 */

function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(9))
}

export default getRandomIndex