import React from 'react';
import Highlight from 'react-highlight';
import BlogPage from './BlogPage';
import Grid from '../components/Grid';

const WinningIsWinning = () => {
	return (
		<BlogPage title="Winning's winning">
			<p>
				Now we're going to define the winning logic, in which we're going to
				use recursion. So, let's take care of the vertical situation first,
				just to warm up.
			</p>
			<Highlight className="javascript">{`const checkVertical = (currentPlayer, column, disksAmount) => {
	disksAmount = disksAmount || 1;
	const index = column.length - disksAmount;
	if (!column[index] || column[index] !== currentPlayer) {
		return false;
	}
	if (
		disksAmount === 4 ||
		checkVertical(currentPlayer, column, disksAmount + 1)
	) {
		column[index] = currentPlayer + '-win';
		return true;
	}
};`}</Highlight>
			<Grid grid={[[], [], [], ['red', 'red', 'red', 'red'], [], [], []]} />
			<p>
				As always, we have to define the base case for the recursion. In our
				case, the base case is when the disk doesn't belong to the current
				player or the position is outside of the grid.
			</p>
			<Highlight className="javascript">{`if (!column[index] || column[index] !== currentPlayer) {
	return false;
}`}</Highlight>
		</BlogPage>
	);
};

export default WinningIsWinning;

/*
const checkVertical = (currentPlayer, column, disksAmount) => {
	disksAmount = disksAmount || 1;
	const index = column.length - disksAmount;
	if (!column[index] || column[index] !== currentPlayer) {
		return false;
	}
	if (
		disksAmount === 4 ||
		checkVertical(currentPlayer, column, disksAmount + 1)
	) {
		column[index] = currentPlayer + '-win';
		return true;
	}
};

const checkFromLeftWithSlope = (
	currentPlayer,
	grid,
	{ column, row },
	slope,
	disksAmount
) => {
	if (!grid[column] || grid[column][row] !== currentPlayer) {
		return false;
	}
	disksAmount = disksAmount || 0;
	const nextPosition = { column: column + 1, row: row + slope };
	if (
		checkFromLeftWithSlope(
			currentPlayer,
			grid,
			nextPosition,
			slope,
			disksAmount + 1
		) ||
		disksAmount >= 3
	) {
		grid[column][row] = currentPlayer + '-win';
		return true;
	}
};

const getLeftPositionWithSlope = (
	currentPlayer,
	grid,
	{ column, row },
	slope
) => {
	if (!grid[column] || grid[column][row] !== currentPlayer) {
		return false;
	}
	const nextPosition = { column: column - 1, row: row - slope };
	const leftResult = getLeftPositionWithSlope(
		currentPlayer,
		grid,
		nextPosition,
		slope
	);
	if (leftResult === false) {
		return { column, row };
	}
	return leftResult;
};

const checkFromLeftUp = (currentPlayer, grid, column) => {
	const SLOPE = -1;
	const currentPosition = { column, row: grid[column].length - 1 };
	const leftUpPosition = getLeftPositionWithSlope(
		currentPlayer,
		grid,
		currentPosition,
		SLOPE
	);
	return checkFromLeftWithSlope(currentPlayer, grid, leftUpPosition, SLOPE);
};

const checkFromLeftDown = (currentPlayer, grid, column) => {
	const SLOPE = 1;
	const currentPosition = { column, row: grid[column].length - 1 };
	const leftUpPosition = getLeftPositionWithSlope(
		currentPlayer,
		grid,
		currentPosition,
		SLOPE
	);
	return checkFromLeftWithSlope(currentPlayer, grid, leftUpPosition, SLOPE);
};
const checkFromLeft = (currentPlayer, grid, column) => {
	const SLOPE = 0;
	const currentPosition = { column, row: grid[column].length - 1 };
	const leftUpPosition = getLeftPositionWithSlope(
		currentPlayer,
		grid,
		currentPosition,
		SLOPE
	);
	return checkFromLeftWithSlope(currentPlayer, grid, leftUpPosition, SLOPE);
};

const checkWin = (currentPlayer, grid, columnIndex) => {
	return (
		checkFromLeftUp(currentPlayer, grid, columnIndex) ||
		checkFromLeftDown(currentPlayer, grid, columnIndex) ||
		checkFromLeft(currentPlayer, grid, columnIndex) ||
		checkVertical(currentPlayer, grid[columnIndex])
	);
};

export default checkWin;

*/
