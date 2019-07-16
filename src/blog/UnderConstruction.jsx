import React, { useState } from 'react';

const UnderConstruction = ({ children, title }) => {
	const [isActive, setIsActive] = useState(true);
	return (
		<div className={'modal ' + (isActive && 'is-active')}>
			<div
				className="modal-background"
				onClick={() => setIsActive(!isActive)}
			></div>
			<div className="modal-content">
				<article className="message is-warning">
					<div className="message-header">
						<p>Under Construction</p>
						<button
							className="delete"
							aria-label="delete"
							onClick={() => setIsActive(!isActive)}
						></button>
					</div>
					<div className="message-body is-size-5">
						<p>
							Hi! Just wanted you to know that this page isn't finished yet.
							Feel free to take a look around but remember to come back
							in the future to see the final version{' '}
							<span className="icon">
								<i className="far fa-smile"></i>
							</span>
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
