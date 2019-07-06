import React, {useState} from 'react';
import Grid from './Grid';

const RED = 'red';
const BLUE = 'blue';
const GRID = [[RED, RED, BLUE], [], [], [], [], [], []];

const App = () => {
  const [grid, setGrid] = useState(GRID);
  const [player, setPlayer] = useState(RED);
  const handleDrop = index => {
    if (grid[index].length > 5) {
      return undefined;
    }
    grid[index].push(player);
    setPlayer(player === RED ? BLUE : RED);
    setGrid([...grid]);
  };
  return <Grid grid={grid} setGrid={setGrid} onDrop={handleDrop} />;
};

export default App;
