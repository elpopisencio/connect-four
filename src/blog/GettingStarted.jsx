import React from 'react';
import Highlight from 'react-highlight';
import BlogPage from './BlogPage';

const GettingStarted = () => {
	return (
		<BlogPage title="Gettin' started">
			<div>
				<p>
					First of all we have to use Create React App to make the boiler
					plate of our app.
				</p>
				<pre>$ npx create-react-app connect-four</pre>
				<p>
					And since we already are in the terminal lets go inside of the
					"connect-four" directory and install Styled Component.
				</p>
				<pre>
					$ cd connect-four <br />$ npm i styled-components
				</pre>
				<p>
					Finally, lets clean up a little bit so we can start with our
					awesome game.
				</p>
				<pre>
					$ cd src <br />$ rm App.css App.test.js index.css logo.svg
				</pre>
				<p>Now change App.js to look like this:</p>
				<Highlight className="javascript">
					{`import React from 'react';

const App = () => {
  return (
	 <div>Connect Four</div>
  );
}

export default App;`}
				</Highlight>
				<p>And index.js to look like this:</p>
				<Highlight className="javascript">
					{`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
`}
				</Highlight>
			</div>
		</BlogPage>
	);
};

export default GettingStarted;
