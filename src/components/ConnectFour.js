import React, { useState } from 'react';

const RED = 'red';
const BLUE = 'blue';

const ConnectFour = () => {
	const [columns, setColumns] = useState([[], [], [], [], [], [], []]);
	const [player, setPlayer] = useState(RED);
	return (
		<div
			style={{
				display: 'flex',
				transform: 'rotate(180deg)',
				width: 'fit-content',
			}}
		>
			{columns.map((column, index) => (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '2em',
						height: '10em',
						backgroundColor: 'gray',
					}}
					onClick={() => {
						console.log(index);
						columns[index].push(player);
						console.log(columns);
						setPlayer(player === RED ? BLUE : RED);
						setColumns([...columns]);
					}}
				>
					{column.map((item) => (
						<div
							style={{
								backgroundColor: item,
								width: '1em',
								height: '1em',
								margin: '1px auto ',
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default ConnectFour;
