export function generateSudoku(difficulty = "medium") {
  const fullBoard = generateCompleteBoard();
  const board = cloneBoard(fullBoard);

  const getHoleCountForDifficulty = (level) => {
    if (level === "easy") return 36;
    if (level === "medium") return 45;
    if (level === "hard") return 63;
    return 40;
  };

  let holesToDig = getHoleCountForDifficulty(difficulty);
  const filledCells = getFilledCells(board);

  let attempts = 0;
  const maxAttempts = holesToDig * 5;

  while (holesToDig > 0 && attempts < maxAttempts) {
    const index = Math.floor(Math.random() * filledCells.length);
    const [row, col] = filledCells[index];
    const temp = board[row][col];
    board[row][col] = { value: null, isFixed: false };

    if (!hasUniqueSolution(board)) {
      board[row][col] = temp; // undo
    } else {
      filledCells.splice(index, 1); // remove from filled list
      holesToDig--;
    }

    attempts++;
  }

  return board;
}
  
// generateCompleteBoard()
// Used In: New Game
// Purpose: Build full valid grid
// User Interaction: Starts puzzle setup
export function generateCompleteBoard() {
  const board = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => ({ value: null, isFixed: false }))
  );

  function fillBoard(board) {
    const empty = findEmptyCell(board);
    if (!empty) return true;

    const [row, col] = empty;
    for (const num of getRandomizedNumbers()) {
      if (isValid(board, row, col, num)) {
        board[row][col] = { value: num, isFixed: true };
        if (fillBoard(board)) return true;
        board[row][col] = { value: null, isFixed: false }; // backtrack
      }
    }

    return false;
  }

  if (fillBoard(board)) {
    return board;
  } else {
    throw new Error("Failed to generate a complete Sudoku board.");
  }
}

// findEmptyCell()
// Used In: Solver/Generator
// Purpose: Next cell logic
// User Interaction: Part of recursion engine
export function findEmptyCell(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col]?.value === null) {
        return [row, col];
      }
    }
  }
  return null; // No empty cells
}

// isValid()
// Used In: Every cell input
// Purpose: Enforce Sudoku rules
// User Interaction: Validate user moves
export function isValid(board, row, col, num) {
  // Check row
  for (let i = 0; i < 9; i++) {
    if (i !== col && board[row][i]?.value === num) {
      return false;
    }
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (i !== row && board[i][col]?.value === num) {
      return false;
    }
  }

  // Check 3x3 box
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      if ((r !== row || c !== col) && board[r][c]?.value === num) {
        return false;
      }
    }
  }

  return true; // Safe to place
}

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