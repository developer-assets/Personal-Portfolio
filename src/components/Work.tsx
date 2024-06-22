'use client';

import React from 'react';
import { work } from '../data/data';
import { Building2, CalendarDays, UserRoundCog } from 'lucide-react';

const Work: React.FC = () => {
	return (
		<>
			<div className='title'>
				<h2>Work Experience</h2>
			</div>
			<ul className='work-container'>
				{work.map((items, index) => {
					return (
						<li key={index}>
							<div>
								<p>
									<CalendarDays />
									<span>{items.from}</span>
									{'-'}
									<span
										className={
											items.to === 'Present' ? 'text-green-500' : undefined
										}>
										{items.to}
									</span>
									{items.to === 'Present' && (
										<span className='present-ping'></span>
									)}
								</p>
								<p>
									<Building2 />
									<span>{items.name}</span>
								</p>
								<p>
									<UserRoundCog />
									<span>{items.title}</span>
								</p>
							</div>
							<section></section>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Work;
