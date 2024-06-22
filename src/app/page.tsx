'use client';

import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Home: React.FC = () => {
	AOS.init();

	return (
		<main>
			<section className='home-section'>
				<div
					data-aos='flip-left'
					data-aos-easing='ease-out-cubic'
					data-aos-duration='1000'
					data-aos-delay='300'
					className='image-container'>
					<Image
						src={'/me.jpg'}
						alt='Profile Picture'
						width={200}
						height={200}
					/>
				</div>
				<article>
					<h4
						data-aos='fade-up'
						data-oas-duration='1000'
						data-aos-delay='100'>
						HI THERE
					</h4>
					<h2
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-delay='500'>
						I&apos;m Patrick
					</h2>
					<p
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-delay='900'>
						Seeking a <span>talented full stack developer</span>? You&apos;ve
						come to the right place. As a <span>full stack web developer</span>{' '}
						with a passion for technology, and open-source projects, I bring a
						wealth of experience and enthusiasm to the table. My skills in
						React, Next, TypeScript, and Node.js ensure that I deliver{' '}
						<span>innovative and high-quality</span> solutions for every
						project.
					</p>
				</article>
			</section>
		</main>
	);
};

export default Home;
