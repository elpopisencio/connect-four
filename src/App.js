import React from 'react';
import ConnectFour from './components/ConnectFour';
import 'highlight.js/styles/lightfair.css';
import GettingStarted from './blog/GettingStarted';
import DataStructure from './blog/DataStructure';

const App = () => {
	return (
		<div className="container">
			<div className="hero">
				<div className="hero-body">
					<h1 className="title is-1">Connect Four</h1>
					<h2 className="subtitle is-4">
						<div className="level">
							<div className="level-left">Made with React.</div>
							<div className="level-right">
								<a
									style={{ color: 'inherit' }}
									href="https://elpopisencio.github.io"
								>
									<span class="icon is-large">
										<i class="fa fa-home"></i>
									</span>
								</a>
								<a
									style={{ color: 'inherit' }}
									href="https://github.com/elpopisencio/pagination"
								>
									<span class="icon is-large">
										<i class="fab fa-github"></i>
									</span>
								</a>
							</div>
						</div>
					</h2>
				</div>
			</div>
			<section className="section">
				<div className="content is-medium">
					<h2>Description</h2>
					<p>
						In this project we'll make a Connect Four game with React and
						Styled Components.
					</p>
				</div>
			</section>
			<GettingStarted />
			<DataStructure />
			<ConnectFour />
		</div>
	);
};

export default App;
