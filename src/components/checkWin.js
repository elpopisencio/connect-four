const checkVertical = (currentPlayer, column, disksAmount) => {
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

const checkFromLeftWithSlope = (
	currentPlayer,
	grid,
	{ column, row },
	slope,
	disksAmount
) => {
	disksAmount = disksAmount || 0;
	if (grid[column] && grid[column][row] === currentPlayer) {
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
	}
	return false;
};

const getLeftPositionWithSlope = (
	currentPlayer,
	grid,
	{ column, row },
	slope
) => {
	if (grid[column] && grid[column][row] === currentPlayer) {
		const nextPosition = [column - 1, row - slope];
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
	}
	return false;
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
