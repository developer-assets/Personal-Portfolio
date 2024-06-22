'use client';

import React from 'react';
import { interests, languages, skills } from '../data/data';

const Lists: React.FC = () => {
	return (
		<>
			<div className='title'>
				<h2>Skills</h2>
			</div>
			<ul className='list-container'>
				{skills.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>

			<div className='title'>
				<h2>Languages</h2>
			</div>
			<ul className='list-container'>
				{languages.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>

			<div className='title'>
				<h2>Interests</h2>
			</div>
			<ul className='list-container'>
				{interests.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</>
	);
};

export default Lists;
