import React from 'react';
import Highlight from 'react-highlight';
import BlogPage from './BlogPage';

const SettingGrid = () => {
	return (
		<BlogPage title="Settin' the Grid">
			<p>
				First of all we're going to set some constants with the colors and
				sizes. This way if something changes in the future we only have to
				change the values here.
			</p>
			<Highlight className="javascript">{`const COLOR = {
	red: 'hsl(348, 100%, 61%)',
	blue: 'hsl(217, 71%, 53%)',
};
const LIGHT = 'hsl(0, 0%, 96%)';
const DARK = 'hsl(0, 0%, 86%)';
const SIZE = 2;`}</Highlight>
			<p>
				The next step is to set up the Grid. We're going to use flexbox to
				display it. The left, right and margin attributs are set to display
				the grid in the center of the page. The display one is to make the
				columns be displayed next to each other. And the rest are to display
				de border, except for the box-sizing one which is used because bulma
				messed up with the padding.
			</p>
			<Highlight className="javascript">{`const Container = styled.div\`
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	width: fit-content;
	border: 2px solid black;
	border-radius: 5px;
	overflow: hidden;
	box-sizing: unset;
\`;`}</Highlight>
			<p>Now we have to set up the columns.</p>
			<Highlight className="javascript">{`const Column = styled.div\`
	display: flex;
	flex-direction: column-reverse;
	width: \${SIZE}em;
	height: \${SIZE * 7}em;
	padding: 2px 6px 2px 2px
	background-color: \${({ index }) => (index % 2 === 0 ? LIGHT : DARK)};
\`;`}</Highlight>
		</BlogPage>
	);
};

export default SettingGrid;

/*
import React from 'react';
import styled from 'styled-components';

const COLOR = {
	red: 'hsl(348, 100%, 61%)',
	blue: 'hsl(217, 71%, 53%)',
};
const LIGHT = 'hsl(0, 0%, 96%)';
const DARK = 'hsl(0, 0%, 86%)';
const SIZE = 2;

const Disk = styled.div`
	width: ${SIZE}em;
	height: ${SIZE}em;
	border-radius: ${SIZE}em;
	border: 2px solid
		${({ color }) => (!color.includes('-win') ? COLOR[color] : 'black')};
	background-color: ${({ color }) => COLOR[color.replace('-win', '')]};
	margin-top: 1px;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column-reverse;
	width: ${SIZE}em;
	height: ${SIZE * 7}em;
	padding: 2px 6px 2px 2px
	background-color: ${({ index }) => (index % 2 === 0 ? LIGHT : DARK)};
`;

const Container = styled.div`
	left: 0;
	right: 0;
	margin: auto;
	display: flex;
	width: fit-content;
	border: 2px solid black;
	border-radius: 5px;
	overflow: hidden;
	box-sizing: unset;
`;

const Grid = ({ grid, onDrop }) => (
	<Container>
		{grid.map((column, index) => (
			<Column key={index} index={index} onClick={() => onDrop(index)}>
				{column.map((color, index) => (
					<Disk key={index} color={color} />
				))}
			</Column>
		))}
	</Container>
);

export default Grid;

 * */
