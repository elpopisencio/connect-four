import React, { useState } from 'react';
import Grid from './Grid';
import checkWin from './checkWin';

const RED = 'red';
const BLUE = 'blue';
const GRID = [[], [], [], [], [], [], []];

const getRandomPlayer = () => (Math.random() >= 0.5 ? RED : BLUE);

const isGridFull = (grid) =>
	grid.reduce((total, current) => total && current.length === 6, true);

const App = () => {
	const [grid, setGrid] = useState(GRID);
	const [currentPlayer, setCurrentPlayer] = useState(getRandomPlayer());
	const [gameOver, setGameOver] = useState(false);
	const handleDrop = (index) => {
		if (grid[index].length > 5 || gameOver) {
			return undefined;
		}
		const updatedGrid = [...grid];
		updatedGrid[index] = [...updatedGrid[index], currentPlayer];
		setGrid(updatedGrid);
		if (isGridFull(updatedGrid)) {
			return setGameOver(true);
		}
		if (checkWin(currentPlayer, updatedGrid, index)) {
			return setGameOver(currentPlayer);
		}
		setCurrentPlayer(currentPlayer === RED ? BLUE : RED);
	};
	return (
		<div className="has-text-centered">
			{gameOver ? (
				<p>
					{gameOver !== true
						? `The ${currentPlayer} player won!`
						: 'Game over.'}{' '}
					Click{' '}
					<a
						href="#!"
						onClick={() =>
							setCurrentPlayer(getRandomPlayer()) ||
							setGameOver(false) ||
							setGrid(GRID)
						}
					>
						here
					</a>{' '}
					to play again.
				</p>
			) : (
				<p>Is {currentPlayer} player turn!</p>
			)}
			<Grid grid={grid} setGrid={setGrid} onDrop={handleDrop} />
		</div>
	);
};

export default App;
