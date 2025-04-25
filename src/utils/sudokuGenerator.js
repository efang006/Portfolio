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
  
// generateCompleteBoard()
// Used In: New Game
// Purpose: Build full valid grid
// User Interaction: Starts puzzle setup
export function generateCompleteBoard() {}

// hasUniqueSolution()
// Used In: Generator
// Purpose: Verify uniqueness
// User Interaction: Ensures fair puzzles
export function hasUniqueSolution(board) {
  let count = 0;
  const cloned = cloneBoard(board);

  function countSolutions(b) {
    const cell = findEmptyCell(b);
    if (!cell) {
      count++;
      return count > 1;  // early exit
    }
    const [row, col] = cell;
    for (let num = 1; num <= 9; num++) {
      if (isValid(b, row, col, num)) {
        b[row][col] = { value: num, isFixed: false };
        if (countSolutions(b)) return true;
        b[row][col] = { value: null, isFixed: false };
      }
    }
    return false;
  }

  countSolutions(cloned);
  return count === 1;
}

// cloneBoard()
// Used In: Solve, Validate
// Purpose: Preserve board state
// User Interaction: Avoid UI mutation
export function cloneBoard(board) {
  return board.map(row => row.map(cell => cell ? { ...cell } : null));
}

// getRandomizedNumbers()
// Used In: Generator/Solver
// Purpose: Introduce randomness
// User Interaction: Makes puzzles unique
export function getRandomizedNumbers() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

// getFilledCells()
// Used In: Difficulty setting
// Purpose: Count filled cells
// User Interaction: Adjust/remove values
export function getFilledCells(board) {
  const positions = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col]?.value !== null) {
        positions.push([row, col]);
      }
    }
  }
  return positions;
}