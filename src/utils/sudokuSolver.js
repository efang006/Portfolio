// Attempts to solve the board using backtracking and returns a solved copy
export function solveSudoku(board) {}

export function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
    }
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (board[r][c] === num) {
          return false;
        }
      }
    }
    return true;
  }
  
  export function findEmptyCell(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === null) {
          return [row, col];
        }
      }
    }
    return null;
  }
  
  export function solveSudoku(board) {
    const empty = findEmptyCell(board);
    if (!empty) return true; // solved
  
    const [row, col] = empty;
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let num of candidates) {
      if (isValid(board, row, col, num)) {
        board[row][col] = num;
        if (solveSudoku(board)) return true;
        board[row][col] = null;
      }
    }
    return false;
  }