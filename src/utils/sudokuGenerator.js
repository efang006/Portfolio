export function generateSudoku() {
  return [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
  ].map(row =>
    row.map(value => ({
      value,
      isFixed: value !== null
    }))
  );
}
  
// Generates a full, valid Sudoku solution board
export function generateCompleteBoard() {}

// Checks if the generated board has only one valid solution
export function hasUniqueSolution(board) {}

export function cloneBoard(board) {
  return board.map(row => [...row]);
}

export function getRandomizedNumbers() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

export function getFilledCells(board) {
  const positions = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== null) {
        positions.push([row, col]);
      }
    }
  }
  return positions;
}