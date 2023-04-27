'use client';

import { useState } from 'react';
import Link from 'next/link';

const elementosNav = [
	{
		nombre: 'Home',
		url: '/'
	},
	{
		nombre: 'Nosotros',
		url: '/nosotros'
	}
];

export default function Navegacion() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleNav = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<>
			<button className=" text-primary-pink text-xl sm:hidden" onClick={toggleNav}>
				Menú
			</button>

			<nav className={`${isExpanded ? 'block' : 'hidden'} grid leading-[10vw] self-center text-left ml-3 uppercase text-primary-pink sm:block sm:space-x-16`}>

				{elementosNav.map( (el, index) => (
					<Link key={index} href={el.url}>
						{el.nombre}
					</Link>
				))}

			</nav>
		</>
	);
}



