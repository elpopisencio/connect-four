import React, { useState } from 'react';

const BlogPage = ({ children, title }) => {
	const [isShown, setIsShown] = useState(true);
	return (
		<section className="section" style={{ paddingBottom: 0 }}>
			<div className="content">
				<h2>
					{title + ' '}
					{isShown ? (
						<a
							className="has-text-danger is-size-5"
							href="#!"
							onClick={() => setIsShown(!isShown)}
						>
							<span className="icon is-small">
								<i className="fas fa-minus-circle"></i>
							</span>
						</a>
					) : (
						<a
							className="has-text-success is-size-5"
							href="#!"
							onClick={() => setIsShown(!isShown)}
						>
							<span className="icon is-small">
								<i className="fas fa-plus-circle"></i>
							</span>
						</a>
					)}
				</h2>
				{isShown && children}
			</div>
		</section>
	);
};

export default BlogPage;
