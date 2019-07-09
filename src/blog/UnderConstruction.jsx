import React, { useState } from 'react';

const UnderConstruction = ({ children, title }) => {
	const [isActive, setIsActive] = useState(true);
	return (
		<div class={'modal ' + (isActive && 'is-active')}>
			<div
				class="modal-background"
				onClick={() => setIsActive(!isActive)}
			></div>
			<div class="modal-content">
				<article class="message is-warning">
					<div class="message-header">
						<p>Under Construction</p>
						<button
							class="delete"
							aria-label="delete"
							onClick={() => setIsActive(!isActive)}
						></button>
					</div>
					<div class="message-body">
						<p>
							Hi! Just for you to know, this page isn't finished yet.
							Feel free to take a look around but remember to come back
							in the future to see the final version.
						</p>
						<br />
						<p>Have an awesome day!</p>
					</div>
				</article>
			</div>
		</div>
	);
};

export default UnderConstruction;
