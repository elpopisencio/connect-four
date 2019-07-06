import React from 'react';
import Highlight from 'react-highlight';

const SettingGrid = () => {
	return (
		<section className="section">
			<div className="content is-medium">
				<h2>Settin' the Grid</h2>
				<Highlight className="javascript">{
`import React from 'react';
import styled from 'styled-components';

const COLOR = {red: 'hsl(348, 100%, 61%)', blue: 'hsl(217, 71%, 53%)'};
const LIGHT = 'hsl(0, 0%, 96%)';
const DARK = 'hsl(0, 0%, 86%)';
const SIZE = 2;

const Disk = styled.divi\`
  width: \${SIZE}em;
  height: \${SIZE}em;
  border-radius: \${SIZE}em;
  background-color: \${({color}) => COLOR[color]};
  margin-top: 1px;
\`;

const Column = styled.div\`
  width: \${SIZE}em;
  height: \${SIZE * 6.5}em;
  padding: 2px;
  background-color: \${({index}) => (index % 2 === 0 ? LIGHT : DARK)};
\`;

const Container = styled.div\`
  display: flex;
  transform: rotate(180deg);
  width: fit-content;
  border: 2px solid black;
  border-radius: 5px;
  overflow: hidden;
\`;

const Grid = ({grid, onDrop}) => (
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

export default Grid;`
				}</Highlight>
			</div>
		</section>
	);
};

export default SettingGrid;
