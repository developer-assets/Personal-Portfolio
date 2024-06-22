'use client';

import React from 'react';
import Work from '../../components/Work';
import Lists from '../../components/Lists';

const About: React.FC = () => {
	return (
		<main>
			<section className='about-section'>
				<h1>About me</h1>
				<div>
					<div className='title'>
						<h2>Profile</h2>
					</div>
					<article>
						<p>
							Seeking a <span>talented full stack developer</span>? You&apos;ve
							come to the right place. As a{' '}
							<span>full stack web developer</span> with a passion for
							technology, and open-source projects, I bring a wealth of
							experience and enthusiasm to the table. My skills in React, Next,
							TypeScript, and Node.js ensure that I deliver{' '}
							<span>innovative and high-quality</span> solutions for every
							project.
						</p>
					</article>
				</div>
				<div>
					{' '}
					<Work />
				</div>
				<div>
					{' '}
					<Lists />
				</div>
			</section>
		</main>
	);
};

export default About;
