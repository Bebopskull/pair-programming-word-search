const transpose = function (matrix) {
  // Length of the first array
  const columns = matrix[0].length - 1;
  // The total number of arrays
  const rows = matrix.length - 1;

  // Array for storing arrays
  let transposedMatrix = [];

  // Looping over columnns and making placeholder rows with empty arrays
  for (let i = 0; i <= columns; i++) {
    transposedMatrix.push([]);
  }

  // Looping over columns then rows and switch places for matrix values
  for (i = 0; i <= columns; i++) {
    for (j = 0; j <= rows; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
};

module.exports = transpose;