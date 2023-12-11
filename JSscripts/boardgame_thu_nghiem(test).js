// Generate an empty 9x9 grid
function generateEmptyGrid() {
    const grid = [];
    for (let i = 0; i < 9; i++) {
      grid.push(Array(9).fill(0));
    }
    return grid;
  }
  
  // Fill the diagonal boxes with random numbers
  function fillDiagonalBoxes(grid) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; i += 3) {
      const box = nums.slice();
      for (let j = i; j < i + 3; j++) {
        for (let k = i; k < i + 3; k++) {
          const randomIndex = Math.floor(Math.random() * box.length);
          const num = box[randomIndex];
          box.splice(randomIndex, 1);
          grid[j][k] = num;
        }
      }
    }
  }
  
  // Shuffle rows and columns
  function shuffleRowsAndColumns(grid) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const randomRow = Math.floor(Math.random() * 9);
        const randomCol = Math.floor(Math.random() * 9);
        const temp = grid[i][j];
        grid[i][j] = grid[randomRow][randomCol];
        grid[randomRow][randomCol] = temp;
      }
    }
  }
  
  // Remove cells to create empty spaces
  function removeCells(grid, difficulty) {
    const cellsToRemove = Math.floor((difficulty / 100) * 81); // adjust the difficulty level as desired
    let count = 0;
    while (count < cellsToRemove) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (grid[row][col] !== 0) {
        grid[row][col] = 0;
        count++;
      }
    }
  }
  
  // Validate the grid using a Sudoku solving algorithm
  function validateGrid(grid) {
    // Implement a Sudoku solving algorithm to validate the grid
    // Check for a unique solution, multiple solutions, or no solution
    // Return true if the grid is valid, false otherwise
    // This implementation is beyond the scope of this example
    return true;
  }
  
  // Display the grid on the console

  function displayGrid(grid) {
    for (let i = 0; i < 9; i++) {
      console.log(grid[i].join(' '));
    }
  }
  
  // Generate and display a Sudoku puzzle
  function generateSudokuPuzzle(difficulty) {
    let grid = generateEmptyGrid();
    fillDiagonalBoxes(grid);
    shuffleRowsAndColumns(grid);
    removeCells(grid, difficulty);
  
    // Validate the grid
    if (!validateGrid(grid)) {
      // If the grid is not valid, regenerate the puzzle
      generateSudokuPuzzle(difficulty);
      return;
    }
  
    // Display the puzzle
    console.log('Sudoku Puzzle:');
    displayGrid(grid);
  }
  
  // Generate a Sudoku puzzle with a difficulty of 50%
  generateSudokuPuzzle(2);
 
