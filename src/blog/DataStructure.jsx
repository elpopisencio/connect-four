import React from 'react';
import Highlight from 'react-highlight';

const DataStructure = () => {
	return (
		<section className="section">
			<div className="content is-medium">
				<h2>Defining the data structure</h2>
				<p>
					The grid where we're going to drop the disks can be represented
					with an array of arrays.
				</p>
				<Highlight className="javascript">
					const grid = [[],[],[],[],[],[],[]];
				</Highlight>
				<p>
					The only difference with the usual way of representing it is that
					we are going to set the columns first and then the rows. So, to
					get row 1 column 2 we say
				</p>
				<Highlight className="javascript">grid[2][1];</Highlight>
				<p>
					This is because we want to have de columns independent of each
					other. So, to drop the disks into de grid we can do:
					<Highlight className="javascript">
						grid[1].push('disk');
					</Highlight>
					<p>
						Talking about disks, we are going to represent them with the
						colour setted in two constants.
					</p>
				</p>
				<Highlight className="javascript">
					const RED = 'red';
					<br />
					const BLUE = 'blue';
				</Highlight>
				<p>So, to drop a red disk into the grid we're going to do:</p>
				<Highlight className="javascript">grid[1].push(RED);</Highlight>
				<p>
					As we are going to use Hooks, we have to import the useState
					hook. App.js should look like this:
				</p>
				<Highlight className="javascript">{`import React, {useState} from 'react';
const RED = 'red';
const BLUE = 'blue';
const GRID = [[], [], [], [], [], [], []];

const App = () => {
  const [grid, setGrid] = useState(GRID);
  return <div>Connect Four</div>;
};

export default App;`}</Highlight>
			</div>
		</section>
	);
};

export default DataStructure;
