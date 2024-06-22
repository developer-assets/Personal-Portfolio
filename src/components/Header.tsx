'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navs } from '../data/data';
import Theme from './Theme';
import Link from 'next/link';

const Header: React.FC = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [dropdown, setDropdown] = useState<boolean>(false);
	const [currentPath, setCurrentPath] = useState<string>('');

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		isMounted && setCurrentPath(window.location.pathname);
	}, [isMounted]);

	return (
		<header>
			<section>
				<button
					className='open-dropdown'
					onClick={() => setDropdown((current) => !current)}>
					<Menu />
				</button>

				<Link
					className='main-title'
					href={'/'}>
					PATRICK O.
				</Link>

				<ul>
					{navs.map((item, index) => {
						return (
							<li key={index}>
								<Link
									className={
										item.link === currentPath ? 'active-nav' : 'inactive-nav'
									}
									href={`/${item.link}`}>
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>

				{dropdown && (
					<section>
						<button
							className='close-dropdown'
							onClick={() => setDropdown((current) => !current)}>
							<X />
						</button>
						<ul>
							{navs.map((item, index) => {
								return (
									<li key={index}>
										<Link
											onClick={() => setDropdown((current) => !current)}
											className={
												item.link === currentPath
													? 'active-nav'
													: 'inactive-nav'
											}
											href={`/${item.link}`}>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</section>
				)}

				<Theme />
			</section>
		</header>
	);
};

export default Header;
