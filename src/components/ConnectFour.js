import React, { useState } from 'react';
import Grid from './Grid';
import checkWin from './checkWin';

const RED = 'red';
const BLUE = 'blue';
const GRID = [[], [], [], [], [], [], []];

const App = () => {
	const [grid, setGrid] = useState(GRID);
	const [currentPlayer, setCurrentPlayer] = useState(RED);
	const [playerWin, setPlayerWin] = useState(false);
	const handleDrop = (index) => {
		if (grid[index].length > 5 || playerWin) {
			return undefined;
		}
		const updatedGrid = [...grid];
		updatedGrid[index] = [...updatedGrid[index], currentPlayer];
		const didWin = checkWin(currentPlayer, updatedGrid, index);
		if (didWin) {
			setPlayerWin(didWin);
		} else {
			setCurrentPlayer(currentPlayer === RED ? BLUE : RED);
		}
		setGrid(updatedGrid);
	};
	return (
		<div className="has-text-centered">
			{playerWin ? (
				<p>The {currentPlayer} player won!</p>
			) : (
				<p>Is {currentPlayer} player turn!</p>
			)}
			<Grid grid={grid} setGrid={setGrid} onDrop={handleDrop} />
		</div>
	);
};

export default App;
