import React, { useState } from 'react';
import Grid from './Grid';

const RED = 'red';
const BLUE = 'blue';
const GRID = [[], [], [], [], [], [], []];

const checkVertical = (
  currentPlayer,
  column,
  disksAmount
) => {
  disksAmount = disksAmount || 0;
  const index = column.length - disksAmount - 1;
  if (column[index] === currentPlayer) {
    if (
      disksAmount === 3 ||
      checkVertical(currentPlayer, column, disksAmount + 1)
    ) {
      column[index] = currentPlayer + '-win';
      return true;
    }
  }
  return false;
};

const checkHorizontal = (
  currentPlayer,
  grid,
  column,
  row,
  disksAmount
) => {
  disksAmount = disksAmount || 0;
  if (grid[column] && grid[column][row] === currentPlayer) {
    if (
      checkHorizontal(
        currentPlayer,
        grid,
        column + 1,
        row,
        disksAmount + 1
      ) ||
      disksAmount >= 3
    ) {
      grid[column][row] = currentPlayer + '-win';
      return true;
    }
  }
  return false;
};

const goLeft = (currentPlayer, grid, column, row) => {
  if (grid[column] && grid[column][row] === currentPlayer) {
    if (!goLeft(currentPlayer, grid, column - 1, row)) {
      checkHorizontal(currentPlayer, grid, column, row);
    }
  }
  return false;
};

const checkWin = (currentPlayer, grid, columnIndex) => {
  if (checkVertical(currentPlayer, grid[columnIndex])) {
    return true;
  }
  goLeft(
    currentPlayer,
    grid,
    columnIndex,
    grid[columnIndex].length - 1
  );
};

const App = () => {
  const [grid, setGrid] = useState(GRID);
  const [currentPlayer, setCurrentPlayer] = useState(RED);
  const handleDrop = (index) => {
    if (grid[index].length > 5) {
      return undefined;
    }
    const updatedGrid = [...grid];
    updatedGrid[index] = [
      ...updatedGrid[index],
      currentPlayer,
    ];
    console.log(
      checkWin(currentPlayer, updatedGrid, index)
    );
    setCurrentPlayer(currentPlayer === RED ? BLUE : RED);
    setGrid(updatedGrid);
  };
  return (
    <div>
      <h3>Is player {currentPlayer} turn!</h3>
      <Grid
        grid={grid}
        setGrid={setGrid}
        onDrop={handleDrop}
      />
    </div>
  );
};

export default App;
